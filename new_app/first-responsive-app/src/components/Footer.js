import React, { Component } from 'react';
import LMBD_logo from './logo-image/logo.png'
import '../App.css';
import '../css/dark.css';
import '../css/font-icons.css';
import '../css/animate.css';
import '../css/magnific-popup.css';
import '../css/responsive.css';
import '../css/bootstrap.css';


export default class Footer extends Component {
    render() {
        return(

            <footer id="footer" className="dark">
                <div className="container">

                    <div className="footer-widgets-wrap clearfix">
                        <div className="col_two_third">
                            <div className="col_one_third">
                                <div className="widget clearfix">
                                    <img src={LMBD_logo} alt="LMBD Logo" height="100px" className="footer-logo"/>
                                    <p>
                                        We believe in
                                        <strong>Simple</strong>,
                                        <strong>Creative</strong>
                                        &amp;
                                        <strong>Flexible</strong>
                                        Design Standards.
                                    </p>
                                    <div style={{
                                            background: 'url("images/world-map.png") no-repeat center center',
                                            backgroundSize: '100%'
                                        }}>
                                        <address>
                                            <strong>Headquarters:</strong>
                                            <br/>
                                            9402 Avenida Acero<br/>
                                        Spring Valley, CA 91977<br/>
                                        </address>
                                        <abbr title="Phone Number">
                                            <strong>Phone:</strong>
                                        </abbr>
                                        (619) 240 5058<br/>

                                        <abbr title="Email Address">
                                            <strong>Email:</strong>
                                        </abbr>
                                        LagDevs@gmail.com
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col_one_third col_last">
                            <div className="widget clearfix" style={{
                                    marginBottom: '-20px'
                                }}>
                                <div className="row">

                                    <div className="col-lg-6 bottommargin-sm">
                                        <h5 className="nobottommargin">Clients</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="widget clearfix" style={{
                                    marginBottom: '-20px'
                                }}>
                                <div className="row">
                                    <div className="col-lg-6 clearfix bottommargin-sm">
                                        <a href="#" className="social-icon si-dark si-colored si-facebook nobottommargin" style={{
                                                marginRight: 10
                                            }}>
                                            <i className="icon-facebook"/>
                                        </a>
                                        <a href="#">
                                            <small style={{
                                                    display: 'block',
                                                    marginTop: 3
                                                }}>
                                                <strong>
                                                    Like us
                                                </strong>
                                                <br/>
                                                on Facebook
                                            </small>
                                        </a>
                                    </div>
                                    <div className="col-lg-6 clearfix">
                                        <a href="#" className="social-icon si-dark si-colored si-rss nobottommargin" style={{
                                                marginRight: 10
                                            }}>
                                            <i className="icon-rss"/>
                                        </a>
                                        <a href="#">
                                            <small style={{
                                                    display: 'block',
                                                    marginTop: 3
                                                }}>
                                                <strong>Subscribe</strong>
                                                <br/>
                                                to RSS Feeds
                                            </small>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div id="copyrights">
                    <div className="container clearfix">
                        <div className="col_half">
                            Copyrights © 2018 All Rights Reserved by LagDevelopments<br/>
                        </div>
                        <div className="col_half col_last tright">
                            <div className="fright clearfix">
                                <a href="#" className="social-icon si-small si-borderless si-facebook">
                                    <i className="icon-facebook"/>
                                </a>
                                <a href="#" className="social-icon si-small si-borderless si-twitter">
                                    <i className="icon-twitter"/>
                                </a>
                                <a href="#" className="social-icon si-small si-borderless si-gplus">
                                    <i className="icon-gplus"/>
                                </a>
                                <a href="#" className="social-icon si-small si-borderless si-pinterest">
                                    <i className="icon-pinterest"/>
                                </a>
                                <a href="#" className="social-icon si-small si-borderless si-vimeo">
                                    <i className="icon-vimeo"/>
                                </a>
                                <a href="#" className="social-icon si-small si-borderless si-github">
                                    <i className="icon-github"/>
                                </a>
                                <a href="#" className="social-icon si-small si-borderless si-yahoo">

                                    <i className="icon-yahoo"/>
                                </a>
                                <a href="#" className="social-icon si-small si-borderless si-linkedin">
                                    <i className="icon-linkedin"/>
                                </a>
                            </div>
                            <div className="clear"/>
                            <i className="icon-envelope2"/>
                            LagDevs@gmail.com
                            <span className="middot">·</span>
                            <i className="icon-headphones"/>
                            +1-619-240-5058

                        </div>
                    </div>
                </div>

            </footer>

        );
    }
}
