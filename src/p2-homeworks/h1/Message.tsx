import React from 'react'
import {messageData} from "./HW1";

type PropsType = {
    name: string
    message: string
    avatar: string
    time: string
}

function Message(props: PropsType) {
    return (
        <div>
            <img src={messageData.avatar}/>
            {messageData.name}
            {messageData.message}
            {messageData.time}
        </div>
    )
}

export default Message
