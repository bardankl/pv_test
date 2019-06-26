import React from 'react';
import './App.css';
import Header from './modules/Header';
import Footer from './modules/Footer'
import Home from './modules/Home'
import Contacts from './modules/Contacts';
import {Route, Switch} from "react-router-dom";

function App() {
    return (
        <div className="App">

            <Header/>
            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route path={'/contact'} component={Contacts}/>
            </Switch>
            <Footer/>
        </div>
    );
}

export default App;
