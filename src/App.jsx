import React from 'react';
import './App.scss';
import {BrowserRouter as Router } from "react-router-dom";
import {Header} from "./core/components/Header/Header";
import {Menu} from "./core/components/Menu/Menu";
import Routes from './core/components/Routes/Routes';

function App() {
  return (
      <div className="c-main">
          <Router>
              <Header></Header>
              <div className="c-main__container">
                  <Routes></Routes>
              </div>
              <Menu></Menu>
          </Router>
      </div>
  );
}

export default App;
