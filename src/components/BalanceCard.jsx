import PropTypes from 'prop-types'

const BalanceCard = ({ className }) => {
  return (
    <div
      className={className + ' relative h-32 w-80 rounded-lg bg-white sm:block'}
    >
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
