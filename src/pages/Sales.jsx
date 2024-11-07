import { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'

import { getProductsReport } from '../services/api'

import { Line } from 'react-chartjs-2'
import {
  Chart,
  Filler,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

Chart.register(Filler, PointElement, LineElement, Title, Tooltip, Legend)

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

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        display: false,
      },
    },
  }

  const data = {
    labels: report.map((data) => data.created_at),
    datasets: [
      {
        data: report.map((data) => data.total),
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
    ],
  }

  return (
    <div className='m-4 h-96 min-w-96 rounded-2xl bg-white p-4'>
      <Line options={options} data={data} />
    </div>
  )
}

export default Sales
