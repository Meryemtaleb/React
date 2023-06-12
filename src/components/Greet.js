import React from "react";//est nécessaire pour pouvoir utiliser les fonctionnalités de React, notamment la création de composants.
// function Greet() {
//     return <h1>Hello Fréd !!</h1>
// }

// const Greet =(props)=>{
//     console.log(props.name);
//     return (
//         <div> <h1>Hello {props.name} vous avez {props.age}. </h1>
//         <p>{props.children}</p></div>

//     )
// }
//Methode 2 :Pour eviter d'ecrire props.à chaque fois
const Greet =({name,age,children})=>{
    
    return (
        <div> <h1>Hello {name} vous avez {age}. </h1>
        <p>{children}</p></div>

    )
}

export default Greet;//le  composant "Greet" est exporté à l'aide de export default Greet;, ce qui permet à d'autres fichiers de l'importer et de l'utiliser