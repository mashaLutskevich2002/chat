import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import { Routes } from "react-router-dom";
import { Message } from "../../Chat/Message/Message";

interface UserProps{
    id:number,
    name:string,
    messages:string,
    photo:string
    date: number
    addPhoto(photo:string):void
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
                    <p>{props.messages}</p>
                    <Moment format={'YYYY/MM/DD, HH:mm'} date={props.date} />
                </div>
            </div>    
        </div>
        
    )
}