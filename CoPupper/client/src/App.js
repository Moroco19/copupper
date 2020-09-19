import React from 'react';
import './App.css';
import { BrowserRouter, Link } from 'react-router-dom';
import Routes from './components/Routes';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Welcome to the CoPupper App!</h1>
        <Link to="/copuppers">CoPuppers</Link>
      </div>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
