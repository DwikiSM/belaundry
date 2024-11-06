import axios from 'axios'

const BASE_URL = import.meta.env.VITE_HOST
const KEY = import.meta.env.VITE_KEY

export const getUserInfo = async () =>
  await axios.get(BASE_URL + '/platform/user/info', {
    headers: { token: KEY },
  })
