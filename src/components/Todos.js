import React, {useState,useEffect}from 'react'
import axios from 'axios'
import './styles/todos.css';
function Todos() {
        //chargement
        const[loading,setLoading] = useState(true)
        //Erreur
        const[error,setError] = useState('')
        //Données
        const[todos,setTodos] = useState({})



        //Recupere les données 
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/todos/`)
        .then(response =>{
            setLoading(false)
            setError('')
            setTodos(response.data)
        }).catch(error =>{
            setLoading(false)
            setError('Something went wrong !!!!')
            setTodos({})
        })
    })


 //Afficher les données on utilise .map si on a plusieur données à afficher 
  return (
    <div>
        {loading ?'loading ...' :todos.map((todo,index)=>{
           
               return (
                <React.Fragment  key={index}>
                {todo.completed ?
                <div className='vert' >
                <h1>{todo.title}</h1>
                <h3>UserId :{todo.userId}</h3>
                 <p>Etat : Completed</p> 
               </div>
                : 
                <div className='rouge'>
                <h1>{todo.title}</h1>
                <h3>UserId :{todo.userId}</h3>
                <p> Etat : No completed</p>
                </div>}
             <hr/>
         </React.Fragment>
               
            )
        })}

    </div>
  )
}

export default Todos