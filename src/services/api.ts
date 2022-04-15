import axios from "axios"

const baseURL = 'http://10.0.0.105:3333'

export const api = axios.create({ baseURL })
