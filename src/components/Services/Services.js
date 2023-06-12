import React from 'react'

import { Link,Outlet  } from 'react-router-dom'
function Services() {
  return (
    <React.Fragment>
   
        Services
<nav>
    <Link to='/services/marketing'>
        Marketing
        </Link>
    <Link to='/services/developpement'>
        Developpement
    </Link>
</nav>
<Outlet/>
    </React.Fragment>
  )
}

export default Services