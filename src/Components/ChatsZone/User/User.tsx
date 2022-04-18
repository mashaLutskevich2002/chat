import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import { Routes, useParams } from "react-router-dom";
import { Message } from "../../Chat/Message/Message";

interface UserProps{
    id:number,
    name:string,
    photo:string
    addPhoto(photo:string):void
    messageValue:any
}

export const User:React.FC<UserProps> = (props) =>{
    const returnPhoto = () => {
        props.addPhoto(props.photo)
    }
    
    return(
        <div key={props.id} className='users' onClick={returnPhoto}>
            <img src={props.photo} alt="img" className="profileIcon"/>
            <div className="users__main">
                <p className="users__name">{props.name}</p>
                <div className="users__messages">
                    {
                        props.messageValue.map((m:any) => {  
                            if(props.id == m.id){
                                const lastElement = m.messages[m.messages.length-1];
                                if(lastElement !== undefined){
                                    return (
                                        <>
                                            <p>{lastElement.text}</p>
                                            <Moment format={'YYYY/MM/DD, HH:mm'} date={lastElement.date}/>
                                        </>
                                    )
                                }else{
                                    return null
                                }
                            }
                        })
                    }
                </div>
            </div>    
        </div>
        
    )
}