import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getUserInfo } from './services/api'

function App() {
  const [name, setName] = useState()

  useEffect(() => {
    getUserInfo()
      .then(({ data }) => {
        setName(data.response.name)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route
          path='/'
          element={
            <h1 className='container'>
              {name ? 'Welcome, ' + name : 'Welcome'}
            </h1>
          }
        />
        {/* Admin */}
        <Route path='/admin' element={'admin'} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
