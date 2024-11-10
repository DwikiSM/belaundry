import { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'

import { getProductsCategory } from '../services/api'

import ProductForm from '../components/ProductForm.jsx'

const ProductAdd = () => {
  const { setTitle } = useOutletContext()
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getProductsCategory()
      .then((res) => {
        setCategories(res.data.response)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    setTitle('Products')
  }, [setTitle])

  return (
    <div>
      <ProductForm categories={categories} />
    </div>
  )
}

export default ProductAdd
