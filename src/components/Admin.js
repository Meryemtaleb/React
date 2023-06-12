import React, { Component } from 'react'

class Admin extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
       admin: true,
      }
    }
  render() {
    //ternaire
    //   return this.state.admin ? <button>Edit</button>  : <p>Veuillez vous Connecter en tant qu'administrateur</p>
    
    //Variable intermidiare 
    let message
      if (this.state.admin)
          message = (<button>Edit</button> )
      else
          message = <p>Veuillez vous Connecter en tant qu'administrateur</p>

          return message
  
  }
}

export default Admin