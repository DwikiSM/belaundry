import Dropdown from './Dropdown'

const TopSalesCard = () => {
  const mockSales = [
    { created_at: '21 Jul 2023', item: 'Jeans', total: 200 },
    { created_at: '20 Jul 2023', item: 'T-Shirt', total: 160 },
    { created_at: '22 Jul 2023', item: 'Pants', total: 120 },
  ]

  return (
    <div className='my-4 w-1/3 min-w-96 rounded-2xl bg-white p-8'>
      <div className='mb-8 flex items-center justify-between'>
        <h1 className='font-bold'>Top Selling Products</h1>
        {/* add dropdown function */}
        <Dropdown />
      </div>

      <div className='relative overflow-x-auto'>
        <table className='w-full text-left text-sm'>
          <thead className='border-b-2'>
            <tr>
              <th className='px-6 py-3'>Name</th>
              <th className='px-6 py-3'>Value</th>
            </tr>
          </thead>
          <tbody>
            {mockSales.map((data, index) => (
              <tr key={index} className='hover:bg-[#F2F7FB]'>
                <td className='px-6 py-4'>{data.item}</td>
                <td className='px-6 py-4'>${data.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TopSalesCard
