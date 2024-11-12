import { useState } from 'react'
import PropTypes from 'prop-types'

import * as Yup from 'yup'
import { FaRegImage } from 'react-icons/fa6'

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react'

import Button from './Button'

const ProductForm = ({ categories, onSubmit }) => {
  const [isModalOpen, setModalOpen] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    sku: '',
    stock: 0,
    category_id: 0,
    price: 0,
    image: '',
  })

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
      onSubmit(formData)
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
    <div className='flex w-full flex-col sm:flex-row'>
      <div className='flex min-w-96 flex-grow flex-col p-8'>
        <h1 className='mb-6 text-2xl font-bold'>Add New Product</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
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
              onChange={handleChange}
              className='block w-full resize-none rounded-lg border border-primary bg-white p-2.5 text-sm focus:border-danger'
            />
            {errors.description && (
              <div className='text-danger'>{errors.description}</div>
            )}
          </div>
          {/* SKU & Stock */}
          <div className='grid sm:grid-cols-3 sm:gap-6'>
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
              <label
                htmlFor='large-input'
                className='mb-2 block text-sm text-primary'
              >
                Stock
              </label>
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
          <div>
            <label>categories: </label>
            <div className='flex flex-wrap gap-1'>
              {categories &&
                categories.map(({ id, name }, index) => {
                  return (
                    <div key={id} className='flex-grow-0'>
                      <input
                        id={`bordered-radio-${id}`}
                        type='radio'
                        value={id}
                        name='category_id'
                        defaultChecked={!index}
                        required
                        className='peer hidden'
                        onChange={handleChange}
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
            <div className='mb-5 hidden w-full pt-6 sm:block'>
              <Button
                type='submit'
                className='float-right rounded-lg bg-success px-5 py-2.5 text-white hover:bg-green-400'
              >
                Publish
              </Button>
            </div>
          </div>
        </form>
      </div>
      {/* Picture link upload */}
      <div className='flex items-start justify-center bg-background2 p-8 sm:h-[calc(100vh-68px)] sm:w-96'>
        <button
          onClick={() => {
            setModalOpen(true)
          }}
          className='flex aspect-square w-72 flex-col items-center justify-center rounded-2xl border bg-white p-4 sm:w-full'
        >
          <FaRegImage className='aspect-square min-h-44 min-w-44 text-accent' />
          <p className='font-semibold text-primary'>Upload Picture Here</p>
          {errors.image && <div className='text-danger'>{errors.image}</div>}
        </button>
      </div>
      <Button
        type='submit'
        className='float-right my-4 w-11/12 self-center rounded-lg bg-success px-5 py-2.5 text-white hover:bg-green-400 sm:hidden'
      >
        Publish
      </Button>
      {/* Modal */}
      <Dialog
        open={isModalOpen}
        onClose={setModalOpen}
        className='relative z-10'
      >
        <DialogBackdrop
          transition
          className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in'
        />
        <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
          <div className='flex min-h-full items-start justify-center p-4 text-center'>
            <DialogPanel
              transition
              className='relative my-8 w-full max-w-lg transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95'
            >
              <div className='bg-white px-4 py-3'>
                <div className='text-left'>
                  <DialogTitle
                    as='h3'
                    className='text-base font-semibold text-gray-900'
                  >
                    Image Link
                  </DialogTitle>
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
              <div className='bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse'>
                <button
                  type='button'
                  onClick={() => {
                    setModalOpen(false)
                    setErrors({})
                  }}
                  className='inline-flex w-full justify-center rounded-md bg-success px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto'
                >
                  Upload
                </button>
                <button
                  type='button'
                  data-autofocus
                  onClick={() => setModalOpen(false)}
                  className='mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto'
                >
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  )
}

ProductForm.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
  onSubmit: PropTypes.func,
}

export default ProductForm
