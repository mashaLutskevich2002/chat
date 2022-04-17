import React, { useState } from "react";
import Moment from "react-moment";
import { useParams } from "react-router-dom";

interface MessageProps{
    userInfo:any[]
    randomMessage:string
    messageValue:string
}

export const Message:React.FC<MessageProps> = (props) =>{
    const id = useParams()
    console.log(id.id)
    
    return(
       <>  
            {props.userInfo.map((m)=>{
                return(
                <div className="message" key={m.id}>
                    <p className="message_m">
                        { m.id == id.id 
                            ? m.messageInfo.message[m.messageInfo.message.length - 1]
                            : null
                        }
                       
                    </p>
                    <p className="message_d">
                        {  m.id == id.id 
                        ? <Moment format={'YYYY/MM/DD, HH:mm'} date={m.messageInfo.date[m.messageInfo.date.length-1]}/>
                         :    null   
                        }
                       </p>
                </div>
                )   
            })}
        </>
    )
}