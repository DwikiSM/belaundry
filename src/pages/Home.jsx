import { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'

const Home = () => {
  const { setTitle } = useOutletContext()

  useEffect(() => {
    setTitle('Home')
  }, [setTitle])

  return <div>Home page</div>
}

export default Home
