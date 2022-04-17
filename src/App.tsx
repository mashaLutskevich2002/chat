import React, { useContext, useEffect } from 'react';
import './App.css';
import { useState } from 'react';
import { ChatsZone } from './Components/ChatsZone/ChatsZone';
import { Chat } from './Components/Chat/Chat';
import { Route, Routes } from 'react-router-dom';
import { users } from './Interfaces/users';
import { createContext } from 'react';
import { IMessageContext} from './Context/context';



const App:React.FC = () => {
  const [photo, setPhoto] = useState('');
  const [usersInfo, setUsersInfo] = useState(users)
  const [randomMessage, setRandomMessage] = useState<string>('')
  const [messageValue, setMessageValue] = useState('') //для будущего возможно

    const message: IMessageContext = {
      id: users.map((m)=> m.messageInfo)
    };
    console.log(message);


  const handlerMessageValue = (message: string, ) => {
    usersInfo.map((m)=>m.messageInfo.message.push(message))
    console.log(usersInfo);
  }

  const getMessage = async () => {
    try{
      const response = await fetch('https://api.chucknorris.io/jokes/random')
      return await response.json()
    }catch (error){
      throw error
    }
  }

  useEffect(() => {
    const saveUsers = JSON.parse(localStorage.getItem('users') || '[]') 
    setUsersInfo(saveUsers)
  },[])

  useEffect(() => {
      localStorage.setItem('users', JSON.stringify(usersInfo))
  },[usersInfo])

  useEffect(()=>{
    getMessage().then(r => setRandomMessage(r.value)) 
  },[])
  
  const addPhoto= (photo:string)=> {
    setPhoto(photo)
  }

  return (
    // <MessageContext.Provider value={message}>
    <div className="App" >
      <ChatsZone addPhoto={addPhoto}  usersInfo={usersInfo}  />
      <Routes>  
        <Route path='/:id/:name' element={<Chat photo={photo} userInfo={usersInfo} messageValue={messageValue}  handlerMessageValue={handlerMessageValue} randomMessage={randomMessage}/>} />
      </Routes>
    </div>
    //  </MessageContext.Provider>
  );
}

export default App;
