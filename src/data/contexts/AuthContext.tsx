import { useState, createContext } from "react";

import { api } from "../../services/api";

type User = {
  id: string;
  email: string;
  name: string;
  driver_license: string;
  avatar: string;
}

type AuthState = {
  token: string
  user: User
}

type SignInCredentials = {
  email: string
  password: string
}

interface AuthContextData {
  user: User
  signIn: (credentials: SignInCredentials) => Promise<void>
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

interface AuthContextProviderProps {
  children: React.ReactNode
}

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [authData, setAuthData] = useState<AuthState>({} as AuthState)

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post('/sessions/', { email, password })
      setAuthData(response.data)
      const { token } = response.data
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AuthContext.Provider value={{ user: authData.user, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}