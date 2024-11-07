import PropTypes from 'prop-types'

const Button = ({ children, className, onClick }) => {
  return (
    <button
      type='button'
      className={`${className || ''} float-right mb-2 rounded-lg bg-success px-5 py-2.5 text-white hover:bg-green-400 focus:ring-4 focus:ring-accent`}
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
}

export default Button
