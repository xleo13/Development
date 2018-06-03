import React, { Component } from 'react';

export default class UserData extends Component {
	render() {
		const userData = this.props.userData;
		let languages = [];
		for (var language in userData.languages) {
			languages.push(
				<li key= {language}>{language}: {userData.languages[language] ? "Yes" : "No"} </li>
			)
		}
		return(
			<div>
				<h3>User Data</h3>
				<ul>
					<li>Name:{userData.name}</li>
					<li>Description:{userData.description}</li>
					<li>Pet:{userData.pet}</li>
					<li>Education:{userData.education}</li>
					<li>Languages:
						<ul>{languages}</ul>
					</li>
				</ul>
			</div>
		)
	}
}
