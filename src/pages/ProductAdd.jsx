import { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { FaRegImage } from 'react-icons/fa6'

import Button from '../components/Button'
import { getProductsCategory } from '../services/api'

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
    <div className='flex w-full flex-col sm:flex-row'>
      <div className='flex min-w-96 flex-grow flex-col p-8'>
        <h1 className='mb-6 text-2xl font-bold'>Add New Product</h1>
        <div className='bg-background pb-4'>
          {/* Product Name */}
          <div className='mb-5'>
            <label
              htmlFor='base-input'
              className='mb-2 block text-sm text-primary'
            >
              Product Name
            </label>
            <input
              type='text'
              id='base-input'
              className='block w-full rounded-lg border border-primary bg-white p-2.5 text-sm'
            />
          </div>
          {/* Description */}
          <div className='mb-5'>
            <label
              htmlFor='large-input'
              className='mb-2 block text-sm text-primary'
            >
              Description
            </label>
            <input
              type='text'
              id='large-input'
              className='block w-full rounded-lg border border-primary bg-white p-2.5 text-sm'
            />
          </div>
          {/* SKU & Stock */}
          <div className='grid sm:grid-cols-3 sm:gap-6'>
            <div className='mb-5 w-full'>
              <label
                htmlFor='large-input'
                className='mb-2 block text-sm text-primary'
              >
                SKU
              </label>
              <input
                type='text'
                id='base-input'
                className='block w-full rounded-lg border border-primary bg-white p-2.5 text-sm'
              />
            </div>
            <div className='mb-5 w-full'>
              <label
                htmlFor='large-input'
                className='mb-2 block text-sm text-primary'
              >
                Stock
              </label>
              <input
                type='text'
                id='base-input'
                className='block w-full rounded-lg border border-primary bg-white p-2.5 text-sm'
              />
            </div>
          </div>
          {/* Category */}
          <div className='mb-6'>
            <label
              htmlFor='large-input'
              className='mb-2 block text-sm text-primary'
            >
              Category
            </label>
            <div className='flex flex-wrap gap-4'>
              {categories &&
                categories.map(({ id, name }) => {
                  return (
                    <div key={id}>
                      <input
                        id={`bordered-radio-${id}`}
                        type='radio'
                        value={name}
                        name='category'
                        required
                        className='peer hidden'
                      />
                      <label
                        className='inline-flex w-full cursor-pointer rounded-lg bg-accent p-2 text-sm text-[#3B97CB] hover:bg-[#3E7DAB] hover:text-white peer-checked:bg-[#3E7DAB] peer-checked:text-white'
                        htmlFor={`bordered-radio-${id}`}
                      >
                        {name}
                      </label>
                    </div>
                  )
                })}
            </div>
          </div>
          {/* Price */}
          <div className='grid sm:grid-cols-3 sm:gap-6'>
            <div className='mb-5 w-full'>
              <label
                htmlFor='large-input'
                className='mb-2 block text-sm text-primary'
              >
                Price
              </label>
              <input
                type='text'
                id='base-input'
                className='block w-full rounded-lg border border-primary bg-white p-2.5 text-sm'
              />
            </div>
            <div />
            <div className='mb-5 hidden w-full pt-6 sm:block'>
              <Button className='min-w-12 self-end'>Publish</Button>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-background2 flex items-start justify-center p-8 sm:h-[calc(100vh-68px)] sm:w-96'>
        <div className='flex aspect-square w-72 flex-col items-center justify-center rounded-2xl bg-white sm:w-full'>
          <FaRegImage className='aspect-square min-h-44 min-w-44 text-accent' />
          <p className='font-semibold text-primary'>Upload Picture Here</p>
        </div>
      </div>
      <Button className='mb-44 mt-4 block w-11/12 self-center sm:hidden'>
        Publish
      </Button>
    </div>
  )
}

export default ProductAdd
