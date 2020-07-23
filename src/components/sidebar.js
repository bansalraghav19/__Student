import React , { Component } from 'react';
import './sidebar.css';
import home from './SVG/home3.svg';
import books from './SVG/books.svg';
import users from './SVG/users.svg';
import note from './SVG/bell.svg';
import contact from './SVG/address-book.svg';

class Sidebar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="sidebar">
                <div className="wrap">
                    <a href="#" className="btt1">
                        <img src = {home} />
                    </a>
                </div>
                <div className="wrap">
                    <a href="#" className="btt1">
                        <img src = {books} />
                    </a>
                </div>
                <div className="wrap">
                    <a href="#" className="btt1">
                        <img src = {users} />
                    </a>
                </div>
                <div className="wrap">
                    <a href="#" className="btt1">
                        <img src = {note} />
                    </a>
                </div>
                <div className="wrap">
                    <a href="#" className="btt1">
                        <img src = {contact} />
                    </a>
                </div>
            </div>
        );
    }
} 

export default Sidebar;