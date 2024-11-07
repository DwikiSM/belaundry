import { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'

const Products = () => {
  const { setTitle } = useOutletContext()

  useEffect(() => {
    setTitle('Products')
  }, [setTitle])

  return <div>Products page</div>
}

export default Products
