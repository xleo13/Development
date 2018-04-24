import React, { Component } from 'react';

export default class NavBar extends Component {
	render() {

		openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

  	closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}

		return(
			<div id="mySidenav" class="sidenav">
				<span id="nav-icon" style="font-size:40px;cursor:pointer" onClick={openNav()}>&#9776; Nav</span>


	</div>
		)
	}
}
