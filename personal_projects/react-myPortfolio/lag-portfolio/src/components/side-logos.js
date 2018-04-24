import React, { Component } from 'react';

export default class SideLogos extends Component {
	render() {
		return(
			<div class="sticky-container">
			<ul class="sticky">
				<li>
					<img src={require("./images/white-facebook-logo.png")} width="32" height="32" />
					<p><a href="" target="">Like Me on<br />Facebook</a></p>
				</li>
				<li>
					<img src={require("./images/white-twitter-logo.png")} width="32" height="32" />
					<p><a href="" target="">Follow Me on<br />Twitter</a></p>
				</li>
				<li>
					<img src={require("./images/white-github-logo.png")} width="32" height="32" />
					<p><a href="" target="">Follow Me on<br />GitHub</a></p>
				</li>
				<li>
					<img src={require("./images/white-linkedin-logo.png")} width="32" height="32" />
					<p><a href="" target="">Follow Me on<br />LinkedIn</a></p>
				</li>
			</ul>
		</div>
		)
	}
}
