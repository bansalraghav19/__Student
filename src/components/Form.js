import React, { Component } from 'react'
import axios from 'axios'
import TextField from '@material-ui/core/TextField';
import { MenuItem } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

import './form.css';

const useStyles = theme => ({
    formControl: {
        minWidth: '100%',
        marginBottom: '3%',
    }, 
    adjust: {
        position: 'absolute'
    }
})

const list = (data) => {
    return <MenuItem value={data}>{data}</MenuItem>
}

export class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            obj : {
                FullName: 'Raghav Bansal',
                State: 'Punjab',
                City: 'Barnala',
                Board: 'CBSE',
                Class: 6,
                Gender: 'male'
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
        if(name == "State") {
            obj1['City'] = "Select City";
        }
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
        const { classes } = this.props
        const {FullName, State, City, Board, Class, Gender} = this.state.obj
        const {temp} = this.state
        return (
            <div className="head-form">
                <div className="btncls">
                    <Button disabled={!this.state.temp} variant="contained" color="primary" onClick={this.allowEdit}>
                        Edit
                    </Button>
                </div>
                <form>
                    <FormControl className={classes.formControl}>
                        <FormLabel>Full Name</FormLabel>
                        <TextField value={FullName} disabled={this.state.temp} name="FullName" onChange={this.handleChange}></TextField>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <FormLabel className={classes.adjust}>State</FormLabel>
                        <Select name="State" value={State} disabled={this.state.temp} onChange={this.handleChange}>
                            {
                                this.state.states.map((s) => list(s))
                            }
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <FormLabel className={classes.adjust}>City</FormLabel>
                        <Select name="City" value={City} disabled={this.state.temp} onChange={this.handleChange}>
                            {
                                this.state.cities.map((s) => list(s))
                            }
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <FormLabel className={classes.adjust}>Board</FormLabel>
                        <Select name="Board" value={Board} disabled={this.state.temp} onChange={this.handleChange}>
                            {
                                this.state.boards.map((s) => list(s))
                            }
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <FormLabel className={classes.adjust}>Class</FormLabel>
                        <Select name="Class" value={Class} disabled={this.state.temp} onChange={this.handleChange}>
                            {
                                this.state.classes.map((s) => list(s))
                            }
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <FormLabel>Gender</FormLabel>
                        <RadioGroup row name="Gender" value={Gender} onChange={this.handleChange}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" disabled={this.state.temp}/>
                            <FormControlLabel value="male" control={<Radio />} label="Male" disabled={this.state.temp}/>
                            <FormControlLabel value="other" control={<Radio />} label="Other" disabled={this.state.temp}/>
                        </RadioGroup>
                    </FormControl>
                    <FormControl>
                        <Button variant="contained" color="primary" disabled={this.state.temp}>
                            Update Info
                        </Button>
                    </FormControl>
                </form>
            </div>
            
        )
    }
}

export default withStyles(useStyles)(Form)
