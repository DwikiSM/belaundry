import { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'

const Settings = () => {
  const { setTitle } = useOutletContext()

  useEffect(() => {
    setTitle('Settings')
  }, [setTitle])

  return (
    <div>
      <a href='/'>go to BeLaundry</a>
    </div>
  )
}

export default Settings
