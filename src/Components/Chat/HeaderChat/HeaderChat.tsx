import React from "react";
import { useParams } from "react-router-dom";
import icon from "../../../Assets/profileIcon.png"

interface HeaderChatProps{
    photo: string
}

export const HeaderChat: React.FC<HeaderChatProps> = (props) =>{

    const params = useParams()

    return(
            <div className="header-chat" key={params.id}>
                <img src={props.photo} className='profileIcon'/>
                <p className="header-chat__name"> {params.name} </p>
            </div>
    )
} 