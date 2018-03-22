import React, { Component } from 'react';
import './App.css';
import Header from './header.js'
import Content from './content'
import Freddy from './freddy'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      heroeNames: [
        {name: 'Shadow Bonnie'},
        {name: 'Shadow Chica'},
        {name: 'Freddy'},
        {name: 'Foxy'},
        {name: 'Bonnie'},
        {name: 'Chica'},
        {name: 'Golden Freddy'},
        {name: 'puppet'},
        {name: 'Shadow Freddy'},
        {name: 'Shadow Foxy'}
      ]
    }
  }

  render() {
    return (
      <div className="App">
      <div>
      <Header name="nkn!!!" />
      <div className="freddy">
      <Freddy />
      </div>
      <Content heroeNames= {this.state.heroeNames}/>
      </div>
      </div>
    );
  }
}

export default App;
