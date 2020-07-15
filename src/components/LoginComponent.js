import React , { Component } from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import './Login.css';


function SignIn(){
    return(
        
        <form onSubmit={(values)=>this.handlesubmit(values)}>
            <input type="text" id="contactnumber" placeholder="Mobile Number" required/>
            <input type="password" id="password" placeholder="Enter Password" required/>
            <input type="submit" id="submit" placeholder="Login" required/>
            <NavLink className="nav-link"  to='/signup'>create account</NavLink>
        </form>     
    );
}

function SignUp(){
    return(
        
        <form onSubmit={(values)=>this.handlesubmit(values)}>
            <input type="text" id="name" placeholder="Your Name" required/>
            <input type="text" id="contactnumber" placeholder="Mobile Number" required/>
            <input type="password" id="password" placeholder="Enter Password" required/>
            <input type="submit" id="submit" placeholder="Login" required/>
            <NavLink className="nav-link"  to='/signin'>signin</NavLink>
        </form>     
    );
}

class Login extends Component{

    handlesubmit(values){
        console.log(values);
        // event.preventDefault();
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
                        <Route path='/signin' component={()=><SignIn/>} />
                        <Route path='/signup' component={()=><SignUp/>}/>
                        <Redirect to="/signin"/>
                    </Switch>    
                </div>
            </div>
            
        );
    }
}
export default Login;