import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
        super(props)//il charge le props pour qu'on puisse l'utilisé dans le constructer 

        this.state = {
            isLoggedIn: false
        }
    }
    render() {

        //******condition if else***
        //     if (this.state.isLoggedIn){
        //         return (<div>Welcome Fred </div>    )
        //     }
        //    else{

        //     return(<div>Welcome Sana </div>  )

        //    }

        //****ternaire***** */
        // return this.state.isLoggedIn ? (<div>Welcome Fred </div> ) : (<div>Welcome Sana </div>)


        //***circuit court*****
        // return this.state.isLoggedIn && (<div>Welcome Fred </div>)

        //******Variable intermediaire****** */
        let message
        if (this.state.isLoggedIn)
            message = <div>Welcome Fred </div>
        else
            message = <div>Welcome Sana </div>

            return message
    }
}

export default UserGreeting