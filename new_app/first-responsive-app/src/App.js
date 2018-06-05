import React, { Component } from 'react';
import Nav from './components/Nav.js';
import './App.css';
import './css/style.css';


export default class App extends Component {
    render() {
        return (
            <div id="wrapper" className="clearfix">
                <header id="header" className="full-header">
                    <div className="container clearfix">
                        <div id="primary-menu-trigger">
                            <i className="icon-reorder" />
                        </div>
                        <div id="logo">
                            <a
                                href="index.html"
                                className="standard-logo"
                                data-dark-logo="images/logo-dark.png">
                                <img src="images/logo.png" alt="Canvas Logo" />
                            </a>
                            <a
                                href="index.html"
                                className="retina-logo"
                                data-dark-logo="images/logo-dark@2x.png">
                                <img src="images/logo@2x.png" alt="Canvas Logo" />
                            </a>
                        </div>
                        <div>
                            <Nav />
                        </div>

                    </div>
                </header>
                <div>
        <section id="page-title">
          <div className="container clearfix">
            <h1>
Portfolio - Parallax
</h1>
            <span>
Showcase of Our Awesome Works in Parallax Mode
</span>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
<a href="#">Home</a>
</li>
              <li
className="breadcrumb-item active"
aria-current="page">Portfolio</li>
            </ol>
          </div>
        </section>
{/* #page-title end */}
        {/* Content
        		============================================= */}
        <section id="content">
          <div className="content-wrap nopadding">
            <div id="portfolio" className="portfolio portfolio-parallax clearfix">
              <article className="portfolio-item pf-media pf-icons">
                <div
                    className="portfolio-image" id="portfolio-bg1"
                    data-bottom-top="background-position:0px 300px;"
                    data-top-bottom="background-position:0px -300px;">
                    <div className="portfolio-overlay" />
                    </div>
                <div className="portfolio-desc">
                  <h3>
<a href="portfolio-single.html">
Open Imagination
</a>
</h3>
                  <span>
<a href="#">Media</a>
, <a href="#">Icons</a>
</span>
                  <div className="portfolio-divider">
<div />
</div>
                </div>
              </article>
              <article className="portfolio-item pf-media pf-icons">
                <div
className="portfolio-image" id="portfolio-bg2"
data-bottom-top="background-position:0px 300px;"
data-top-bottom="background-position:0px -300px;">
<div className="portfolio-overlay" />
</div>
                <div className="portfolio-desc">
                  <h3>
<a href="portfolio-single.html">
Locked Steel Gate
</a>
</h3>
                  <span>
<a href="#">Illustrations</a>
</span>
                  <div className="portfolio-divider">
<div />
</div>
                </div>
              </article>
              <article className="portfolio-item pf-media pf-icons">
                <div
className="portfolio-image" id="portfolio-bg3"
data-bottom-top="background-position:0px 300px;"
data-top-bottom="background-position:0px -300px;">
<div className="portfolio-overlay" />
</div>
                <div className="portfolio-desc">
                  <h3>
<a href="portfolio-single-video.html">
Mac Sunglasses
</a>
</h3>
                  <span>
<a href="#">Graphics</a>
, <a href="#">
UI Elements
</a>
</span>
                  <div className="portfolio-divider">
<div />
</div>
                </div>
              </article>
              <article className="portfolio-item pf-media pf-icons">
                <div
className="portfolio-image" id="portfolio-bg4"
data-bottom-top="background-position:0px 300px;"
data-top-bottom="background-position:0px -300px;">
<div className="portfolio-overlay" />
</div>
                <div className="portfolio-desc">
                  <h3>
<a href="portfolio-single-gallery.html">
Morning Dew
</a>
</h3>
                  <span>
<a href="#" />
<a href="#">Icons</a>
, <a href="#">Illustrations</a>
</span>
                  <div className="portfolio-divider">
<div />
</div>
                </div>
              </article>
              <article className="portfolio-item pf-media pf-icons">
                <div
className="portfolio-image" id="portfolio-bg5"
data-bottom-top="background-position:0px 300px;"
data-top-bottom="background-position:0px -300px;">
<div className="portfolio-overlay" />
</div>
                <div className="portfolio-desc">
                  <h3>
<a href="portfolio-single.html">
Bridge Side
</a>
</h3>
                  <span>
<a href="#">Illustrations</a>
, <a href="#">Icons</a>
</span>
                  <div className="portfolio-divider">
<div />
</div>
                </div>
              </article>
              <article className="portfolio-item pf-media pf-icons">
                <div
className="portfolio-image" id="portfolio-bg6"
data-bottom-top="background-position:0px 300px;"
data-top-bottom="background-position:0px -300px;">
<div className="portfolio-overlay" />
</div>
                <div className="portfolio-desc">
                  <h3>
<a href="portfolio-single-gallery.html">
Shake It!
</a>
</h3>
                  <span>
<a href="#">Illustrations</a>
, <a href="#">Graphics</a>
</span>
                  <div className="portfolio-divider">
<div />
</div>
                </div>
              </article>
              <article className="portfolio-item pf-media pf-icons">
                <div
className="portfolio-image" id="portfolio-bg7"
data-bottom-top="background-position:0px 300px;"
data-top-bottom="background-position:0px -300px;">
<div className="portfolio-overlay" />
</div>
                <div className="portfolio-desc">
                  <h3>
<a href="portfolio-single-video.html">
Backpack Contents
</a>
</h3>
                  <span>
<a href="#">
UI Elements
</a>
, <a href="#">Icons</a>
</span>
                  <div className="portfolio-divider">
<div />
</div>
                </div>
              </article>
              <article className="portfolio-item pf-media pf-icons">
                <div
className="portfolio-image" id="portfolio-bg8"
data-bottom-top="background-position:0px 300px;"
data-top-bottom="background-position:0px -300px;">
<div className="portfolio-overlay" />
</div>
                <div className="portfolio-desc">
                  <h3>
<a href="portfolio-single-video.html">
Study Table
</a>
</h3>
                  <span>
<a href="#">Graphics</a>
, <a href="#">Media</a>
</span>
                  <div className="portfolio-divider">
<div />
</div>
                </div>
              </article>
            </div>
          </div>
        </section>
{/* #content end */}
        {/* Footer
        		============================================= */}
        <footer id="footer" className="dark">
          <div className="container">
            {/* Footer Widgets
        				============================================= */}
            <div className="footer-widgets-wrap clearfix">
              <div className="col_two_third">
                <div className="col_one_third">
                  <div className="widget clearfix">
                    <img
src="images/footer-widget-logo.png"
alt
className="footer-logo" />
                    <p>
We believe in <strong>Simple</strong>, <strong>Creative</strong> &amp; <strong>Flexible</strong> Design Standards.
</p>
                    <div style={{background: 'url("images/world-map.png") no-repeat center center', backgroundSize: '100%'}}>
                      <address>
                        <strong>Headquarters:</strong>
<br />
                        795 Folsom Ave, Suite 600<br />
                        San Francisco, CA 94107<br />
                      </address>
                      <abbr title="Phone Number">
<strong>Phone:</strong>
</abbr> (91) 8547 632521<br />
                      <abbr title="Fax">
<strong>Fax:</strong>
</abbr> (91) 11 4752 1433<br />
                      <abbr title="Email Address">
<strong>Email:</strong>
</abbr> info@canvas.com
                    </div>
                  </div>
                </div>
                <div className="col_one_third">
                  <div className="widget widget_links clearfix">
                    <h4>Blogroll</h4>
                    <ul>
                      <li>
<a href="http://codex.wordpress.org/">Documentation</a>
</li>
                      <li>
<a href="http://wordpress.org/support/forum/requests-and-feedback">Feedback</a>
</li>
                      <li>
<a href="http://wordpress.org/extend/plugins/">Plugins</a>
</li>
                      <li>
<a href="http://wordpress.org/support/">
Support Forums
</a>
</li>
                      <li>
<a href="http://wordpress.org/extend/themes/">Themes</a>
</li>
                      <li>
<a href="http://wordpress.org/news/">
WordPress Blog
</a>
</li>
                      <li>
<a href="http://planet.wordpress.org/">
WordPress Planet
</a>
</li>
                    </ul>
                  </div>
                </div>
                <div className="col_one_third col_last">
                  <div className="widget clearfix">
                    <h4>
Recent Posts
</h4>
                    <div id="post-list-footer">
                      <div className="spost clearfix">
                        <div className="entry-c">
                          <div className="entry-title">
                            <h4>
<a href="#">
Lorem ipsum dolor sit amet, consectetur
</a>
</h4>
                          </div>
                          <ul className="entry-meta">
                            <li>
10th July 2014
</li>
                          </ul>
                        </div>
                      </div>
                      <div className="spost clearfix">
                        <div className="entry-c">
                          <div className="entry-title">
                            <h4>
<a href="#">
Elit Assumenda vel amet dolorum quasi
</a>
</h4>
                          </div>
                          <ul className="entry-meta">
                            <li>
10th July 2014
</li>
                          </ul>
                        </div>
                      </div>
                      <div className="spost clearfix">
                        <div className="entry-c">
                          <div className="entry-title">
                            <h4>
<a href="#">
Debitis nihil placeat, illum est nisi
</a>
</h4>
                          </div>
                          <ul className="entry-meta">
                            <li>
10th July 2014
</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col_one_third col_last">
                <div
className="widget clearfix"
style={{marginBottom: '-20px'}}>
                  <div className="row">
                    <div className="col-lg-6 bottommargin-sm">
                      <div className="counter counter-small">
<span
data-from={50}
data-to={15065421}
data-refresh-interval={80}
data-speed={3000}
data-comma="true" />
</div>
                      <h5 className="nobottommargin">
Total Downloads
</h5>
                    </div>
                    <div className="col-lg-6 bottommargin-sm">
                      <div className="counter counter-small">
<span
data-from={100}
data-to={18465}
data-refresh-interval={50}
data-speed={2000}
data-comma="true" />
</div>
                      <h5 className="nobottommargin">Clients</h5>
                    </div>
                  </div>
                </div>
                <div className="widget subscribe-widget clearfix">
                  <h5>
<strong>Subscribe</strong> to Our Newsletter to get Important News, Amazing Offers &amp; Inside Scoops:
</h5>
                  <div className="widget-subscribe-form-result" />
                  <form
id="widget-subscribe-form"
action="include/subscribe.php"
role="form"
method="post"
className="nobottommargin">
                    <div className="input-group divcenter">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
<i className="icon-email2" />
</div>
                      </div>
                      <input
type="email"
id="widget-subscribe-form-email"
name="widget-subscribe-form-email"
className="form-control required email"
placeholder="Enter your Email" />
                      <div className="input-group-append">
                        <button className="btn btn-success" type="submit">Subscribe</button>
                      </div>
                    </div>
                  </form>
                </div>
                <div
className="widget clearfix"
style={{marginBottom: '-20px'}}>
                  <div className="row">
                    <div className="col-lg-6 clearfix bottommargin-sm">
                      <a
href="#"
className="social-icon si-dark si-colored si-facebook nobottommargin"
style={{marginRight: 10}}>
                        <i className="icon-facebook" />
                        <i className="icon-facebook" />
                      </a>
                      <a href="#">
<small style={{display: 'block', marginTop: 3}}>
<strong>
Like us
</strong>
<br />
on Facebook
</small>
</a>
                    </div>
                    <div className="col-lg-6 clearfix">
                      <a
href="#"
className="social-icon si-dark si-colored si-rss nobottommargin"
style={{marginRight: 10}}>
                        <i className="icon-rss" />
                        <i className="icon-rss" />
                      </a>
                      <a href="#">
<small style={{display: 'block', marginTop: 3}}>
<strong>Subscribe</strong>
<br />
to RSS Feeds
</small>
</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
{/* .footer-widgets-wrap end */}
          </div>
          {/* Copyrights
        			============================================= */}
          <div id="copyrights">
            <div className="container clearfix">
              <div className="col_half">
                Copyrights © 2014 All Rights Reserved by Canvas Inc.<br />
                <div className="copyright-links">
<a href="#">
Terms of Use
</a> / <a href="#">
Privacy Policy
</a>
</div>
              </div>
              <div className="col_half col_last tright">
                <div className="fright clearfix">
                  <a
href="#"
className="social-icon si-small si-borderless si-facebook">
                    <i className="icon-facebook" />
                    <i className="icon-facebook" />
                  </a>
                  <a
href="#"
className="social-icon si-small si-borderless si-twitter">
                    <i className="icon-twitter" />
                    <i className="icon-twitter" />
                  </a>
                  <a
href="#"
className="social-icon si-small si-borderless si-gplus">
                    <i className="icon-gplus" />
                    <i className="icon-gplus" />
                  </a>
                  <a
href="#"
className="social-icon si-small si-borderless si-pinterest">
                    <i className="icon-pinterest" />
                    <i className="icon-pinterest" />
                  </a>
                  <a
href="#"
className="social-icon si-small si-borderless si-vimeo">
                    <i className="icon-vimeo" />
                    <i className="icon-vimeo" />
                  </a>
                  <a
href="#"
className="social-icon si-small si-borderless si-github">
                    <i className="icon-github" />
                    <i className="icon-github" />
                  </a>
                  <a
href="#"
className="social-icon si-small si-borderless si-yahoo">
                    <i className="icon-yahoo" />
                    <i className="icon-yahoo" />
                  </a>
                  <a
href="#"
className="social-icon si-small si-borderless si-linkedin">
                    <i className="icon-linkedin" />
                    <i className="icon-linkedin" />
                  </a>
                </div>
                <div className="clear" />
                <i className="icon-envelope2" /> info@canvas.com <span className="middot">·</span> <i className="icon-headphones" /> +91-11-6541-6369 <span className="middot">·</span> <i className="icon-skype2" /> CanvasOnSkype
              </div>
            </div>
          </div>
{/* #copyrights end */}
        </footer>
{/* #footer end */}
        {/* #wrapper end */}
        {/* Go To Top
        	============================================= */}
        <div id="gotoTop" className="icon-angle-up" />
      </div>

            </div>

        );
    }
}
