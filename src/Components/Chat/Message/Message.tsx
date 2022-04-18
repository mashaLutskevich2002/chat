import React, { useState } from "react";
import Moment from "react-moment";
import { useParams } from "react-router-dom";

interface MessageProps{
    randomMessage:string
    messageValue: any
}

export const Message:React.FC<MessageProps> = (props) =>{
    const id = useParams()
  
    return(
        <>  
            {props.messageValue.map((m:any)=>{
                return(
                    <div className="message" key={m.id}>
                        {
                            m.id ==id.id &&
                            m.messages.map((i:any)=>{
                                return (
                                    <>
                                    <p>{i.text}</p>
                                    <Moment format={'YYYY/MM/DD, HH:mm'} date={i.date}/>
                                    </>
                                )
                            }) 
                        }
                    </div>
                )   
            })}
        </>
    )
}