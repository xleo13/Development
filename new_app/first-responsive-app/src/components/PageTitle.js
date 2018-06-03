import React, { Component } from 'react';

export default class PageTitle extends Component {
    render() {
        return(
            <div>
                <h1>Portfolio - Parallax</h1>
                <span>Showcase of Our Awesome Works in Parallax Mode</span>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Portfolio</li>
                </ol>
            </div>
        );
    }
}
