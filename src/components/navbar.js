import React , { Component } from 'react';
import './navbar.css';

class Navbar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="navbar">
                <div className="HeadPart">
                    <div className="app-description">
                        <div className="app-logo"><img  src='./assets/logo.png'/></div>
                        <div className="sep">|</div>
                        <div className="page-name">PROFILE PAGE</div>
                    </div>
                    <div className="buttons">
                        <div>
                            <a class="b1" href="#">Sign In</a>
                        </div>
                        <div>
                            <a class="b1" href="#">Sign Up</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
} 

export default Navbar;
