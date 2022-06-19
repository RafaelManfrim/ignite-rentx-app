import { useState, useEffect, createContext } from "react";

import { api } from "../../services/api";
import { database } from '../../database'
import { User as UserModel } from '../../database/model/User'

type User = {
  id: string;
  user_id: string;
  email: string;
  name: string;
  driver_license: string;
  avatar: string;
  token: string;
}

type SignInCredentials = {
  email: string
  password: string
}

interface AuthContextData {
  user: User
  signIn: (credentials: SignInCredentials) => Promise<void>
  signOut: () => Promise<void>
  updateUser: (user: User) => Promise<void>
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

interface AuthContextProviderProps {
  children: React.ReactNode
}

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<User>({} as User)

  async function loadUserData() {
    const userCollection = database.get<UserModel>('users')
    const response = await userCollection.query().fetch()
    if (response.length > 0) {
      const userData = response[0]._raw as unknown as User
      api.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`
      setUser(userData)
    }
  }

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post('/sessions/', { email, password })
      const { token, user: userFromAPI } = response.data
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      const userCollection = database.get<UserModel>('users')
      await database.write(async () => {
        await userCollection.create((newUser) => {
          newUser.user_id = userFromAPI.id
          newUser.name = userFromAPI.name
          newUser.email = userFromAPI.email
          newUser.driver_license = userFromAPI.driver_license
          newUser.avatar = userFromAPI.avatar
          newUser.token = token
        })
      })

      setUser({ ...userFromAPI, token })
      loadUserData()
    } catch (error: any) {
      throw new Error(error)
    }
  }

  async function signOut() {
    try {
      const userCollection = database.get<UserModel>('users')
      await database.write(async () => {
        const userSelected = await userCollection.find(user.id)
        await userSelected.destroyPermanently()
      })

      setUser({} as User)
    } catch (error: any) {
      throw new Error(error)
    }
  }

  async function updateUser(user: User) {
    try {
      const userCollection = database.get<UserModel>('users')
      await database.write(async () => {
        const userSelected = await userCollection.find(user.id)
        await userSelected.update(userData => {
          userData.name = user.name
          userData.driver_license = user.driver_license
          userData.avatar = user.avatar
        })
      })

      setUser(user)
    } catch (error: any) {
      throw new Error(error)
    }
  }

  useEffect(() => {
    loadUserData()
  }, [])

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, updateUser }}>
      {children}
    </AuthContext.Provider>
  )
}