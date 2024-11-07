import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import {
  AiOutlineHome,
  AiOutlineFolderOpen,
  AiOutlineLineChart,
  AiOutlineSetting,
} from 'react-icons/ai'

const SIDEBAR_LINKS = [
  {
    id: 1,
    path: '',
    name: 'Home',
    icon: <AiOutlineHome className='h-6 w-6' />,
  },
  {
    id: 2,
    path: 'products',
    name: 'Products',
    icon: <AiOutlineFolderOpen className='h-6 w-6' />,
  },
  {
    id: 3,
    path: 'sales',
    name: 'Sales',
    icon: <AiOutlineLineChart className='h-6 w-6' />,
  },
  {
    id: 4,
    path: 'settings',
    name: 'Settings',
    icon: <AiOutlineSetting className='h-6 w-6' />,
  },
]

const Sidebar = ({ title }) => {
  const isActive = title

  return (
    <div className='hidden h-screen w-64 bg-primary p-4 text-white md:block'>
      {/* BeLaundry */}
      <div className='flex justify-center space-x-2'>
        <div className='h-10 w-10 shrink-0 grow-0 rounded-full bg-primary ring-4 ring-white'></div>
        <div className='float-right h-4 w-4 rounded-full border-2 border-white bg-danger'></div>
        <h1 className='text-xl font-bold'>BeLaundry</h1>
      </div>
      {/* Menu */}
      <div className='px-2 py-6'>
        <h2>Menu</h2>
        <ul className='space-y-4'>
          {SIDEBAR_LINKS.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className={
                isActive == link.name
                  ? 'flex items-center justify-start space-x-5 rounded-md bg-white p-3 font-medium text-primary'
                  : 'flex items-center justify-start space-x-5 rounded-md p-3 font-medium hover:bg-white hover:text-primary'
              }
            >
              <span>{link.icon}</span>
              <span>{link.name}</span>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  )
}

Sidebar.propTypes = {
  title: PropTypes.string,
}

export default Sidebar
