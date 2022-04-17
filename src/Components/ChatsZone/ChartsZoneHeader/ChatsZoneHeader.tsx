import React from "react";
import icon from "../../../Assets/profileIcon.png"



export const ChatsZoneHeader: React.FC = () =>{
    return(
            <div className="chats-zone-header">
                <img src={icon} className='profileIcon'/>
                <input type="text" placeholder="Search of start new chat" className="search"/>
            </div>
    )
} 