import { useEffect, useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'

import { addProduct, getProductsCategory } from '../services/api'

import ProductForm from '../components/ProductForm.jsx'

const ProductAdd = () => {
  const { setTitle } = useOutletContext()
  const [categories, setCategories] = useState([])
  const navigate = useNavigate()

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

  const handleSubmit = async (data) => {
    await addProduct(data)
      .then((res) => {
        console.log(res)
        navigate('/admin/products')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      <ProductForm categories={categories} onSubmit={handleSubmit} />
    </div>
  )
}

export default ProductAdd
