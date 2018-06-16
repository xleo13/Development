import React, {Component} from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Content from './components/Content'
import Header from  './components/Header'
import PageTitle from  './components/PageTitle'
import './App.css';
import './css/dark.css';
import './css/font-icons.css';
import './css/animate.css';
import './css/magnific-popup.css';
import './css/responsive.css';
import './css/bootstrap.css';




export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <br />
                <PageTitle />
                <br />
                <Content />
                <Footer />
                <div id="gotoTop" className="icon-angle-up"> </div>
            </div>
        );
    }
}
