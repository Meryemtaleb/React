import React, {useEffect, useState}from 'react'
import io from 'socket.io-client';
const socket = io('http://localhost:5000')

function ChatApp() {
const [message ,setMessage] = useState('');
const [messages, setMessages] = useState([]);

useEffect(() =>{
socket.on('message', (data)=>{
    //recuperation des nouveaux messgesen gardant les anciens
setMessages([...messages,data]);
})
return () =>{
    socket.off('message')
}


},[message]);
const sendMessage =(e) =>{
    e.preventDefault();
    socket.emit('message',message);
    setMessage('');
}



  return (
    <React.Fragment>ChatApp
    
    <ul>
    {messages.map((msg,index)=>(
    
        <li key={index}>{msg}</li>
    ))}
    </ul>
    <form onSubmit={sendMessage}>
        <input value={message} onChange={(e) =>setMessage(e.target.value)} />
        <button type ="submit" >Send</button>
    </form>
    </React.Fragment>
  )
}

export default ChatApp