import PropTypes from 'prop-types'

const Button = ({ children, form, className, onClick, type }) => {
  return (
    <button
      type={type}
      form={form}
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
  form: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
}

export default Button
