import { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'

import ReportCard from '../components/ReportCard'

const Home = () => {
  const { setTitle } = useOutletContext()

  useEffect(() => {
    setTitle('Home')
  }, [setTitle])

  return (
    <div className='p-4'>
      <ReportCard />
      {/* <SalesStatisticTable filterSales={filterSales}/>
      <TopSales filterSales={filterSales}/> */}
    </div>
  )
}

export default Home
