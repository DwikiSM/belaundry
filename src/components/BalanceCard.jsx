import PropTypes from 'prop-types'

const BalanceCard = ({ className }) => {
  return (
    <div
      className={
        className +
        ' relative h-32 w-80 overflow-hidden rounded-lg bg-white sm:block'
      }
    >
      <div className='absolute -left-10 -top-10 h-28 w-28 rounded-full bg-primary' />
      <div className='absolute left-20 top-4 h-5 w-5 rounded-full bg-danger' />
      <div className='absolute bottom-3 right-3 text-end'>
        <div>Your Balance</div>
        <div className='text-4xl font-semibold text-primary'>$200.00</div>
      </div>
    </div>
  )
}

BalanceCard.propTypes = {
  className: PropTypes.string,
}

export default BalanceCard
