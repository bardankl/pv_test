import React from 'react';
import './Footer.css';
import {Link} from "react-router-dom";
const Footer = () => {
    return (

        <footer className="siteFooter">
            <p>® 2016 Dirty Dogs all rights reserved</p>
            <nav className="siteFooterMenu">
                <ul>
                    <li><Link to={'/'}>274 Marconi Blvd. Columbus, Ohio 43215    |   614.538.0095   |</Link></li>
                    <li><Link to={'/contact'}>Contact Us</Link></li>
                </ul>
            </nav>
        </footer>

    )
};

export default Footer;
