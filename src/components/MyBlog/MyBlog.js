import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function MyBlog() {
    let navigate = useNavigate();
const [file,setFile] = useState(null);
const [titre,setTitre] = useState('');
const [username,setUsername] = useState('');
const [imagename,setImagename] = useState('');
const handelFileChange = (event)=>{
    setFile(event.target.files[0]);
    setImagename(event.target.files[0].name); 
};
const handelUsernameChange = (event)=>{
    setUsername(event.target.value);
};
const handelTitreChange = (event)=>{
    setTitre(event.target.value);
};
const handelSubmit = (event)=>{
    event.preventDefault();
    if(file){
        const formData = new FormData();
        formData.append('file',file);
        formData.append('titre',titre);
        formData.append('username',username);
        formData.append('imagename',imagename);
        axios.post(`http://localhost:5000/submit-blog/`,formData)
        .then(( response )=>{
            console.log(response.data);
            return navigate('/blog')
        }).catch(( error )=>{
            console.log(error);
        });
}};

  return (
    <form onSubmit={handelSubmit} >
    <label >Titre</label>
    <input type='text' name='titre' onChange={handelTitreChange} />
    <label >Username</label>
    <input type='text' name='username' onChange={handelUsernameChange} />
    <label >Image :</label>
    <input type='file' onChange={handelFileChange} />
    <button type="submit " >Envoyer</button>
</form>
  )
}

export default MyBlog