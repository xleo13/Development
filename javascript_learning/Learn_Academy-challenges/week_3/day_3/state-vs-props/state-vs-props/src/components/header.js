import React, { Component } from 'react';

export default class Header extends Component{
	render(){
		return(
			/*passes greeting object reference to h1 tag*/
			<h1>Hello {this.props.greeting}</h1>
		)
	}
}
