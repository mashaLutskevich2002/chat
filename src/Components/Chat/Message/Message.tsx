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
                        
                        {
                            m.messageInfo.message.map((item:any)=>{
                               if( m.id == id.id ){
                                   return (
                                       <>
                                        <p>{item}</p>
                                        <Moment format={'YYYY/MM/DD, HH:mm'} date={m.messageInfo.date}/>
                                       </>
                                   )
                               }      
                        })
                        }  
                </div>
                )   
            })}
        </>
    )
}