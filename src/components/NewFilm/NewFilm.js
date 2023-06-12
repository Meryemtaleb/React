import React from 'react'
import { Button } from '../styles/Button.style'

function NewFilm() {
  return (
    
    <form action="http://localhost:5000/submitFilm" method="post">
        <label for="">Nom</label>
        <input type="text" name="nom"/><br/>
        <label for="">Date</label>
        <input type="text" name="date"/><br/>
        <label for="">Realisateur</label>
        <input type="text" name="realisateur"/><br/>
        <label for="">Genre</label>
        <input type="text" name="genre"/><br/>

        {/* <input type="submit" value="envoyer"/> */}
        <Button bg="orange">Submit</Button>
        
    </form>
  
  )
}

export default NewFilm