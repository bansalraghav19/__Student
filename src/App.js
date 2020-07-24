import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

// import Login from "./components/LoginComponent";
import Profile from './components/ProfileComponent';
// import Main from "./components/MainComponent";
// import Profile from "./components/ProfileComponent";
import Func from './components/FunctionalComponent'
import ClassC from './components/ClassComponent';

function App() {
  return (
    // <BrowserRouter>
    <div className="App">
      <Profile />
    </div>
    // </BrowserRouter>
  );
}

export default App;
