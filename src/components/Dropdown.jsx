import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { FaChevronDown } from 'react-icons/fa6'

export default function Dropdown() {
  return (
    <Menu as='div' className='relative inline-block text-left'>
      <div>
        <MenuButton className='inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'>
          This Week
          <FaChevronDown
            aria-hidden='true'
            className='mt-0.5 h-4 w-4 text-gray-400'
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className='absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in'
      >
        <div className='py-1'>
          <MenuItem>
            <a
              href='#'
              className='block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none'
            >
              This Week
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href='#'
              className='block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none'
            >
              This Month
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  )
}
