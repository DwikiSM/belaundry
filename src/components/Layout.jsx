import Sidebar from './Sidebar'
import Header from './Header'

import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getUserInfo } from '../services/api'

const Layout = () => {
  const [title, setTitle] = useState('')
  const [username, setUsername] = useState()

  useEffect(() => {
    getUserInfo()
      .then(({ data }) => {
        setUsername(data.response.name)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div className='flex'>
      <Sidebar className='w-1/5' title={title} />
      <div className='max-h-screen w-full overflow-y-auto'>
        <Header title={title} username={username} />
        <Outlet context={{ setTitle }} />
      </div>
    </div>
  )
}

export default Layout
