import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import {
  AiOutlineHome,
  AiOutlineFolderOpen,
  AiOutlineLineChart,
  AiOutlineSetting,
} from 'react-icons/ai'

import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'

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

const Sidebar = ({ title, isOpen, onClick }) => {
  const isActive = title

  const sidebar = (
    <div>
      {/* BeLaundry */}
      <div className='mb-8 flex items-center justify-center space-x-2'>
        <div className='h-10 w-10 shrink-0 grow-0 rounded-full bg-primary ring-4 ring-white' />
        <div className='h-10'>
          <div className='h-4 w-4 rounded-full border-2 border-white bg-danger' />
        </div>
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
              onClick={() => onClick(false)}
            >
              <span>{link.icon}</span>
              <span>{link.name}</span>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  )

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={onClick}
        className='relative z-10 block md:hidden'
      >
        <DialogBackdrop
          transition
          className='fixed inset-0 bg-gray-500 bg-opacity-75'
        />
        <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
          <div className='flex min-h-full justify-start'>
            <DialogPanel
              transition
              className='relative transform overflow-hidden shadow-xl'
            >
              <div className='h-screen w-60 bg-primary p-4 text-white'>
                {sidebar}
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
      <div className='hidden h-screen w-60 bg-primary p-4 text-white md:block'>
        {sidebar}
      </div>
    </div>
  )
}

Sidebar.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
}

export default Sidebar
