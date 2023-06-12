import React, {useState,useEffect}from 'react'
import axios from 'axios'
function DataFetchAll() {
        //chargement
        const[loading,setLoading] = useState(true)
        //Erreur
        const[error,setError] = useState('')
        //Données
        const[posts,setPosts] = useState({})

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/`)
        .then(response =>{
            setLoading(false)
            setError('')
            setPosts(response.data)
        }).catch(error =>{
            setLoading(false)
            setError('Something went wrong !!!!')
            setPosts({})
        })
    })
  return (
    <div>
        {loading ?'loading ...' :posts.map((post,index)=>{//key : pour identifier chaque ligne affiché
            return (
                <React.Fragment key={index}>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
                <h3>UserId :{post.userId}</h3>
                <p>{error ? error:null}</p>
                </React.Fragment>
               
            )
        })}

    </div>
  )
}

export default DataFetchAll