import React, { Component } from 'react';
import './styles/newsletter.css';

class Newsletter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        nom : '',
        prenom: '',
        email: ''
      }
    }
      //activer le saisie dans les inputs
      handleNomChange = event   =>{
        console.log(event.target);
          if(event.target.value.length < 3){
            event.target.className ="rouge"
          }else{
              event.target.className ="vert"
          }
        this.setState({ nom: event.target.value})
    }
    handlePrenomChange = event   =>{
        this.setState({ prenom: event.target.value})
    }
    handleEmailChange = event   =>{
        this.setState({ email: event.target.value})
    }
    //submit
    handleSubmit = event =>{
        alert(`Merci,${this.state.nom} ${this.state.prenom} d'avoir pris contact avec nous.Nous reviendrons vers vous à cet email : ${this.state.email}`)
        event.preventDefault()
    }
  render() {
    const { nom, prenom, email } = this.state;
    return (
        <form onSubmit={this.handleSubmit}>
        <div>
            <label>Nom </label>
            <input
                type="text"
                value={nom}
                onChange={this.handleNomChange}
                

            />
        </div>
        <div>
            <label>Prénom</label>
            <input
                type="text"
                value={prenom}
                onChange={this.handlePrenomChange}

            />
        </div>
        <div>
            <label>Email</label>
            <input
                type="email"
                value={email}
                onChange={this.handleEmailChange}

            />
        </div>
        <button type="submit">Valider</button>
    </form>
    )
  }
}

export default Newsletter