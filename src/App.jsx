import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './components/Layout'

import Home from './pages/Home'
import Products from './pages/Products'
import Sales from './pages/Sales'
import Settings from './pages/Settings'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path='/' element={<a href='/admin'>go to admin</a>} />
        {/* Admin */}
        <Route path='/admin' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='products' element={<Products />} />
          <Route path='sales' element={<Sales />} />
          <Route path='settings' element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
