import React, { Component } from 'react';
import '../css/style.css';

export default class Logo extends Component {
    render() {
        return(
            <div id="logo">
                <a href="index.html" className="standard-logo" data-dark-logo={'./images/logo.png'}>
                    <span>
                        <img src={'images/logo.png'} alt="LAG Developments Logo"/>
                    </span>
                </a>
            </div>
        );
    }
}
