import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login,logout} from "./store/authSlice"
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  // console.log(import.meta.env.VITE_APPWRITE_URL); // (process.env... not applicable for vite)

  const [ loading,setLoading ] = useState(true)
  const dispatch = useDispatch()
  // const [  ]

  useEffect(() => {
    authService.getCurrentUser()
    .then(userData => {
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  },[])

  return ! loading ? 
  (<div className='min-h-screen flex flex-wrap
    content-between bg-gray-600'>
      <div className='w-full block'>
        <Header/>
        <main>
          {/* <Outlet/> */}
        </main>
        <Footer/>
      </div>
    </div>) : null
}

export default App
