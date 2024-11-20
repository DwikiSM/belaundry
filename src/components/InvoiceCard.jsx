import PropTypes from 'prop-types'

import { FaRegStickyNote } from 'react-icons/fa'

const InvoiceCard = () => {
  return (
    <div className='h-32 w-80 rounded-lg bg-white sm:block'>
      <div className='flex h-full flex-row items-center justify-between'>
        <img
          className='h-full py-6 aspect-auto'
          src='https://s3-alpha-sig.figma.com/img/ca98/972f/33e4ac78ee008ad03579bbd69cc9ffe3?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XRyiiHe4GyqlJPWmJFDWhv~5bDJrIkgmlNcBpATaFB2Guh~6I0c9QJJBi-s39QDx2ql3l3pPGAl2Iasx93xGUoy9XJDYZyr88lOUAmQnaaXEmsVoff1CM-2WrQPP6BHPNxK~Xtwd6EpArbCTfKD0KZpyJICdOyiGk6kkPv0Ke31NYOWOqlKzi8uD78wY3fJ9Z5reESPKIWVOWD1ySzHQaMyDWPsaL2C~98w9Q84SPSnfTuelTq7VIufSV3uqULGKYju~AC0KrvJSJC4IY2Y5BfWZepPAtOLNb8JNUMiqdNzMNk14YNQ2igOWXbmLCOh8-SwK-6fvFAv3JYmcCx7ioA__'
          alt='Laundry'
        />
        <div className='flex flex-1 flex-col mx-2'>
          <div className='font-semibold mb-4'>Bag of Laundry</div>
          <div className='text-xs'>Total Order</div>
          <div className='font-bold text-primary'>$180.00</div>
        </div>
        <a
          href={'/invoice'}
          className='bg-gradient-to-135 flex max-w-24 h-full flex-1 flex-col items-center text-white'
        >
          <FaRegStickyNote className='h-full text-5xl' />
          <div className='mb-4 font-bold'>Invoice</div>
        </a>
      </div>
    </div>
  )
}

// position: absolute;
// content: '';
// background: linear-gradient(137deg, #099DEF 0%, rgba(9, 157, 239, 0.42) 100%);
// height: 100%;
// width: 100%;
// top: 0;
// left: 0;
// z-index: -1;

InvoiceCard.propTypes = {
  className: PropTypes.string,
}

export default InvoiceCard
