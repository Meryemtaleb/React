import React, {useEffect, useReducer}from 'react'
// import { Button } from '../styles/Button.style'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Button, Icon } from 'semantic-ui-react'

function FetchAllFilm() {
  
    const initialestate ={
        loading : true,
        error : '',
       films : {}
    }
    const reducer = (state, action) => {
        switch (action.type) {
          case 'FETCH_SUCCESS':
            return {
              loading: false, // Le chargement est terminé, donc on met loading à false
              films: action.payload, // Les films récupérés de l'API sont stockés dans la propriété films
              error: '', // Réinitialisation de la propriété error, car il n'y a pas d'erreur
            };
          case 'FETCH_ERROR':
            return {
              loading: false, // Le chargement est terminé, donc on met loading à false
              films: {}, // Réinitialisation de la propriété films à un objet vide
              error: 'Something went wrong!!!!!', // Message d'erreur pour indiquer qu'il y a eu une erreur
            };
          default:
            return state; // Par défaut, on retourne simplement l'état inchangé
        }
      };
      
      
    const [state, dispatch] =useReducer(reducer,initialestate)
    
    useEffect(()=>{
        axios.get('http://localhost:5000/allfilm')
        .then(response=>{
                dispatch({type: 'FETCH_SUCCESS' , payload: response.data});
        
            }).catch(error=>{  
                 dispatch({type: 'FETCH_ERROR'});});
    })

  return (
    <React.Fragment>

    Listes des films:
      {state.loading?'loading....': state.films.map((film,index)=> {

        return(

         <React.Fragment key={index}>
       
         <h3>{film.nom} </h3>
         <h3>{film.date} </h3>
         <p> {film.realisateur}</p>
         <p> {film.genre}</p>
         <p> {film._id}</p>
        
        <Link to={`/editfilm/${film._id}`}> <button bg="orange">Editer </button></Link>

        <form action={`http://localhost:5000/film/delete/${film._id}?_method=DELETE`} method="post">
        <input type="hidden" name="_method" value="DELETE"/>

        <input type="submit" value="Supprimer"/>
       </form>
         
         </React.Fragment>

        )

    })}
</React.Fragment>
  )
}

export default FetchAllFilm