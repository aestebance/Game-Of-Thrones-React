import React from 'react';
import './App.scss';
import {BrowserRouter as Router } from "react-router-dom";
import Routes from './core/components/Routes/Routes';

function App() {
  return (
      <div className="c-main">
          <Router>
                  <Routes></Routes>
          </Router>
      </div>
  );
}

export default App;
