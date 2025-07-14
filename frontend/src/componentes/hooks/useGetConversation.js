import { useEffect, useState } from "react"
import toast from "react-hot-toast"


function useGetConversation() {
  const [loading,setloading] = useState(false)
  const [conversations,setconversations] = useState([])
  useEffect(()=>{
    const getconversation = async ()=>{
        setloading(true);
        try {
            const res = await fetch('api/users')
            const data = await res.json()
            if(data.error){
                throw new Error(data.error);
            }
            setconversations(data)
        } catch (error) {
          toast.error(error.message)
        }finally{
            setloading(false)
        }
    }
    getconversation();
  },[])
  return {loading,conversations}
}

export default useGetConversation