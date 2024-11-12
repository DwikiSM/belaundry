import { useEffect, useState } from 'react'
import { useParams, useOutletContext, useNavigate } from 'react-router-dom'
import { FaChevronLeft } from 'react-icons/fa6'

import { deleteProduct, getProduct } from '../services/api'

import Button from '../components/Button'
import Modal from '../components/Modal'

const ProductDetail = () => {
  const { setTitle } = useOutletContext()
  const { id } = useParams()
  const navigate = useNavigate()

  const [isModalOpen, setModalOpen] = useState(false)
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
        <div className='m-4 flex min-w-96 flex-col gap-2 rounded-2xl bg-white p-6'>
          <div
            className='mb-4 cursor-pointer text-primary'
            onClick={() => navigate(-1)}
          >
            <FaChevronLeft className='size-6' />
          </div>
          <div className='flex flex-col-reverse flex-wrap justify-between sm:flex-row'>
            <div className='flex-1'>
              <div className='flex'>
                <div className='w-1/3'>Id</div>
                <div className='w-2/3'>{product.id}</div>
              </div>
              <div className='flex'>
                <div className='w-1/3'>Name</div>
                <div className='w-2/3'>{product.name}</div>
              </div>
              <div className='flex'>
                <div className='w-1/3'>Description</div>
                <div className='w-2/3'>{product.description}</div>
              </div>
              <div className='flex'>
                <div className='w-1/3'>SKU</div>
                <div className='w-2/3'>{product.sku}</div>
              </div>
              <div className='flex'>
                <div className='w-1/3'>Stock</div>
                <div className='w-2/3'>{product.stock}</div>
              </div>
              <div className='flex'>
                <div className='w-1/3'>Category ID</div>
                <div className='w-2/3'>{product.category_id}</div>
              </div>
              <div className='flex'>
                <div className='w-1/3'>Price</div>
                <div className='w-2/3'>{product.price}</div>
              </div>
            </div>
            <div className='flex flex-1 justify-center bg-primary'>
              <div className=''>
                <img alt='no image' src={product.image} />
              </div>
            </div>
          </div>
          <div className=''>
            <Button
              onClick={() => setModalOpen(true)}
              className='float-right self-center rounded-lg bg-danger px-5 py-2.5 text-white hover:bg-opacity-90'
            >
              Delete
            </Button>
          </div>
        </div>
        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
          <div className='bg-white p-6'>
            <div className='text-left'>
              <h3 className='text-base font-semibold text-gray-900'>Delete</h3>
              <div className='mt-2'>
                Are you sure you want to delete this product? This action cannot
                be undone.
              </div>
            </div>
          </div>
          <div className='bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse'>
            <button
              type='button'
              onClick={async () => {
                setModalOpen(false)
                await deleteProduct(id)
                  .then((res) => {
                    console.log(res)
                    navigate(-1)
                  })
                  .catch((err) => {
                    console.log(err)
                  })
              }}
              className='inline-flex w-full justify-center rounded-md bg-danger px-3 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90 sm:ml-3 sm:w-auto'
            >
              Delete
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
        </Modal>
      </div>
    )
  )
}

export default ProductDetail
