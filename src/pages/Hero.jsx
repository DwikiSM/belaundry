import { useEffect, useState } from 'react'
import BalanceCard from '../components/BalanceCard'
import { getProducts, getUserInfo } from '../services/api'

const Hero = () => {
  const [username, setUsername] = useState()
  const [products, setProducts] = useState([])

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
    getUserInfo()
      .then(({ data }) => {
        setUsername(data.response.name.split(' ')[0])
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div className='flex h-screen min-w-96 flex-col space-y-8 bg-background sm:items-start'>
      <div className='ml-8 mt-10 w-80'>
        <h1 className='font-semibold text-primary'>
          {username ? 'Welcome, ' + username : 'Welcome'}
        </h1>
        <BalanceCard />
      </div>
      <div className='ml-8 flex w-80 flex-wrap align-top sm:w-full'>
        <div className='mb-8 sm:mr-8'>
          <h1 className='font-semibold text-primary'>Previous Order</h1>
          <div className='relative h-32 w-80 rounded-lg bg-white sm:block'>
            <div>image</div>
          </div>
        </div>
        <div className=''>
          <h1 className='font-semibold text-primary'>Your Most Ordered</h1>
          <div className='relative h-32 w-80 rounded-lg bg-white sm:block'>
            <div>image</div>
          </div>
        </div>
      </div>
      <div className='w-full pl-8'>
        <h1 className='font-semibold text-primary'>Our Latest Product</h1>
        <div className='flex overflow-x-auto sm:flex-wrap'>
          {products.map((data, i) => {
            return (
              <div
                key={i}
                className='relative mb-4 mr-4 h-32 w-40 flex-shrink-0 rounded-lg bg-white sm:block'
              >
                <div className='absolute bottom-3 right-3 text-end text-sm text-secondary'>
                  <div>{data.name}</div>
                  <div>{data.price}/pc</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Hero
