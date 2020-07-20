import React , { Component } from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import './Main.css'
import {SUBJECTS,PHYSICS} from '../shared/subjects';

function Navbar(){
      return (
            <div>
                  <div className="header clearfix">
                        <h1 className="header-primary"><span>Quick</span>study</h1>
                        <h1 className="header-secondary">Learn Smart</h1>
                        <ion-icon name="notifications-circle-outline"></ion-icon>

                  </div>
            </div>

      );
}

function Sidebar(){
      return (
            <div className="sidebar">
                  <NavLink className="nav-link"  to='/subject'>S</NavLink>
                  <NavLink className="nav-link"  to='/test'>T</NavLink>
                  <NavLink className="nav-link"  to='/subject'>P</NavLink>
                  <NavLink className="nav-link"  to='/subject'>B</NavLink>
            </div>

      );
}

function Subject(){
      const subjects=SUBJECTS.map((subject)=>{
            return(
                  <div className="subject col" id={subject.id} key={subject.id}>
                        <h3>{subject.name}</h3>
                  </div>
            );
      });

      const physics=PHYSICS.map((chapter)=>{
            return(
                  <div className="chapter col1">
                        <h3>{chapter}</h3>
                  </div>
            );
      });

      

      return(
            <div className="comp">
                  
                  <img src="./assets/book11.jpg"></img>
                  <h1>Explore by subjects</h1>
                  <div className="row clearfix">
                        {subjects}
                  </div>
                  <div className="row1">
                        <div className="chapters clearfix">
                              {physics}
                        </div>
                  </div>


            </div>
      );
}

function Test(){
      return(
            <div className="comp">
                  <div className="test">
                        <h1>Test</h1>
                  </div>
            </div>
      );
}
class Main extends Component{

      render(){
            return(
                  <div className="main">
                        <Navbar/>
                        <Sidebar/>
                        <Switch>
                              <Route path='/subject' component={()=><Subject/>} />
                              <Route path='/test' component={()=><Test/>}/>
                              <Redirect to="/subject"/>
                        </Switch>    
                       
                  </div>
            );
      }
}
export default Main;