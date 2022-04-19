import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { users } from "../../Data/users";
import { ChatsZoneHeader } from "./ChartsZoneHeader/ChatsZoneHeader";
import { User } from "./User/User";


interface ChatsZoneProps{
    addPhoto(photo:string):void
    messageValue:any
}

export const ChatsZone: React.FC<ChatsZoneProps> = (props) =>{

    return(
        <div className="chats-zone">
            <ChatsZoneHeader/>
            <p className="chats-zone__p">Chats</p>
               {
                   users.map((user) => {

                            return(
                                <NavLink to={"/" + user.id + '/' + user.name} className="chats-zone__link">
                                    <User id={user.id} name={user.name} photo={user.photo}
                                    addPhoto={props.addPhoto} messageValue={props.messageValue} />
                                </NavLink> 
                            )
                        })
                }
        </div>
    )
} 