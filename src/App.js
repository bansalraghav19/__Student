import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

// import Login from "./components/LoginComponent";
import Profile from './components/ProfileComponent';
// import Main from "./components/MainComponent";
// import Profile from "./components/ProfileComponent";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* <Login/> */}
      <Profile />
    </div>
    </BrowserRouter>
  );
}

export default App;
