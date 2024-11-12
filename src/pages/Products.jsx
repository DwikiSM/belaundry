import { useEffect, useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { getProducts } from '../services/api'
import Button from '../components/Button'

const Products = () => {
  const { setTitle } = useOutletContext()
  const [products, setProducts] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getProducts()
      .then((res) => {
        setProducts(res.data.response)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    setTitle('Products')
  }, [setTitle])

  return (
    <div className='m-4 flex min-w-96 flex-col rounded-2xl bg-white p-8'>
      <div>
        <Button
          onClick={() => navigate('add')}
          className={
            'float-right rounded-lg bg-success px-5 py-2.5 text-white hover:bg-green-400'
          }
        >
          Add new Product
        </Button>
      </div>

      <div className='relative overflow-x-auto'>
        <table className='w-full text-left text-sm'>
          <thead className='border-b-2'>
            <tr>
              <th className='px-6 py-3'>Id</th>
              <th className='px-6 py-3'>Name</th>
              <th className='px-6 py-3'>Description</th>
              <th className='px-6 py-3'>SKU</th>
              <th className='px-6 py-3'>Stock</th>
              <th className='px-6 py-3'>Category</th>
              <th className='px-6 py-3'>Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((data, index) => (
              <tr
                key={index}
                className='hover:cursor-pointer hover:bg-[#F2F7FB]'
                onClick={() => navigate(`${data.id}`)}
              >
                <td className='px-6 py-4'>{data.id}</td>
                <td className='px-6 py-4'>{data.name}</td>
                <td className='px-6 py-4'>{data.description}</td>
                <td className='px-6 py-4'>{data.sku}</td>
                <td className='px-6 py-4'>{data.stock}</td>
                <td className='px-6 py-4'>{data.category_id}</td>
                <td className='px-6 py-4'>{data.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Products
