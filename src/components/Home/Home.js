import React, {useEffect, useReducer}from 'react'
import axios from 'axios'

function Home() {

const initialestate ={
    loading : true,
    error : '',
   contacts : {}
}
const reducer = (state,action)=>{
    switch(action.type){
        case 'FETCH_SUCCESS': 
        return {
            loading : false,
            contacts : action.payload,
            error : '',
        }
        case'FETCH_ERROR':
        return{
            loading : false,
            contacts : {},
            error : "Something went wrong !!!!!",
        }
        default :
        return state 
    }
}
const [state, dispatch] =useReducer(reducer,initialestate)

useEffect(()=>{
    axios.get('http://localhost:5000/',{ withCredentials:true })
    .then(response=>{
            dispatch({type: 'FETCH_SUCCESS' , payload: response.data});
    
        }).catch(error=>{  
             dispatch({type: 'FETCH_ERROR'});});
} ,[])

try{
    var returnContact = state.contacts.map((contact)=> {

    return(

     <React.Fragment>
     <h3>{contact.firstname} </h3>
     <h3>{contact.lastname} </h3>
     <p> votre email est : {contact.email}</p>
     
     </React.Fragment>
    )
}) 
}
catch(error){
    console.log(error)
    console.log("utilisateur non connecter")

}




//CORS ets une librereie pour permettre d'acceder au données exterieur


  return (
    <React.Fragment>
      
        <h1>Bienvenu sur notre site React</h1>
        {returnContact}
    </React.Fragment>
  )
}

export default Home