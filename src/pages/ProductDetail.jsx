import { useEffect, useState } from 'react'
import { useParams, useOutletContext, useNavigate } from 'react-router-dom'
import { FaChevronLeft } from 'react-icons/fa6'

import { getProduct } from '../services/api'

const ProductDetail = () => {
  const { setTitle } = useOutletContext()
  const { id } = useParams()
  const navigate = useNavigate()

  const [product, setProduct] = useState({})

  useEffect(() => {
    setTitle('Products')
  }, [setTitle])

  useEffect(() => {
    getProduct(id)
      .then((res) => {
        setProduct(res.data.response)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [id])

  return (
    Object.keys(product).length > 0 && (
      <div>
        <div className='m-4 flex min-w-96 flex-col rounded-2xl bg-white p-6'>
          <div
            className='mb-4 cursor-pointer text-primary'
            onClick={() => navigate(-1)}
          >
            <FaChevronLeft className='size-6' />
          </div>
          <div className='flex'>
            <div className='w-28'>Id</div>
            <div>: {product.id}</div>
          </div>
          <div className='flex'>
            <div className='w-28'>Name</div>
            <div>: {product.name}</div>
          </div>
          <div className='flex'>
            <div className='w-28'>Description</div>
            <div>: {product.description}</div>
          </div>
          <div className='flex'>
            <div className='w-28'>SKU</div>
            <div>: {product.sku}</div>
          </div>
          <div className='flex'>
            <div className='w-28'>Stock</div>
            <div>: {product.stock}</div>
          </div>
          <div className='flex'>
            <div className='w-28'>Category</div>
            <div>: {product.category_id}</div>
          </div>
          <div className='flex'>
            <div className='w-28'>Price</div>
            <div>: {product.price}</div>
          </div>
        </div>
      </div>
    )
  )
}

export default ProductDetail
