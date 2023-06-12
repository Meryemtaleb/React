import React,{Component} from "react";//La première ligne importe à la fois la bibliothèque React et le module Component de React. La syntaxe { Component } dans l'import signifie que vous importez spécifiquement la classe Component de React
class Welcome extends Component {// vous déclarez une classe appelée "Welcome" qui étend la classe Component de React.
    render() {//la méthode render() retourne un élément <h1> avec le texte "Class Components".
        return(<div><h1> Welcome {this.props.name} Vous avez {this.props.age}</h1>
        <p>{this.props.children}</p>
        </div>) 
    }
}
export default Welcome;