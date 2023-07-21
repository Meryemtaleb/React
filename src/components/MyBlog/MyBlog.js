import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function MyBlog() {
    let navigate = useNavigate();
    const [file, setFile] = useState(null);
    const [titre, setTitre] = useState('');
    const [username, setUsername] = useState('');
    const [content, setContent] = useState('');
    const [imagename, setImagename] = useState('');
    const handelFileChange = (event) => {
        setFile(event.target.files[0]);
        setImagename(event.target.files[0].name);
    };
    const handelUsernameChange = (event) => {
        setUsername(event.target.value);
    };
    const handelTitreChange = (event) => {
        setTitre(event.target.value);
    };
    const handelContentChange = (event) => {
        setContent(event.target.value);
    };
    const handelSubmit = (event) => {
        event.preventDefault();
        if (file) {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('titre', titre);
            formData.append('username', username);
            formData.append('content', content);
            formData.append('imagename', imagename);
            axios.post(`http://localhost:5000/submit-blog`, formData)
                .then((response) => {
                    console.log(response.data);
                    return navigate('/blog')
                }).catch((error) => {
                    console.log(error);
                });
        }
    };

    return (


        <form className='col-4 m-auto' onSubmit={handelSubmit} >
            <div className="mb-3">
                <label className="form-label" >Title</label>
                <input type='text' className="form-control" name='titre' onChange={handelTitreChange} />
            </div>
            <div className="mb-3">
                <label className="form-label">Username</label>
                <input type='text' className="form-control" name='username' onChange={handelUsernameChange} />
            </div>
            <div class="form-floating">
                <textarea class="form-control" name='content' onChange={handelContentChange}></textarea>
            </div>
            <div className="input-group my-3">
                <input class="form-control" type='file' onChange={handelFileChange} />
            </div>


            <button type="submit " >Envoyer</button>
        </form>
    )
}

export default MyBlog