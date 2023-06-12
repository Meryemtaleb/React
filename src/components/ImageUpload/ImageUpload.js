import React ,{useState}from 'react'
import axios from 'axios'

function ImageUpload() {
    const [selectedFile, setSelectedFile]=useState(null)
    const handelFileChange =(event)=>{
        console.log(event.target.files[0]);
        setSelectedFile(event.target.files[0])
    }


    const handelSubmit = (event)=>{
        event.preventDefault();
        if(selectedFile){
            const formData = new FormData();
            formData.append('image',selectedFile);//ajouter à l'interieur de formdata un element image
            axios.post(`http://localhost:5000/upload/`,formData)
            .then(( response )=>{
                console.log(response.data);
            }).catch(( error )=>{
                console.log(error);
            });
    }}
  return (

    <form onSubmit={handelSubmit}>
    <input type="file" multiple onChange={handelFileChange} />
    <button type ="submit " >Envoyer</button>
     </form>

  )
}

export default ImageUpload