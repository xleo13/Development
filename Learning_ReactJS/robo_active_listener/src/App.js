import React, { Component } from 'react';
import GoodRobot from './good_robot';
import Header from './header';
import BadRobot from './bad_robot';
import Input from './input_field';
import InputHeader from './input_header'
import KanyeBot from './kanyebot_5000'
import Footer from './footer'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      words: ' ',
      blah: 'blah'
    }
  }


  updateWords(words){
    this.setState({words: words})
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
          <Input  updateWords={this.updateWords.bind(this)}/>
        </div>
        <div className="good_robot">
          <GoodRobot />
          <div>
            {this.state.words}
          </div>
        </div>
        <div className="bad_robot">
          <BadRobot />
          <div>
            {this.state.words}
          </div>
        </div>
        <div className="kanye_bot">
          <KanyeBot />
          <div>
            {this.state.words}
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>

    );
  }
}

export default App;
