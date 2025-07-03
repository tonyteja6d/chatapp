import React from 'react'

function GenderCheckbox() {
  return (
    <div className='flex p-2'>
        <div className='form-control mr-6'>
        <label className={`label gap-2 cursor-pointer`}>
            <span className='label-text'>
                Male
            </span>
            <input type="checkbox" className='checkbox border-white-900' />
        </label>
        </div>
        <div className='form-control'>
        <label className={`label gap-2 cursor-pointer`}>
            <span className='label-text'>
                Female
            </span>
            <input type="checkbox" className=' checkbox border-white-900' />
        </label>
        </div>
    </div>
  )
}

export default GenderCheckbox