import React, {useState} from 'react';
import './App.scss';
import {BrowserRouter as Router} from "react-router-dom";
import Routes from './core/components/Routes/Routes';
import Loading from "./core/components/Loading/Loading";
import LoadingContext from "./shareds/contexts/LoadingContext";

function App() {
    const [isLoading, setIsLoading] = useState(false);
    return (
        <div className="c-main">
            <Router>
                <LoadingContext.Provider value={{isLoading, setIsLoading}}>
                    <Loading></Loading>
                    <Routes></Routes>
                </LoadingContext.Provider>
            </Router>
        </div>
    );
}

export default App;
