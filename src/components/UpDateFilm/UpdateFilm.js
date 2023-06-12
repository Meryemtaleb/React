import React ,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
function UpdateFilm() {
    const params = useParams();
 //chargement
 const[loading,setLoading] = useState(true)
 //Erreur
 const[error,setError] = useState('')
 //Données
 const[film,setFilm] = useState({})
const [nom,setNom] = useState('')
const [realisateur,setRealisateur] = useState('')
const [genre,setGenre] = useState('')
 useEffect(()=>{
  axios.get(`http://localhost:5000/film/${params.id}`)
  .then(response =>{
      setLoading(false)
      setError('')
      setFilm(response.data)
      setNom(response.data.nom)
      setRealisateur(response.data.realisateur)
      setGenre(response.data.genre)
  }).catch(error =>{
      setLoading(false)
      setError('Something went wrong !!!!')
      setFilm({})
  })
},[])

const handleNomChange = event  =>{
  setNom(event.target.value)
}

const handleRealisateurChange = event  =>{
  setRealisateur(event.target.value)
}
const handleGenreChange = event  =>{
  setGenre(event.target.value)
}

  return (
   
    <React.Fragment>
        <div> 
         <h1>{loading ?'loading ...' :film.nom}</h1>
         <h1>{loading ?'loading ...' :film.date}</h1>
         <h1>{loading ?'loading ...' :film.realisateur}</h1>
         <h1>{loading ?'loading ...' :film.genre}</h1>
        </div>
          <form action={`http://localhost:5000/film/edit/${params.id}?_method=PUT`} method="post">
        <input type="hidden" name="_method" value="PUT"/>

        <label for="">Nom</label>
        <input type="text" name="nom" value={nom} onChange={handleNomChange}/>
        <label for="">Date</label>
        <input type="text" name="date" Value={film.date} />
        <label for="">Realisateur</label>
        <input type="text" name="realisateur" value={realisateur} onChange={handleRealisateurChange} />
        <label for="">Genre</label>
        <input type="text" name="genre" value={genre} onChange={handleGenreChange} />

        <input type="submit" value="envoyer"/>
    </form>
    
    <form action={`http://localhost:5000/film/delete/${params.id}?_method=DELETE`} method="post">
        <input type="hidden" name="_method" value="DELETE"/>

        <input type="submit" value="Supprimer"/>
    </form>
    </React.Fragment>
  )
}

export default UpdateFilm