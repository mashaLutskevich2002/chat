import React from "react";
import { useState } from "react";
import { HeaderChat } from "./HeaderChat/HeaderChat";
import { Message } from "./Message/Message";
import { useParams } from "react-router-dom";

interface ChatProps{
  photo: string
  handlerMessageValue(messageValue: string, id:number|string|undefined, name:string|undefined ):void
  messageValue: any
  isMessageSend: boolean
}

export const Chat: React.FC<ChatProps> = (props) =>{
  const [message, setMessage] = useState<string>('');
  const params = useParams()

  const handlerChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
      setMessage(e.target.value)
  }

  const pressBut = () => {
    props.handlerMessageValue(message, params.id, params.name)
    setMessage('')
  }

  return(
      <div className="chat">
        <HeaderChat photo={props.photo} />
        <Message messageValue={props.messageValue} isMessageSend={props.isMessageSend}/>

        <div className="chat__sendMessage">
          <input className="chat__inputText" type='text' value={message} placeholder='send message' onChange={(e)=>handlerChange(e)}/>
          <input className="chat__inputButton" type='submit' value='Send' onClick={pressBut}/>
        </div>
    
      </div>
  )
} 