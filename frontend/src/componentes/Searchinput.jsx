import { useState } from "react";
import toast from "react-hot-toast";
import {IoSearchSharp} from "react-icons/io5";
import useConversation from "../Zustand/useConversation";
import useGetConversation from "./hooks/useGetConversation";

function Searchinput() {

    const [search, setSearch] = useState("");
    const {setSelectedConversation} = useConversation()
    const {conversations} = useGetConversation()

    const handleSubmit =(e)=>{
        e.preventDefault();
        if(!search) return;
        if(search.length <3){
          return toast.error('Search term must be at least 3 characters long')
        }

        const conversation = conversations.find((c)=>c.fullName.toLowerCase().includes(search.toLowerCase()));
        if(conversation){
          setSelectedConversation(conversation);
          setSearch("");
        }else toast.error("No such user found!")
    }
  return (
    <div> 
      <form onSubmit={handleSubmit} action="" className='flex p-2  item-center gap-2'>
      <input type="text" placeholder='Search' className='input input-border rouded-full'
      value={search}
      onChange={(e)=>{setSearch(e.target.value)}} 
      />
      <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
        <IoSearchSharp className='w-6 h-6 outline-none '/>
      </button>
      </form>
    </div>
  )
}

export default Searchinput