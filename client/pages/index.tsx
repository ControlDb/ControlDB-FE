import { useRouter } from 'next/router'
import { useState, useContext, useEffect } from 'react'

import Header from '../components/header'
import { baseCall } from './api/middleware'

export default function Home() {
  const [user, setUser] = useState('')
  const router = useRouter()

  useEffect(() => {
    // baseCall 
    const testCall = async () => {
      const res = await baseCall()
      console.log(res)
    }
    testCall()
  }, [])
    

  const handleChange = (e: any) => {
    setUser(e.target.value)
  }

  const handleLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if (user === '') {
      alert('Please enter a username')
      return
    }
    localStorage.setItem('user', user)
    router.push({
      pathname: '/documents',
    })
  }
    
  return (
    <>
    <Header user='' />
      <div className='h-screen justify-center flex items-center'>
        <div className='content-center'>
          <h1 className='text-6xl font-bold my-6'>Login</h1>
          <form className='flex flex-col my-2'>
            <input type='text' name='email' id='email' placeholder='Username' onChange={handleChange}/>
            <button onClick={handleLogin} type='submit' className='bg-blue-500 text-white font-bold py-2 px-4 rounded'>
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
