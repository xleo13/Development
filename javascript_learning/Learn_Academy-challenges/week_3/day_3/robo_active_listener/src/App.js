import React, { Component } from 'react';
import GoodRobot from './components/good_robot';
import Header from './components/header';
import BadRobot from './components/bad_robot';
import Input from './components/input_field';
import InputHeader from './components/input_header'
import KanyeBot from './components/kanyebot_5000'
import Footer from './components/footer'
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      words: " ",
      bla: ["B", "L", "A"],
	  length: " "
    }
  }

  updateLength(e){
	  this.setState({length: this.state.words.length})
  }

  updateWords(e){
    this.setState({words: e})


  }

  render() {

    return (
      <div className="outer_div">
        <div className="header">
          <Header />
        </div>
        <div className="input_header">
          <InputHeader />
        </div>
        <div className="input_field">
          <Input words={this.state.words} updateWords={this.updateWords.bind(this)}/>
        </div>
        <div className="good_robot">
          <GoodRobot words={this.state.words}/>
        </div>
        <div className="bad_robot">
          <BadRobot bla={this.state.words}/>
        </div>
        <div className="kanye_bot">
          <KanyeBot words={this.state.words}/>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>

    );
  }
}
