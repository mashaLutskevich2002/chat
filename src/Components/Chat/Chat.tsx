import React from "react";
import { useState } from "react";
import icon from "../../Assets/profileIcon.png"
import { HeaderChat } from "./HeaderChat/HeaderChat";
import { users } from "../../Interfaces/users";
import { Message } from "./Message/Message";
import { IMessages } from "../../Interfaces/messages";

interface ChatProps{
  photo: string
  handlerMessageValue(messageValue: string ):void
  randomMessage:string
  userInfo:any[]
  messageValue: string
}

export const Chat: React.FC<ChatProps> = (props) =>{
  const [message, setMessage] = useState<string>('');

  const handlerChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
      setMessage(e.target.value)
  }

  const pressBut = () => {
    props.handlerMessageValue(message)
  }

  return(
      <div className="chat">
        <HeaderChat photo={props.photo} />
        <Message randomMessage={props.randomMessage} messageValue={props.messageValue} userInfo={props.userInfo} />

        <div className="chat__sendMessage">
          <input className="chat__inputText" type='text' value={message} placeholder='send message' onChange={(e)=>handlerChange(e)}/>
          <input className="chat__inputButton" type='submit' value='Send' onClick={pressBut}/>
        </div>
    
      </div>
  )
} 