import { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'

import { getProductsReport } from '../services/api'

const Sales = () => {
  const { setTitle } = useOutletContext()
  const [report, setReport] = useState([])

  useEffect(() => {
    setTitle('Sales')
  }, [setTitle])

  useEffect(() => {
    getProductsReport()
      .then((res) => {
        setReport(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div className='m-5 min-h-96 min-w-96 rounded-2xl bg-white p-8'>
      <div className='relative overflow-x-auto'>
        <table className='w-full text-left text-sm'>
          <thead className='border-b-2'>
            <tr>
              <th className='px-6 py-3'>Date</th>
              <th className='px-6 py-3'>Total Sold</th>
              <th className='px-6 py-3'>Income</th>
            </tr>
          </thead>
          <tbody>
            {report.map((data, index) => (
              <tr key={index} className='hover:bg-[#F2F7FB]'>
                <td className='px-6 py-4'>{data.created_at}</td>
                <td className='px-6 py-4'>{data.total}</td>
                <td className='px-6 py-4'>${data.income}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Sales
