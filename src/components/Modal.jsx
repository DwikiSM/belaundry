import PropTypes from 'prop-types'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'

function Modal({ children, isOpen = false, onClose }) {
  return (
    <Dialog open={isOpen} onClose={onClose} className='relative z-10'>
      <DialogBackdrop
        transition
        className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in'
      />
      <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
        <div className='flex min-h-full items-start justify-center p-4 text-center'>
          <DialogPanel
            transition
            className='relative my-8 w-full max-w-lg transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95'
          >
            {children}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}

Modal.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
}

export default Modal
