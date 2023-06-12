import React, {useEffect, useReducer}from 'react'
import axios from 'axios'
function BlogIndex() {

    const initialestate ={
        loading : true,
        error : '',
       blogs : {}
    }
    
    const reducer = (state, action) => {
        switch (action.type) {
          case 'FETCH_SUCCESS':
            return {
              loading: false, 
              blogs: action.payload, 
              error: '', 
            };
          case 'FETCH_ERROR':
            return {
              loading: false, 
              blogs: {}, 
              error: 'Something went wrong!!!!!', 
            };
          default:
            return state;
        }
      };
      const [state, dispatch] =useReducer(reducer,initialestate)

      useEffect(()=>{
        axios.get('http://localhost:5000/myblog')
        .then(response=>{
            console.log(response.data);
                dispatch({type: 'FETCH_SUCCESS' , payload: response.data});
        
            }).catch(error=>{  
                 dispatch({type: 'FETCH_ERROR'});});
    }, [])


  return (
  <React.Fragment>
   {state.loading ? 'loading....' : state.blogs.map((blog,index)=> {
    return (
    <React.Fragment key={index}>
        <h1>{blog.titre}</h1>
        <h3>{blog.username}</h3>
        <img src={`http://localhost:5000/${blog.imagename}`} />


    </React.Fragment>

    )

   })}
 </React.Fragment>
  )
}

export default BlogIndex