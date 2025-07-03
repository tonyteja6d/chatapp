import { useState } from 'react'
import './App.css'
import Login from './pages/login/Login'
import Singup from './pages/Singup/Singup'
import Home from './pages/Home/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='p-4 h-screen flex items-center justify-center'>
        {/* <Login /> */}
        {/* <Singup /> */}
        <Home />
     </div>
    </>
  )
}

export default App
