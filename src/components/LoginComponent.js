import React , { Component } from 'react';
import { Switch, Route, Redirect, NavLink,useHistory} from 'react-router-dom';
import './Login.css';
import {sendotp,verifyotp} from '../shared/http';

function Votp({input}){
    const history=useHistory();

    const myinput = {
        otp:''
    }

    const handlesubmit=(event)=>{
        event.preventDefault();
        alert("data "+myinput.otp.value);
        verifyotp(myinput.otp.value,myinput.otp.value);
        // window.location.href="/signin";
        // history.push("/register");
    }
  
    return(
            <form onSubmit={handlesubmit}>
            <input type="text" id="contactnumber" ref={(input)=>myinput.otp=input} placeholder="OTP" required/>
            <input type="submit" id="submit" placeholder="Verify Otp" required/>
            </form>     
    );
}

function Register({input}){
    const history=useHistory();

    const myinput = {
        fname:'',
        lname:'',
        pass:'',
        email:'',
        state:'',
        city:'',
        grade:'',
        board:''
    }

    const handlesubmit=(event)=>{
        event.preventDefault();
        alert("data "+myinput.fname.value+" "+myinput.lname.value+" "+myinput.pass.value+" "+
        myinput.email.value+" "+myinput.state.value+" "+myinput.city.value+" "+myinput.grade.value+" "+myinput.board.value);
        // window.location.href="/signin";
        // history.push("/signup");
    }
  
    return(
            <form className="register" onSubmit={handlesubmit}>
            <input type="text" id="contactnumber" ref={(input)=>myinput.fname=input} placeholder="First Name" required/>
            <input type="password" id="password" ref={(input)=>myinput.lname=input} placeholder="Last Name" required/>
            <input type="password" id="password" ref={(input)=>myinput.pass=input} placeholder="Password" required/>
            <input type="password" id="password" ref={(input)=>myinput.email=input} placeholder="Email Id" required/>
            <input type="password" id="password" ref={(input)=>myinput.state=input} placeholder="State" required/>
            <input type="password" id="password" ref={(input)=>myinput.city=input} placeholder="City" required/>
            <input type="password" id="password" ref={(input)=>myinput.grade=input} placeholder="Grade" required/>
            <input type="password" id="password" ref={(input)=>myinput.board=input} placeholder="Board" required/>
            <input type="submit" id="submit" placeholder="Register" required/>
            </form>     
    );
}


function SignIn({input}){
    const history=useHistory();
    console.log("hi");

    const myinput = {
        num:'',
        pass:''
    }

    const handlesubmit=(event)=>{
        event.preventDefault();
        alert("data "+myinput.num.value+" "+myinput.pass.value);
        // window.location.href="/signin";
        // history.push("/signup");
    }
  
    return(
            <form onSubmit={handlesubmit}>
            <input type="text" id="contactnumber" ref={(input)=>myinput.num=input} placeholder="Mobile Number" required/>
            <input type="password" id="password" ref={(input)=>myinput.pass=input} placeholder="Enter Password" required/>
            <input type="submit" id="submit" placeholder="Login" required/>
            <NavLink className="nav-link"  to='/signup'>create account</NavLink>
            </form>     
    );
}

function SignUp({input}){
    console.log("hello");
    const history=useHistory();
    const myinput = {
        num:''
    }

    const handlesubmit=(event)=>{
        event.preventDefault();
        alert("data "+myinput.num.value);
        sendotp(myinput.num.value);
        history.push("/verifyotp");
    }

    return(     
        <form onSubmit={handlesubmit}>
            <input type="text" id="contactnumber" ref={(input)=>myinput.num=input} placeholder="Mobile Number" required/>
            <input type="submit" id="submit" required/>
            <NavLink className="nav-link"  to='/signin'>signin</NavLink>
        </form>     
    );
}

class Login extends Component{

    constructor(props){
        super(props);
        this.input = React.createRef();
    }
    
   
    render(){
        return(
            <div className="row clearfix">
                <div className="col1">
                    <h1>Welcome to smplified</h1>
                    <h1>online learning</h1>
                    <img src="./assets/student2.jpg" alt="student"></img>
                </div>
                <div className="col2">
                    <h1><span>Quick</span> Study</h1>
                    <Switch>
                        <Route path='/signin' component={()=><SignIn input={this.input}/>} />
                        <Route path='/signup' component={()=><SignUp input={this.input}/>}/>
                        <Route path='/verifyotp' component={()=><Votp input={this.input}/>}/>
                        <Route path='/register' component={()=><Register input={this.input}/>}/>
                        <Redirect to="/signin"/>
                    </Switch>    
                </div>
            </div>
            
        );
    }
}
export default Login;