import axios from "axios"

const baseURL = 'http://10.0.0.106:3333'
// const baseURL = 'http://192.168.1.21:3333'

export const api = axios.create({ baseURL })
