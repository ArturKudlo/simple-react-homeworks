import React from 'react'
import {messageData} from "./HW1";
import './Message.css';
// import s from "../../p1-main/m1-ui/u1-app/App.module.css";

type PropsType = {
    name: string
    message: string
    avatar: string
    time: string
}

function Message(props: PropsType) {
    return (
        <div className={'home__work1'}>
            <div className={'message'}>
                <div className={'message__logo'}>
                    <img src={messageData.avatar} alt={'user'}/>
                </div>
                <div className={'message__content'}>
                    <div className={'message__name'}>{messageData.name}</div>
                    <div className={'message__info'}>
                        <div className={'message__message'}>{messageData.message}</div>
                        <div className={'message__time'}>{messageData.time}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message
