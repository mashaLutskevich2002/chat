import React, { useState } from "react";
import Moment from "react-moment";
import { IMessages } from "../../../Interfaces/messages";

interface MessageProps{
    userInfo:any[]
    randomMessage:string
    messageValue:string
}

export const Message:React.FC<MessageProps> = (props) =>{
    return(
       <>  
            {props.userInfo.map((m)=>{
                return(
                <div className="message" key={m.id}>
                    <p className="message_m">
                        {m.messageInfo.message[m.messageInfo.message.length - 1]}
                    </p>
                    <p className="message_d"><Moment format={'YYYY/MM/DD, HH:mm'} date={m.messageInfo.date[m.messageInfo.date.length-1]} /></p>
                </div>
                )   
            })}
        </>
    )
}