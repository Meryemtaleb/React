import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {


  return (
    <nav>
        <Link to='/'>
            Acceuil
        </Link>
        <Link to='/services'>
           Services
        </Link>
        <Link to='/admin'>
                 Admin
        </Link>
    </nav>
  )
}

export default Navbar