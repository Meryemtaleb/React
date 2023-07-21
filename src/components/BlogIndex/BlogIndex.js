import React, { useEffect, useReducer } from 'react'
import axios from 'axios'
function BlogIndex() {

  const initialestate = {
    loading: true,
    error: '',
    blogs: {}
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
  const [state, dispatch] = useReducer(reducer, initialestate)

  useEffect(() => {
    axios.get('http://localhost:5000/myblog')
      .then(response => {
        console.log(response.data);
        dispatch({ type: 'FETCH_SUCCESS', payload: response.data });

      }).catch(error => {
        dispatch({ type: 'FETCH_ERROR' });
      });
  }, [])


  return (
    <React.Fragment>
    <img src='img/hero.jpg' width={"100%"} height={"620px"}/>
      <h1 className='text-primary fs-1 '>My Blog : actualités et conseils.</h1>
      <div className='d-flex justify-content-evenly mt-4'>
      {state.loading ? 'loading....' : state.blogs.map((blog, index) => {
        return (
          <React.Fragment key={index}>
        
            <div className="card col-3" >
              <img src={`http://localhost:5000/${blog.imagename}`}  />
                <h1 className='text-info'>{blog.titre}</h1>
                <h3>{blog.username}</h3>
                <p>{blog.content}</p>
              </div>
            
          </React.Fragment>

        )
      })}
        </div>
    </React.Fragment>
  )
}

export default BlogIndex