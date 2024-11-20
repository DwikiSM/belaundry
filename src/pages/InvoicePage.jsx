import { useNavigate } from 'react-router-dom'
import { FaChevronLeft, FaWhatsapp } from 'react-icons/fa6'

const InvoicePage = () => {
  const navigate = useNavigate()

  return (
    <div className='flex h-screen justify-center bg-background2'>
      <div className='relative flex h-screen w-96 flex-col bg-background'>
        <div className='relative'>
          <div
            className='ml-4 mt-6 cursor-pointer text-primary'
            onClick={() => navigate(-1)}
          >
            <FaChevronLeft className='size-8' />
          </div>
          <div className='mt-6 flex flex-col gap-6 p-6'>
            <div className='overflow-hidden rounded-lg'>
              <div className='bg-secondary p-4 text-center text-2xl font-bold text-white'>
                ORDER SUMMARY
              </div>
              <div className='flex flex-col bg-white pt-4'>
                <div className='mx-4 text-end text-secondary'>ORDER $21340</div>
                <div className='mx-4 my-4'>
                  <div className='font-bold'>John Doe</div>
                  <div className='text-sm'>123 Pasir Ris,</div>
                  <div className='text-sm'>13810, Singapore</div>
                </div>
                <div className='mt-2'>
                  <div className='mx-4 flex h-full flex-row items-center justify-between'>
                    <img
                      className='aspect-auto w-14 py-2'
                      src='https://s3-alpha-sig.figma.com/img/ca98/972f/33e4ac78ee008ad03579bbd69cc9ffe3?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XRyiiHe4GyqlJPWmJFDWhv~5bDJrIkgmlNcBpATaFB2Guh~6I0c9QJJBi-s39QDx2ql3l3pPGAl2Iasx93xGUoy9XJDYZyr88lOUAmQnaaXEmsVoff1CM-2WrQPP6BHPNxK~Xtwd6EpArbCTfKD0KZpyJICdOyiGk6kkPv0Ke31NYOWOqlKzi8uD78wY3fJ9Z5reESPKIWVOWD1ySzHQaMyDWPsaL2C~98w9Q84SPSnfTuelTq7VIufSV3uqULGKYju~AC0KrvJSJC4IY2Y5BfWZepPAtOLNb8JNUMiqdNzMNk14YNQ2igOWXbmLCOh8-SwK-6fvFAv3JYmcCx7ioA__'
                      alt='Laundry'
                    />
                    <div className='mx-2 flex flex-1 flex-col'>
                      <div className='font-medium'>Bag of Laundry</div>
                      <div className='text-sm text-primary'>Qty: 2</div>
                    </div>
                    <div className='flex flex-col items-center'>
                      <div className='font-medium'>Total</div>
                      <div className='text-sm font-semibold text-secondary'>
                        $ 180.00
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className='mx-4 flex h-full flex-row items-center justify-between'>
                    <img
                      className='aspect-auto w-14 py-2'
                      src='https://s3-alpha-sig.figma.com/img/ca98/972f/33e4ac78ee008ad03579bbd69cc9ffe3?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XRyiiHe4GyqlJPWmJFDWhv~5bDJrIkgmlNcBpATaFB2Guh~6I0c9QJJBi-s39QDx2ql3l3pPGAl2Iasx93xGUoy9XJDYZyr88lOUAmQnaaXEmsVoff1CM-2WrQPP6BHPNxK~Xtwd6EpArbCTfKD0KZpyJICdOyiGk6kkPv0Ke31NYOWOqlKzi8uD78wY3fJ9Z5reESPKIWVOWD1ySzHQaMyDWPsaL2C~98w9Q84SPSnfTuelTq7VIufSV3uqULGKYju~AC0KrvJSJC4IY2Y5BfWZepPAtOLNb8JNUMiqdNzMNk14YNQ2igOWXbmLCOh8-SwK-6fvFAv3JYmcCx7ioA__'
                      alt='Laundry'
                    />
                    <div className='mx-2 flex flex-1 flex-col'>
                      <div className='font-medium'>Dry Cleaning</div>
                      <div className='text-sm text-primary'>Qty: 3</div>
                    </div>
                    <div className='flex flex-col items-center'>
                      <div className='font-medium'>Total</div>
                      <div className='text-sm font-semibold text-secondary'>
                        $ 10.00
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className='mx-4 flex h-full flex-row items-center justify-between'>
                    <img
                      className='aspect-auto w-14 py-2'
                      src='https://s3-alpha-sig.figma.com/img/ca98/972f/33e4ac78ee008ad03579bbd69cc9ffe3?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XRyiiHe4GyqlJPWmJFDWhv~5bDJrIkgmlNcBpATaFB2Guh~6I0c9QJJBi-s39QDx2ql3l3pPGAl2Iasx93xGUoy9XJDYZyr88lOUAmQnaaXEmsVoff1CM-2WrQPP6BHPNxK~Xtwd6EpArbCTfKD0KZpyJICdOyiGk6kkPv0Ke31NYOWOqlKzi8uD78wY3fJ9Z5reESPKIWVOWD1ySzHQaMyDWPsaL2C~98w9Q84SPSnfTuelTq7VIufSV3uqULGKYju~AC0KrvJSJC4IY2Y5BfWZepPAtOLNb8JNUMiqdNzMNk14YNQ2igOWXbmLCOh8-SwK-6fvFAv3JYmcCx7ioA__'
                      alt='Laundry'
                    />
                    <div className='mx-2 flex flex-1 flex-col'>
                      <div className='font-medium'>Rug</div>
                      <div className='text-sm text-primary'>Qty: 1</div>
                    </div>
                    <div className='flex flex-col items-center'>
                      <div className='font-medium'>Total</div>
                      <div className='text-sm font-semibold text-secondary'>
                        $ 14.00
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex justify-between bg-secondary p-3 text-center text-lg font-medium text-white'>
                <div>TOTAL ORDER</div>
                <div>$ 204.00</div>
              </div>
            </div>
            <div className='flex flex-row items-center justify-center gap-2 rounded-xl bg-[#56E4A0] p-4 text-white'>
              <FaWhatsapp className='text-2xl' />
              <div>WHATSAPP US</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InvoicePage
