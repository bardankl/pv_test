import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './modules/Header';
import ButtonArea from './modules/ButtonArea';
import ContentArea from './modules/ContentArea';
import Footer from './modules/Footer'
import Home from './modules/Home'
import Contacts from './modules/Contacts';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";



//TODO https://github.com/reactjs/react-modal#examples  add moodal thnx page, and styles for form
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
