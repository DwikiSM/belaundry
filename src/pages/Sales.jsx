import { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'

const Sales = () => {
  const { setTitle } = useOutletContext()

  useEffect(() => {
    setTitle('Sales')
  }, [setTitle])

  return <div>Sales page</div>
}

export default Sales
