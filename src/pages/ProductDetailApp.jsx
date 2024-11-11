import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { FaChevronLeft } from 'react-icons/fa6'

import { getProduct } from '../services/api'

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [product, setProduct] = useState({})

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
    <div className='flex justify-center'>
      <div className='flex min-w-96 max-w-[36rem] flex-col rounded-2xl bg-white'>
        <div className='relative'>
          <div className='absolute left-0 top-0 h-full w-full rounded-2xl bg-gradient-to-t from-primary from-0% to-transparent to-75% group-hover:from-secondary' />
          <div
            className='absolute left-4 top-6 cursor-pointer text-primary'
            onClick={() => navigate(-1)}
          >
            <FaChevronLeft className='size-8' />
          </div>
          <img
            src={product.image}
            alt='clothes rack'
            className='max-h-96 w-full object-contain'
          />
        </div>
        {product ? (
          <div className='relative p-4'>
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
        ) : (
          'No Data'
        )}
      </div>
    </div>
  )
}

export default ProductDetail
