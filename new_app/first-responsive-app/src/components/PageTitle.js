import React, { Component } from 'react';
import '../App.css';
import '../css/dark.css';
import '../css/font-icons.css';
import '../css/animate.css';
import '../css/magnific-popup.css';
import '../css/responsive.css';
import '../css/bootstrap.css';

export default class PageTitle extends Component {
    render() {
        return(
            <section id="page-title">
                <div className="container clearfix">
                    <h1>
                        Projects in Parallax
                    </h1>
                    <span>
                        Showcase of My Awesome Projects in Parallax Mode
                    </span>
                </div>
            </section>
        );
    }
}
