import { useState } from 'react'
import PropTypes from 'prop-types'

import * as Yup from 'yup'

import Button from './Button'
import Modal from './Modal'

const ProductForm = ({ product, onSubmit }) => {
  const [isModalOpen, setModalOpen] = useState(false)

  const [formData, setFormData] = useState(product)

  const [errors, setErrors] = useState({})

  const validationSchema = Yup.object({
    name: Yup.string().required(),
    description: Yup.string().required(),
    sku: Yup.string().required(),
    stock: Yup.string().required(),
    category_id: Yup.number().required(),
    price: Yup.number().required(),
    image: Yup.string().required(),
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await validationSchema.validate(formData, { abortEarly: false })
      setErrors({})
      onSubmit({
        name: formData.name,
        description: formData.description,
        sku: formData.sku,
        stock: formData.stock,
        category_id: formData.category_id,
        price: formData.price,
        image: formData.image,
      })
    } catch (error) {
      const newErrors = {}
      error.inner.forEach((err) => {
        newErrors[err.path] = err.message
      })
      setErrors(newErrors)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  return (
    <div className='flex w-full flex-col'>
      <div className='flex min-w-96 flex-grow flex-col p-8'>
        <h1 className='mb-6 text-2xl font-bold'>Add New Product</h1>
        <form id='form' onSubmit={handleSubmit} className='flex flex-col gap-3'>
          {/* Product Name */}
          <div>
            <label htmlFor='name' className='mb-2 block text-sm text-primary'>
              Product Name
            </label>
            <input
              required
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              className='block w-full rounded-lg border border-primary bg-white p-2.5 text-sm focus:border-danger'
            />
            {errors.name && (
              <div className='text-danger'>{`${errors.name}`}</div>
            )}
          </div>
          {/* Description */}
          <div>
            <label
              htmlFor='description'
              className='mb-2 block text-sm text-primary'
            >
              Description
            </label>
            <textarea
              required
              type='text'
              id='description'
              name='description'
              rows={4}
              value={formData.description}
              onChange={handleChange}
              className='block w-full resize-none rounded-lg border border-primary bg-white p-2.5 text-sm focus:border-danger'
            />
            {errors.description && (
              <div className='text-danger'>{errors.description}</div>
            )}
          </div>
          {/* SKU & Stock */}
          <div className='grid'>
            <div className='mb-5 w-full'>
              <label htmlFor='sku' className='mb-2 block text-sm text-primary'>
                SKU
              </label>
              <input
                required
                type='text'
                id='sku'
                name='sku'
                value={formData.sku}
                onChange={handleChange}
                className='block w-full rounded-lg border border-primary bg-white p-2.5 text-sm'
              />
              {errors.sku && <div className='text-danger'>{errors.sku}</div>}
            </div>
            <div className='mb-5 w-full'>
              <label className='mb-2 block text-sm text-primary'>Stock</label>
              <input
                required
                type='number'
                id='stock'
                name='stock'
                value={formData.stock}
                onChange={handleChange}
                className='block w-full rounded-lg border border-primary bg-white p-2.5 text-sm'
              />
              {errors.stock && (
                <div className='text-danger'>{errors.stock}</div>
              )}
            </div>
          </div>
          {/* Categories */}
          <div className='grid'>
            <div className='mb-5 w-full'>
              <label className='mb-2 block text-sm text-primary'>
                Category Id
              </label>
              <input
                required
                type='number'
                id='base-input'
                name='category_id'
                value={formData.category_id}
                onChange={handleChange}
                className='block w-full rounded-lg border border-primary bg-white p-2.5 text-sm'
              />
              {errors.category_id && (
                <div className='text-danger'>{errors.category_id}</div>
              )}
            </div>
            <div />
          </div>
          {/* Price */}
          <div className='grid'>
            <div className='mb-5 w-full'>
              <label className='mb-2 block text-sm text-primary'>Price</label>
              <input
                required
                type='number'
                id='base-input'
                name='price'
                value={formData.price}
                onChange={handleChange}
                className='block w-full rounded-lg border border-primary bg-white p-2.5 text-sm'
              />
              {errors.price && (
                <div className='text-danger'>{errors.price}</div>
              )}
            </div>
            <div />
          </div>
        </form>
      </div>
      <div className='flex items-start justify-center bg-background2 p-8'>
        <button
          onClick={() => {
            setModalOpen(true)
          }}
          className='flex aspect-square w-72 flex-col items-center justify-center rounded-2xl border bg-white p-4'
        >
          <img src={formData.image} alt='no image' />
          {errors.image && <div className='text-danger'>{errors.image}</div>}
        </button>
      </div>
      <Button
        type='submit'
        form='form'
        className='float-right my-4 w-11/12 self-center rounded-lg bg-success px-5 py-2.5 text-white hover:bg-green-400'
      >
        Update
      </Button>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <div className='bg-white px-4 py-3'>
          <div className='text-left'>
            <h3 className='text-base font-semibold text-gray-900'>
              Image Link
            </h3>
            <div className='mt-2'>
              <div>
                <input
                  type='url'
                  id='image'
                  name='image'
                  value={formData.image}
                  onChange={handleChange}
                  className='block w-full rounded-lg border border-primary bg-white p-2.5 text-sm focus:border-danger'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='bg-gray-50 px-4 py-3'>
          <button
            type='button'
            data-autofocus
            onClick={() => setModalOpen(false)}
            className='inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  )
}

ProductForm.propTypes = {
  product: PropTypes.object,
  onSubmit: PropTypes.func,
}

export default ProductForm
