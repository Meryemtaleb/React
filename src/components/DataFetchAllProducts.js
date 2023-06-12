import React, {useEffect, useReducer}from 'react'
import axios from 'axios'
function DataFetchAllProducts() {
const initialeState ={
    loading : true,
    error : '',
    produits : {}
}
const reducer = (state,action)=>{
    switch(action.type){
        case 'FETCH_SUCCESS': 
        return {
            loading : false,
            produits : action.payload,
            error : '',
        }
        case'FETCH_ERROR':
        return{
            loading : false,
            produits : {},
            error : "Something went wrong !!!!!",
        }
        default :
        return state 
    }
}
const [state, dispatch] =useReducer(reducer,initialeState)
useEffect(()=>{
    axios.get('https://mocki.io/v1/78c793c7-58cb-416f-b2ca-d5d737f7c17e')
    .then(response=>{
            dispatch({type: 'FETCH_SUCCESS' , payload: response.data.products});
    
        }).catch(error=>{  
             dispatch({type: 'FETCH_ERROR'});});
})




  return (
    <div>
    {state.loading ? 'Loading...'  : (
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Category</th>
            <th>Photos</th>

          </tr>
        </thead>
        <tbody>
          {state.produits.map((produit, index) => (
            <tr key={index}>
              <td>{produit.title}</td>
              <td>{produit.description}</td>
              <td>{produit.category}</td>
              <td><img src={produit.thumbnail}/></td>
        
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
  )
}

export default DataFetchAllProducts