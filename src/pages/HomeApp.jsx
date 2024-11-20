import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { getProducts, getProductsCategory, getUserInfo } from '../services/api'

import BalanceCard from '../components/BalanceCard'
import InvoiceCard from '../components/InvoiceCard'

const HomeApp = () => {
  const [username, setUsername] = useState()
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getUserInfo()
      .then(({ data }) => {
        setUsername(data.response.name.split(' ')[0])
      })
      .catch((err) => {
        console.log(err)
      })
    getProductsCategory()
      .then((res) => {
        setCategories(res.data.response)
      })
      .catch((err) => {
        console.log(err)
      })
    getProducts()
      .then((res) => {
        setProducts(res.data.response)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div className='flex h-screen min-w-96 flex-col gap-6 overflow-x-hidden bg-background sm:items-start'>
      <div className='relative flex w-96 flex-col gap-6 self-center sm:w-full sm:self-auto'>
        <div className='absolute -top-[13rem] h-[25rem] w-[30rem] self-center rounded-full bg-danger sm:-left-[12rem] sm:-top-[19rem] sm:h-[30rem]' />
        <div className='z-10 flex flex-col gap-6'>
          <div className='space-y-1 pl-8 pt-10'>
            <h1 className='text-lg text-white'>
              {username ? (
                <div
                  className='cursor-pointer'
                  onClick={() => navigate('/admin')}
                >
                  Welcome, {username}
                </div>
              ) : (
                'Welcome'
              )}
            </h1>
            <BalanceCard />
          </div>
          <div className='flex flex-wrap gap-6 pl-8 align-top sm:w-full'>
            <div className='space-y-1'>
              <h1 className='font-semibold text-primary'>Previous Order</h1>
              <InvoiceCard />
            </div>
            <div className='space-y-1'>
              <h1 className='font-semibold text-primary'>Your Most Ordered</h1>
              <div className='group relative h-44 w-80 overflow-hidden rounded-lg bg-white sm:block'>
                <div className='absolute left-0 top-0 h-full w-full bg-gradient-to-t from-primary from-0% to-transparent to-75% group-hover:from-secondary' />
                <img
                  src='https://images-ext-2.discordapp.net/external/M9X7BnHKlukTpGBgUyyUfW_sjV8JANqR79-WWJil0R8/https/www.figma.com/file/qPjgycMUWSU9R6TzcqjYiS/image/acbb409ecb20dea313d81fd95b69987161f3bcc6'
                  alt='clothes rack'
                  className='h-full object-cover'
                />
                <div className='absolute bottom-3 left-3 text-sm text-white'>
                  <div className='text-lg font-semibold'>Dry Cleaning</div>
                  <div className='text-sm'>12x | total of $ 4.000</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex w-full flex-col space-y-1'>
        <h1 className='w-96 self-center pl-8 font-semibold text-primary sm:self-auto'>
          Our Latest Product
        </h1>
        <div className='flex gap-6 overflow-x-scroll pb-2 pl-2 sm:flex-wrap sm:pl-8'>
          {products.map((data, i) => {
            return (
              <div
                key={i}
                onClick={() => navigate(`products/${data.id}`)}
                className='group relative h-52 w-40 flex-shrink-0 cursor-pointer overflow-hidden rounded-xl bg-white'
              >
                <div className='absolute left-0 top-0 h-full w-full bg-gradient-to-t from-primary from-0% to-transparent to-75% group-hover:from-secondary' />
                <img
                  src={data.image}
                  alt='no image'
                  className='h-full object-cover'
                />
                <div className='absolute bottom-3 left-3 text-sm text-white'>
                  <div className='text-[10px]'>
                    {
                      (
                        categories.find((x) => x.id == data.category_id) || {
                          name: '',
                        }
                      ).name
                    }
                  </div>
                  <div className='font-semibold'>{data.name}</div>
                  <div className='text-sm'>{data.price}/pc</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default HomeApp
