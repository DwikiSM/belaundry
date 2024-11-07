import { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'

import ReportCard from '../components/ReportCard'
import TopSalesCard from '../components/TopSalesCard'

const Home = () => {
  const { setTitle } = useOutletContext()

  useEffect(() => {
    setTitle('Home')
  }, [setTitle])

  return (
    <div className='p-4'>
      <ReportCard />
      <TopSalesCard />
    </div>
  )
}

export default Home
