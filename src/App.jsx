import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './components/Layout'

import Hero from './pages/Hero'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import ProductAdd from './pages/ProductAdd'
import Sales from './pages/Sales'
import Settings from './pages/Settings'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path='/' element={<Hero />} />
        {/* Admin */}
        <Route path='/admin' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='products' element={<Products />} />
          <Route path='products/:id' element={<ProductDetail />} />
          <Route path='products/add' element={<ProductAdd />} />
          <Route path='sales' element={<Sales />} />
          <Route path='settings' element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
