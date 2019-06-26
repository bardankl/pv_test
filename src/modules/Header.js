import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './Header.css';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: true,
        };
        this.toggleMenu = this.toggleMenu.bind(this)
    };


    componentWillMount() {
        this.toggleMenu();
    }

//todo open close menu by click out and at link...


    toggleMenu() {
        // this.setState({isOpen: !this.state.isOpen});
        console.log(` it doesn't works !!!^( ....${this.state.isOpen}`)

        // let screenWidth = document.body.clientWidth;
        // if(screenWidth<=768) {
        //     this.setState({isOpen: !this.state.isOpen});
        //     console.log(`work`)
        // }else{
        //     console.log(`not`)
        // }
    };

    render() {
        return (
            <div id='containerHeader'>
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
                <nav  id="page-nav" className="headerMenu">

                    <label onClick={this.toggleMenu} htmlFor="hamburger">&#9776;</label>
                    <input type="checkbox" id="hamburger"/>

                            <ul className={!this.state.isOpen ? "hide" : "visible"}>
                                <li onClick={this.toggleMenu}><Link to={'/'}>MENU</Link></li>
                                <li ><Link to={'/'}>CATERING</Link></li>
                                <li ><Link to={''}>ABOUT US</Link></li>
                                <li ><Link to={'/contact'}>CONTACT</Link></li>
                            </ul>
                </nav>
            </div>)
    }

};

export default Header;
