import React, { useState } from "react";
import Moment from "react-moment";
import { useParams } from "react-router-dom";

interface MessageProps{
    messageValue: any
    isMessageSend: boolean
}

export const Message:React.FC<MessageProps> = (props) =>{
    const id = useParams()
  
    return(
        <div className="main-massage">  
            {props.messageValue.map((m:any)=>{
                return(
                    <div className="message" key={m.id}>
                        {
                            m.id ==id.id &&
                            m.messages.map((i:any)=>{
                                return (
                                    <div className="message-block">
                                        <div className="message_inner-block">
                                            <p className="message_m" >{i.text}</p>
                                            <Moment className="message_d" format={'YYYY/MM/DD, HH:mm'} date={i.date}/>
                                        </div>
                                    </div>
                                )
                            }) 
                        }
                    </div>
                )   
            })}
        </div>
    )
}