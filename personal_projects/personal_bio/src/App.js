import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import Bio from './personal_bio';
import Image from './image';
import List from './list_lived'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header />
        </div>
        <div className="bio">
          <Bio />
        <div className="list">
          <List />
        </div>
        </div>
        <div className="image">
          <Image />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
