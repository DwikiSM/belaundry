import PropTypes from 'prop-types'

const Button = ({ children, className, onClick, type }) => {
  return (
    <button
      type={type}
      className={
        className ||
        'rounded-lg bg-success px-5 py-2.5 text-white hover:bg-green-400'
      }
      onClick={onClick}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
}

export default Button
