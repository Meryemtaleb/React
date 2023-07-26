import React, { useEffect, useReducer } from 'react'
import axios from 'axios'
import { Button } from 'semantic-ui-react';
function BlogIndex() {

  const initialestate = {
    loading: true,
    error: '',
    blogs: []
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
          blogs: [],
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
 
      <img src="https://www.my-blog.fr/wp-content/uploads/2018/05/blog6SLIDER.jpg" className="img-fluid"  alt="Responsive Image"/>
      <h1 className='text-primary fs-1 '>My Blog : actualités et conseils.</h1>
      <div className='row justify-content-evenly mt-4'>
        {state.loading ? 'loading....' : state.blogs.map((blog, index) => {
          return (
            <React.Fragment key={index}>
              <div className="card col-lg-3 col-md-6 col-sm-12 col-xs-12 my-3" >
                <img className="img-fluid" src={`http://localhost:5000/${blog.imagename}`} />
                <h1 className='text-info'>{blog.titre}</h1>
                <h3>{blog.username}</h3>
                <p>{blog.content}</p>
                <div className='d-flex justify-content-evenly'>
                <Button primary as='a' href={`/editblog/${blog._id}`}>Edit</Button>
                <form action={`http://localhost:5000/deleteblog/${blog._id}?_method=DELETE`} method="post">
                  <input type="hidden" name="_method" value="DELETE" />
                  <Button positive>Delete</Button>
                </form></div>
              </div>

            </React.Fragment>

          )
        })}
      </div>
    </React.Fragment>
  )
}

export default BlogIndex