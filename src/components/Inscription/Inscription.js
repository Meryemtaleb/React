import React, { Fragment } from 'react'

function Inscription() {
    return (
    <React.Fragment>
    <h1>Inscription</h1>
 
    <form action="http://localhost:5000/api/signup" method="post">

    <label for="">Username</label>
    <input type="text" name="username" />

    <label for="">email</label>
    <input type="email" name="email" />

    <label for="">password</label>
    <input type="password" name="password" />

    <input type="submit" value="Inscription" />
</form>
</React.Fragment>
  )
}

export default Inscription