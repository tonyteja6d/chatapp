import {IoSearchSharp} from "react-icons/io5";

function Searchinput() {
  return (
    <div> 
      <form action="" className='flex p-2  item-center gap-2'>
      <input type="text" placeholder='Search' className='input input-border rouded-full' />
      <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
        <IoSearchSharp className='w-6 h-6 outline-none '/>
      </button>
      </form>
    </div>
  )
}

export default Searchinput