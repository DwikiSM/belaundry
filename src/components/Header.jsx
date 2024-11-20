import PropTypes from 'prop-types'
import { AiOutlineUser } from 'react-icons/ai'

const Header = ({ title, username, onClick }) => {
  return (
    <div className='flex w-full items-center justify-between bg-white p-4'>
      <h1
        className='cursor-pointer text-3xl font-bold md:cursor-default'
        onClick={onClick}
      >
        {title}
      </h1>
      <div className='flex items-center space-x-1'>
        <AiOutlineUser className='h-6 w-6 flex-shrink-0' />
        <div>{username}</div>
      </div>
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  username: PropTypes.string,
  onClick: PropTypes.func,
}

export default Header
