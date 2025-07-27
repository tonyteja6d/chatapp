import {createContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from  "socket.io-client"
import { useContext } from "react";

export const SocketContext = createContext();

export const useSocketContext = ()=>{
    return useContext(SocketContext);
}

export const SocketContextProvider = ({children})=>{
    const [socket,setSocket] = useState(null);
    const[onlineUsers,setOnlineUsers] = useState([]);
    const {authUser} = useAuthContext();

    useEffect(()=>{
        if(authUser){
            const socket = io("https://chatapp-prd.onrender.com",{
                query : {
                    userId:authUser._id,
                }
            });
            setSocket(socket);
             //socket.on() is used to listen to the events. can be used both on client and server end
            socket.on("get-online-users",(users)=>{
                setOnlineUsers(users)
            })
            return()=>socket.close();
        }else{
         if(socket){
            socket.close();
            setSocket(null)
         }
        }
    },[authUser])
    return(
        <SocketContext.Provider value={{socket,onlineUsers}}>
            {children}
        </SocketContext.Provider>
    )
}