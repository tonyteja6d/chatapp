import { useState } from 'react'
import {Link} from 'react-router-dom'
import useLogin from '../../componentes/hooks/useLogin'

function Login() {

  const[username,setUsername]= useState("")
  const[password,setPassword] = useState("")
  
  const{loading,login} = useLogin()

  const handleSubmit = async (e)=>{
    e.preventDefault()
    await login(username,password)
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-4xl font-semibold text-center text-gray-300'>Login
          <span className='text-blue-500'>ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2 flex flex-col">
              <span className="text-2xl w-full label-text">Username</span>
              <input type="text" placeholder="Enter Username" className='w-ful input input-bordered h-10'
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label className="label p-2  flex flex-col ">
              <span className="w-full text-2xl label-text">Password</span>
              <input type="password"
                placeholder="Enter password"
                className='w-ful input input-bordered h-10'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
            </label>
          </div>
          <Link to='/signup' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
            Don't have an account?
          </Link>
          <div>
            <button className='btn btn-block btn-sm mt-2'
            disabled={loading}
            >
            {loading ? <span className='loading  loading-spinner'></span>: "Login" }
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login