import React, { Component } from 'react';

/*exports component to app.js and also creates new class component*/
export default class GreetingInput extends Component{

	//function to handle event change
	handleChange(e) {
		this.props.updateGreeting(e.target.value)
	}

	render(){
		return(
			<div>
			{/*value attribute gets greeting object from impure or smart component*/}
			{/*onChange attribute handles handleChange function looking for event change*/}
				<input value={this.props.greeting} onChange={this.handleChange.bind(this)}/>
			</div>
		)
	}
}
