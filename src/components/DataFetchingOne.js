import React, {useState,useEffect}from 'react'
import axios from 'axios'

function DataFetchingOne() {
    //chargement
    const[loading,setLoading] = useState(true)
    //Erreur
    const[error,setError] = useState('')
    //Données
    const[post,setPost] = useState({})

useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/375`)
    .then(response =>{
        setLoading(false)
        setError('')
        setPost(response.data)
    }).catch(error =>{
        setLoading(false)
        setError('Something went wrong !!!!')
        setPost({})
    })
})


  return (
    <div>
        <h1>
            Titre de post :
        {loading ?'loading ...' :post.title}</h1>
        <p> {loading ?'loading ...' :post.body}
        {error ? error:null}
        </p>
      
    </div>
  )
}

export default DataFetchingOne