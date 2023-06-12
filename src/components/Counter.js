import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    decrement() {
        this.setState((prevState) => ({
            count: prevState.count - 1
        }))
        console.log(this.state.count)
    }
    increment() {
        this.setState((prevState) => ({
            count: prevState.count + 1
            // count: this.state.count + 1 //recupere la valeur de counter et ajouter 1.
        }))
        console.log(this.state.count)
    }
    incrementFive() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
    incrementProps() {
        this.setState((prevState) => ({//prevstate :l'etat precedent 
            count: prevState.count + this.props.value
        }))

    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={() => this.increment()}>+1</button>
                <button onClick={() => this.incrementFive()}>+5</button>
                <button onClick={() => this.decrement()}>-1</button>
                <button onClick={() => this.incrementProps()}>+{this.props.value}</button>

            </div>
        )
    }
}

export default Counter
