import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { users } from "../../Interfaces/users";
import { ChatsZoneHeader } from "./ChartsZoneHeader/ChatsZoneHeader";
import { User } from "./User/User";


interface ChatsZoneProps{
    addPhoto(photo:string):void
    // messageValue: string[][]
    usersInfo: any[]
}

export const ChatsZone: React.FC<ChatsZoneProps> = (props) =>{

    return(
        <div className="chats-zone">
            <ChatsZoneHeader/>
            <p className="chats-zone__p">Chats</p>
               {
                   props.usersInfo.map((user)=>{
                            return(
                                <NavLink to={"/" + user.id + '/' + user.name}>
                                    <User id={user.id} name={user.name} photo={user.photo} messages={user.messageInfo.message[user.messageInfo.message.length - 1]} date={user.messageInfo.date[user.messageInfo.date.length - 1]}  addPhoto={props.addPhoto}/>
                                </NavLink> 
                            )
                        })
                      
                   
                }
        </div>
    )
} 