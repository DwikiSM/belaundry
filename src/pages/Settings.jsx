import { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import Button from '../components/Button'

const Settings = () => {
  const { setTitle } = useOutletContext()

  useEffect(() => {
    setTitle('Settings')
  }, [setTitle])

  return (
    <div className='m-4'>
      <Button>
        <a href='/'>Home</a>
      </Button>
    </div>
  )
}

export default Settings
