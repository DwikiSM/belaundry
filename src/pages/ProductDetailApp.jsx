import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { FaChevronLeft } from 'react-icons/fa6'

import { getProduct, getProductsCategory } from '../services/api'

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [counter, setCounter] = useState(0)
  const [product, setProduct] = useState()
  const [category, setCategory] = useState('Others')

  useEffect(() => {
    getProduct(id)
      .then((res) => {
        setProduct(res.data.response)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [id])

  useEffect(() => {
    if (product === undefined) return
    const fetchCategory = async () => {
      const res = await getProductsCategory()
      const categories = res.data.response
      let found = categories.find(({ id }) => id == product.category_id)
      if (found != undefined) setCategory(found.name)
    }
    fetchCategory()
  }, [product])

  if (product === undefined) return <>Loading...</>

  return (
    <div className='flex h-screen justify-center bg-background2'>
      <div className='relative flex h-[80vh] w-96 flex-col rounded-2xl bg-background'>
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
            alt='product image'
            className='min-h-96 w-full rounded-2xl object-cover'
          />
        </div>
        <div className='flex flex-col gap-2 p-4'>
          <div className='flex'>
            <div className='flex-grow-0'>
              <div className='inline-flex w-full cursor-pointer rounded-lg bg-accent p-2 text-sm text-[#3B97CB] hover:bg-[#3E7DAB] hover:text-white peer-checked:bg-[#3E7DAB] peer-checked:text-white'>
                {category}
              </div>
            </div>
          </div>
          <div className='text-3xl font-bold text-primary'>{product.name}</div>
          <div className='text-lg text-secondary'>${product.price}/pc</div>
          <div className='text-lg'>{product.description}</div>
        </div>
        <div className='absolute bottom-6 w-full'>
          <div className='flex items-center justify-center gap-3'>
            <button
              className='h-9 w-9 rounded-full bg-primary text-3xl text-white hover:ring-2 disabled:bg-gray-300'
              disabled={counter <= 0}
              onClick={() => setCounter(counter - 1)}
            >
              -
            </button>
            <div className='flex h-12 w-24 items-center justify-center rounded-lg border border-primary bg-white text-[37px] text-gray-400'>
              {counter}
            </div>
            <button
              className='h-9 w-9 rounded-full bg-primary text-3xl text-white hover:ring-2 disabled:bg-gray-300'
              disabled={counter > 2}
              onClick={() => setCounter(counter + 1)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
