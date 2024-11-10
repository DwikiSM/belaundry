import axios from 'axios'

const BASE_URL = import.meta.env.VITE_HOST
const KEY = import.meta.env.VITE_KEY

export const getProduct = async (id) =>
  await axios.get(BASE_URL + '/platform/product/' + id, {
    headers: { token: KEY },
  })

export const getProducts = async () =>
  await axios.get(BASE_URL + '/platform/product', {
    headers: { token: KEY },
  })

export const getProductsReport = async () =>
  await axios.get(BASE_URL + '/platform/product/report', {
    headers: { token: KEY },
  })

export const getProductsCategory = async () =>
  await axios.get(BASE_URL + '/platform/product/categories', {
    headers: { token: KEY },
  })

export const getUserInfo = async () =>
  await axios.get(BASE_URL + '/platform/user/info', {
    headers: { token: KEY },
  })

export const addProduct = async (data) =>
  await axios.post(BASE_URL + '/platform/product', data, {
    headers: { token: KEY },
  })
