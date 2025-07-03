const Message = () => {
    return (
        <div className="chat chat-end">
            <div className="chat-imge avatar">
                <div className="w-10 rounded-full">
                    <img src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp" alt="Tailwnd css chat bubble component" />
                </div>
            </div>
            <div className={`chat-bubble text-white bg-blue-500`} > 
                Hi! what is upp? 
            </div>
            <div className={`chat-footer text-white bg-blue-500`} > 
                12:42
            </div>
        </div>
    )
}

export default Message