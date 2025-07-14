import useConversation from "../../Zustand/useConversation";
import {useAuthContext} from "../../context/AuthContext"
import { extractTime } from "../utils/extractTime";

const Message = ({message}) => {

       const {authUser} = useAuthContext();
        const {selectedConversation} = useConversation();
        const fromMe = message.senderId === authUser._id;
        const chatClassName = fromMe ? 'chat-end' : 'chat-start';
        const profilepic = fromMe ? authUser.profilepic:selectedConversation?.profilepic;
        const bubbleBgColor = fromMe ?'bg-blue-500' : '';
        const formatedTime = extractTime(message.createdAt);

    return (
        <div className={`chat ${chatClassName}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img src={profilepic} alt="Tailwnd css chat bubble component" />
                </div>
            </div>
            <div className={`chat-bubble text-white ${bubbleBgColor}`} > 
                {message.message}
            </div>
            <div className="chat-footer opacity-50 text-xs "> 
                 {formatedTime}
            </div>
        </div>
    )
}

export default Message