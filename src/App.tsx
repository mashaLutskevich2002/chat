import React, { useEffect } from 'react';
import './App.css';
import { useState } from 'react';
import { ChatsZone } from './Components/ChatsZone/ChatsZone';
import { Chat } from './Components/Chat/Chat';
import { Route, Routes, useParams } from 'react-router-dom';
import { messagesFile} from './Data/messages';

const App:React.FC = () => {
  const [photo, setPhoto] = useState('');
  const [randomMessage, setRandomMessage] = useState<string>('')
  const [messageValue, setMessageValue] = useState(messagesFile)

  //click for send button and create a new object (message)
  const handlerMessageValue = (message: string, id: string|undefined) => {  
    messageValue.filter((item:any) =>{ 
      if(item.id == id) {
        item.messages.push({
          text: message,
          date: new Date()
        })
      }else{
        return null
      }
    })
  
    localStorage.setItem('message', JSON.stringify(messageValue))
  }

  //get random message
  const getMessage = async () => {
    try{
      const response = await fetch('https://api.chucknorris.io/jokes/random')
      return await response.json()
    }catch (error){
      throw error
    }
  }

  useEffect(() => {
    const saveMessage = JSON.parse(localStorage.getItem('message') || '[]') 
    setMessageValue(saveMessage)
  },[messageValue])

  useEffect(()=>{
    getMessage().then(r => setRandomMessage(r.value)) 
  },[])
  
  const addPhoto= (photo:string)=> {
    setPhoto(photo)
  }

  return (
    <div className="App" >
      <ChatsZone addPhoto={addPhoto} messageValue={messageValue} />
      <Routes>  
        <Route path='/:id/:name' element={<Chat photo={photo} messageValue={messageValue}  handlerMessageValue={handlerMessageValue} randomMessage={randomMessage}/>} />
      </Routes>
    </div>
  
  );
}

export default App;
