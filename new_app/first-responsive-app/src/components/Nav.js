import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import TopSearch from '../components/TopSearch';
import '../App.css';
import '../css/dark.css';
import '../css/font-icons.css';
import '../css/animate.css';
import '../css/magnific-popup.css';
import '../css/responsive.css';
import '../css/bootstrap.css';

export default class Nav extends Component {
    render() {
        return(

            <Router>
                <nav id="primary-menu">
                    <ul>
                        <li>
                            <NavLink to="/index.html">
                                <div>Home</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="../pages/home">
                                <div>Projects</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="#">
                                <div>About Me</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="#">
                                <div>Contacts</div>
                            </NavLink>
                        </li>
                    </ul>
                    <TopSearch />
                </nav>
        </Router>
        );
    }
}
