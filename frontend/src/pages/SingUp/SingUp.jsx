import React from 'react'
import GenderCheckbox from './GenderCheckbox';

function SingUp() {
  return (
    <>
      <div className='flex flex-col items-center justify-cen min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
          <h1 className='text-3xl font-semibold text-center text-gray-300'>
            Sing Up <span className='text-blue-500'> ChatApp</span>
          </h1>
          <form action="">
            <div>
              <label className="label p-2 flex flex-col">
                <span className="text-2xl w-full label-text">Full Name</span>
                <input type="text" placeholder="Tony Stark" className='w-ful input input-bordered h-10' />
              </label>
            </div>
            <div>
              <label className="label p-2 flex flex-col">
                <span className="text-2xl w-full label-text">User Name</span>
                <input type="text" placeholder="tonyavail" className='w-ful input input-bordered h-10' />
              </label>
            </div>
            <div>
              <label className="label p-2  flex flex-col ">
                <span className="w-full text-2xl label-text">Password</span>
                <input type="passowrd"
                  placeholder="Enter password"
                  className='w-ful input input-bordered h-10'
                />
              </label>
            </div>
            <div>
              <label className="label p-2  flex flex-col ">
                <span className="w-full text-2xl label-text">ConfirmPassword</span>
                <input type="passowrd"
                  placeholder="Confrim password"
                  className='w-ful input input-bordered h-10'
                />
              </label>
            </div>
            <GenderCheckbox/>

          <a href="#" className='text-sm p-2 hover:underline hover:text-blue-600 mt-2 inline-block'>
            Already have an account?
          </a>
            <div>
            <button className='btn btn-block btn-sm mt-2'>
              SingUp
            </button>
          </div>
          </form>
        </div>

      </div>
    </>
  )
}

export default SingUp;