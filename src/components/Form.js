import React, { Component } from 'react'
import axios from 'axios'


const list = (data) => {
    return <option>{data}</option>
} 
export class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            obj : {
                FullName: '',
                State: 'Punjab',
                City: null,
                Board: null,
                Class: null,
                Gender: null
            },
            temp: true,
            states: [],
            cities: [],
            boards: ['HP Board', 'CBSE'],
            classes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.allowEdit = this.allowEdit.bind(this)
    }
    
    componentDidMount() {
        axios.get('https://raw.githubusercontent.com/bhanuc/indian-list/master/state-city.json').then((res) => {
            this.setState({
                states: Object.keys(res.data),
                cities: res.data[this.state.obj.State]
            })
        })
    }
    handleSubmit(event) {
        event.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state.obj).then(
            (res) => {
                console.log(res)
            }
        ).catch((e) => {
            console.log(e)
        })
    }
    handleChange(event) {
        const name = event.target.name
        const val = event.target.value
        let temp
        if(name == "State")
        {
            axios.get('https://raw.githubusercontent.com/bhanuc/indian-list/master/state-city.json').then((res) => {
                this.setState({
                    cities: res.data[val]
                })
            })
        }
        let obj1 = this.state.obj
        obj1[name] = val
        this.setState({
            obj: obj1
        })
    }
    allowEdit(event) {
        this.setState({
            temp: !this.state.temp
        })
    }
    render() {
        const {FullName, State, City, Board, Class, Gender} = this.state.obj
        const {temp} = this.state
        return (
            <div>
                <button onClick={this.allowEdit}>Edit</button>
                <form onSubmit={this.handleSubmit}>
                    <label>Full Name</label>
                    <input type="text" value={FullName} name="FullName" onChange={this.handleChange} disabled={temp}></input>
                    <label>State</label>
                    <select value={State} name="State" onChange={this.handleChange} disabled={temp}>
                        {
                            this.state.states.map((s) => list(s))
                        }
                    </select>
                    <label>City</label>
                    <select value={City} name="City" onChange={this.handleChange} disabled={temp}>
                        {
                            this.state.cities.map((s) => list(s))
                        }
                    </select>
                    <label>Board</label>
                    <select value={Board} name="Board" onChange={this.handleChange} disabled={temp}>
                        {
                            this.state.boards.map((s) => list(s))
                        }
                    </select>
                    <label>Class</label>
                    <select value={Class} name="Class" onChange={this.handleChange} disabled={temp}>
                        {
                            this.state.classes.map((s) => list(s))
                        }
                    </select>
                    <label>Gender</label>
                    <label>Male</label>
                    <input type="radio" name="gender" disabled={temp}></input>
                    <label>Female</label>
                    <input type="radio" name="gender" disabled={temp}></input>
                    <label>Other</label>
                    <input type="radio" name="gender" disabled={temp}></input>
                    <input type="submit" disabled={temp}></input>
                </form>
            </div>
            
        )
    }
}

export default Form
