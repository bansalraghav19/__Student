import React, { Component } from 'react'
import axios from 'axios'

class ClassComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Username: '',
             Password: ''
        }
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleSumbit = this.handleSumbit.bind(this)
    }
    
    handleUsernameChange(event) {
        this.setState({
            Username: event.target.value
        })
    }
    handlePasswordChange(event) {
        this.setState({
            Password: event.target.value
        })
    }
    handleSumbit(event) {
        event.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state).then(
            console.log("Data recieved")
        ).catch((e) => {
            console.log(e)
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSumbit}>
                <label>Username</label>
                <input type="text" value={this.state.Username} onChange={this.handleUsernameChange}></input>
                <label>Password</label>
                <input type="text" value={this.state.Password} onChange={this.handlePasswordChange}></input>
                <input type="submit"></input>
            </form>
        )
    }
}

export default ClassComponent
