import React, {useState,useEffect}from 'react'
import axios from 'axios'

function FetchOneFilm() {

   //chargement
   const[loading,setLoading] = useState(true)
   //Erreur
   const[error,setError] = useState('')
   //Données
   const[film,setFilm] = useState({})

   useEffect(()=>{
    axios.get(`http://localhost:5000/film/64804cdc5c428e0aeeb8cb65`)
    .then(response =>{
        setLoading(false)
        setError('')
        setFilm(response.data)
    }).catch(error =>{
        setLoading(false)
        setError('Something went wrong !!!!')
        setFilm({})
    })
})

return (
    <div> 
         <h1>{loading ?'loading ...' :film.nom}</h1>
         <h1>{loading ?'loading ...' :film.date}</h1>
         <h1>{loading ?'loading ...' :film.realisateur}</h1>
         </div>
  )
}

export default FetchOneFilm