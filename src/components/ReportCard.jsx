import { useEffect, useState } from 'react'

import { getProductsReport } from '../services/api'

import Dropdown from './Dropdown'

import { Bar } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import {
  Chart,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from 'chart.js'

Chart.register(BarElement, CategoryScale, ChartDataLabels, LinearScale, Tooltip)

const ReportCard = () => {
  const [report, setReport] = useState([])

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
    layout: {
      padding: {
        top: 20,
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: ({ raw }) => raw.total + ' sold for ' + raw.income + '$',
        },
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
        formatter: (value) => value.total + ' items',
      },
    },
  }

  const data = {
    datasets: [
      {
        label: 'Sales',
        backgroundColor: '#B2C5D4',
        hoverBackgroundColor: '#3E7DAB',
        borderRadius: 5,
        data: report.map((data) => {
          return {
            date: data.created_at,
            income: data.income,
            total: data.total,
          }
        }),
        parsing: {
          xAxisKey: 'date',
          yAxisKey: 'total',
        },
      },
    ],
  }

  return (
    <div className='h-96 min-w-96 rounded-2xl bg-white p-8'>
      <div className='mb-8 flex items-center justify-between'>
        <h1 className='font-bold'>Products Sold</h1>
        {/* add dropdown function */}
        <Dropdown />
      </div>
      <div className='h-5/6'>
        <Bar options={options} data={data} plugins={[ChartDataLabels]} />
      </div>
    </div>
  )
}

export default ReportCard
