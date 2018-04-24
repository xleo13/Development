import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/footer'
import SideLogos from './components/side-logos'
import NavBar from './components/nav-bar'
import ParallaxEffect from './components/parallax-effect'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
		<NavBar />
        </header>
		<ParallaxEffect />
		<SideLogos />
		<Footer />
      </div>
    );
  }
}

export default App;
