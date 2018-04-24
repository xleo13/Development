import React, { Component } from 'react';

export default class ParallaxEffect extends Component {
	render() {
		return(
			<div>
			<div className="bgimg-1" >
			<div className="caption" id="w3-container">
				<span className="border" id="w3-center w3-animate-top">Hello my name is <br /> Luis Gutierrez <br />this is my journey</span>

			</div>
		</div>

		<div className="WordHeader">
			<h3>My Passion</h3>
		</div>

		<div className="bgimg-2">
			<div className="caption">
				<span className="border"> Is Coding</span>
			</div>

		</div>


			<div className="WordHeader">
				<h3>My Love</h3>
			</div>


		<div className="bgimg-3">
			<div className="caption">
				<span className="border">Is My Family</span>
			</div>
		</div>


			<div className="WordHeader">
				<h3 >My favorite quote</h3>
			</div>


		<div className="bgimg-1">
			<div className="caption">
				<span className="border"><small>by</small> Steve Jobs <br /><strong>'The only way todo great work is to love what you do!'</strong></span>
			</div>
		</div>
		</div>
		)
	}
}
