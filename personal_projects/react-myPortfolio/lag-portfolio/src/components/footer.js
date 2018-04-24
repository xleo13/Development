import React, { Component } from 'react';

export default class Footer extends Component {
	render() {
		return(
			<div class="footer">
				<footer>
					<h6><img src={require('./images/logo.png')} alt="pic of logo" height="30px" width="30px"/>LAG Web Developments</h6>
				</footer>
			</div>
		)
	}
}
