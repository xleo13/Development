import React, { Component } from 'react';

export default class Nav extends Component {
    render() {
        return(
            <div>
                <ul>
                    <li>
                        <a href="index.html">
                            <div>Home</div>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <div>Features</div>
                        </a>
                    </li>
                    <li className="mega-menu">
                        <a href="">
                            <div>Pages</div>
                        </a>
                    </li>
                    <li className="current mega-menu">
                        <a href="">
                            <div>Portfolio</div>
                        </a>
                    </li>
                    <li className="mega-menu">
                        <a href="">
                            <div>Blog</div>
                        </a>
                    </li>
                    <li>
                        <a href="shop.html">
                            <div>Shop</div>
                        </a>
                    </li>
                    <li className="mega-menu">
                        <a href="">
                            <div>Shortcodes</div>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}
