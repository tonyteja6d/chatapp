import { useState } from 'react'
import './App.css'
import Login from './pages/login/Login'
import Signup from './pages/SingUp/SignUp'
import Home from './pages/Home/Home'
import { Navigate, Route,Routes } from 'react-router-dom'
import {Toaster} from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext'

function App() {
    const {authUser} = useAuthContext()
  return (
    <>
     <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path='/' element ={!authUser ? <Navigate to='/login'/> : <Home/> }/>
        <Route path='/login' element ={authUser ? <Navigate to='/'/> : <Login/> }/>
        <Route path='/signup' element ={authUser ? <Navigate to='/'/>: <Signup/> }/>
      </Routes>
      <Toaster/>
     </div>
    </>
  )
}

export default App
