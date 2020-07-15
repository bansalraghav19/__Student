import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Login from "./components/LoginComponent";

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
