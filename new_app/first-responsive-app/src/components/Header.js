import React, { Component } from 'react';
import Nav from '../components/Nav'
import '../App.css';
import '../css/dark.css';
import '../css/font-icons.css';
import '../css/animate.css';
import '../css/magnific-popup.css';
import '../css/responsive.css';
import '../css/bootstrap.css';
import LMBD_logo from './logo-image/logo.png'

export default class Header extends Component {
    render() {
        return(
            <header id="header" className="full-header">
                <div className="container clearfix">
                    <div id="primary-menu-trigger">
                        <i className="icon-reorder"/>
                    </div>
                    <div id="logo">
                        <a href="index.html" className="standard-logo" data-dark-logo="images/logo-dark.png">
                            <img src={LMBD_logo} alt="LMBD logo"/>
                        </a>

                    </div>
                    <div>
                        <Nav/>
                    </div>

                </div>
            </header>
        )
    }
}
