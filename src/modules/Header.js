import React from 'react';
import {Link} from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className="headerContainer">
                <div className="headerContainerImgWrapper">
                    <img id="headerContainerImg" src={require('../img/header.png')} alt="headerIMG"/>
                </div>
                <img className="headerContainerBlackOut" src={require("../img/Rectangle_8.png")} alt={'image'}/>
                    <div className="headerItemInstagram">
                        <a href="#"><img src={require("../img/Instagram-header.png")} alt="hotdog"/></a>
                        <p><a href="#">#hotdogs</a></p>
                    </div>
            </div>
            <nav id="page-nav" className="headerMenu">

                <label htmlFor="hamburger">&#9776;</label>
                <input type="checkbox" id="hamburger"/>

                <ul>
                    <li><Link to={'/'}>MENU</Link></li>
                    <li><Link to={'/catering'}>CATERING</Link></li>
                    <li><Link to={'about'}>ABOUT US</Link></li>
                    <li><Link to={'/contact'}>CONTACT</Link></li>
                </ul>
            </nav>
        </div> )

};

export default Header;