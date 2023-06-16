// import React, { useEffect, useState } from 'react';
// import io from 'socket.io-client';
// import axios from 'axios';
// //Moment (date)
// import moment from 'moment/moment' ;
// import 'moment/locale/fr'
// moment().locale('fr')

// const socket = io('http://localhost:5000');

// function ChatApp() {
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:5000/socket')
//       .then((response) => {
//         setMessages(response.data);
//       })
//       .catch((error) => {
//         console.error('Erreur lors de la récupération des messages:', error);
//       });

//     socket.on('message', (data) => {
//       setMessages([...messages, data]);  //recuperation des nouveaux messgesen gardant les anciens
//     });

//     return () => {
//       socket.off('message');
//     };
//   }, [message]);

//   const sendMessage = (e) => {
//     e.preventDefault();
//     // Envoyer le message au serveur Node.js via une requête POST
//     axios.post('http://localhost:5000/message', { contenu: message })
//       .then((response) => {
//         console.log('Message envoyé avec succès');
//         socket.emit('message',message);
//       })
//       .catch((error) => {
//         console.error(error);
//       });

//     setMessage('');
//   };

//   return (
//     <React.Fragment>
//       <h1>ChatApp</h1>
//       <ul>
//         {messages.map((msg, index) => (
//             <div>
//           <li key={index}>{msg.contenu}</li>
//           <p> {moment(msg.date_envoi).format('LLL')}</p></div>
//         ))}
//       </ul>

//       <form onSubmit={sendMessage}>
//         <input value={message} onChange={(e) => setMessage(e.target.value)} />

//         <button type="submit">Send</button>
//       </form>
//     </React.Fragment>
//   );
// }

// export default ChatApp;

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
const socket = io('http://localhost:5000')
function ChatApp() {
  //envoyer
  const [message, setMessage] = useState('')
  // recevoir
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    socket.on('message', (data) => {


      axios.post('http://localhost:5000/chat/', messages)
      .then(( response )=>{
       console.log(response);
    }).catch(( error )=>{
        console.log(error);
    });
      //recuperation des nouveaux messages en gardant les anciens ...
      setMessages([...messages, data]);
    });
    return () => {
      socket.off('message')
    }
  }, [messages]); 
  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit('message', message);
    setMessage('')
  } //Afficheage la totalete des message
  return (
    <React.Fragment>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}       
         </ul>       
         <form onSubmit={sendMessage}>
        <input value={message} onChange={(e) => setMessage(e.target.value)} />
        <button type='submit'>Send</button>
      </form>
    </React.Fragment>
  )
} export default ChatApp