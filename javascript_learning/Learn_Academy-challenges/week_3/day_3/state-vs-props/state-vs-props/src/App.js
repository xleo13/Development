import React, { Component } from 'react';
import './App.css';
import Header from './components/header.js'
import GreetingInput from './components/greetingInput.js'

export default class App extends Component {
	//constructor creates state info and passes super(props) to pass info to pure components
	constructor(props) {
		super(props)
		this.state = {
			greeting: ""
		}
	}

	//function that updates greeting on event change from handleChange() function from greetingInput component
	updateGreeting(greeting){
		this.setState({greeting: greeting})
	}

	//renders anything within this function, fancy word for displays on screen
  render() {
    return (
      <div className="App">

		{/*Header component to be displayed and also greeting attribute access state info*/}
		<Header greeting={this.state.greeting}/>
		{/*GreetingInput to be displayed and also UpdateGreeting attribute calls updateGreeting function and binds it with this state info*/}
		<GreetingInput greeting={this.state.greeting} updateGreeting={this.updateGreeting.bind(this)} />
      </div>
    );
  }
}
