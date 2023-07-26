import React ,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function EditBlog() {
    const params = useParams();
    let navigate = useNavigate();
    const [file, setFile] = useState(null);
    const [titre, setTitre] = useState('');
    const [username, setUsername] = useState('');
    const [content, setContent] = useState('');
    const [imagename, setImagename] = useState('');
    useEffect(()=>{
    axios.get(`http://localhost:5000/blog/${params.id}`)
    .then(response =>{
        setTitre(response.data.titre)
        setUsername(response.data.username)
        setContent(response.data.content)
        setImagename(response.data.imagename)
    }).catch(error =>{
        console.log(error);
    })
  },[])
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
        axios.put(`http://localhost:5000/blogedit/${params.id}`, formData)
            .then((response) => {
                console.log(response.data);
                return navigate('/blog')
            }).catch((error) => {
                console.log(error);
            });
    }
};
  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
    <form className='col-lg-3 col-md-6 col-sm-12 col-xs-12' onSubmit={handelSubmit} >
    <h2 className='text-success'>Edit Post</h2>
    <div className="mb-3">
        <label className="form-label" >Title</label>
        <input type='text' className="form-control" value={titre} name='titre' onChange={handelTitreChange} />
    </div>
    <div className="mb-3">
        <label className="form-label">Username</label>
        <input type='text' className="form-control" value={username} name='username' onChange={handelUsernameChange} />
    </div>
    <div class="form-floating">
        <textarea class="form-control" name='content' rows={"50"} value={content} onChange={handelContentChange}></textarea>
    </div>
    <div className="input-group my-3">
        <input class="form-control" type='file' onChange={handelFileChange} />
    </div>
    <img src={`http://localhost:5000/${imagename}`} width="150px" alt="image" /><br/>
    <button className=' mt-5 btn btn-primary' type="submit " >Envoyer</button>
</form>
</div>
  )
}

export default EditBlog
