import React, {useState,useEffect}from 'react'
import axios from 'axios'

function Film() {
    //chargement
    const[loading,setLoading] = useState(true)
    //Erreur
    const[error,setError] = useState('')
    //Données
    const[film,setFilm] = useState({})
    const[nom,setNom] = useState({})

useEffect(()=>{
    axios.get(`http://www.omdbapi.com/?t=${nom}&apikey=da6993c2`)
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
const handelInputChange = event =>{
    setNom(event.target.value)
}


  return (
    <React.Fragment>
        <input type="text" onChange={handelInputChange} placeholder="Entrez le nom de film"></input>
        <h1>
            Titre de film  : 
        {loading ?'loading ...' : film.Title}</h1>
        <h3>
            L'année de film : 
        {loading ?'loading ...' : film.Year}</h3>
        
        {loading ?'loading ...' : <img src={film.Poster} alt="Affiche du film" />}

        {error ? error:null}
        
      
    </React.Fragment>
  )
}

export default Film