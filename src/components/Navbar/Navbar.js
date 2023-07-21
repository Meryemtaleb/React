import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {


  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
    <div className="container-fluid">
    <img src='img/blog.jpg' width={"60px"} height={"50px"} className='rounded-circle me-4'/>
      <a className="navbar-brand" href="/blog">Myblog</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="/myblog">Nouveau post</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar