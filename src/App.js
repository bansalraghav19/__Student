import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Login from "./components/LoginComponent";
// import Main from "./components/MainComponent";
// import Profile from "./components/ProfileComponent";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Login/>
    </div>
    </BrowserRouter>
  );
}

export default App;
