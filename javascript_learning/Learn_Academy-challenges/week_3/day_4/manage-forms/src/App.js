import React, { Component } from 'react';
import UserDataForm from './components/userDataform';
import UserData from './components/userData';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			userData: {
				name: "",
				description: "",
				pet: "",
				languages: {
					javascript: false,
					python: false
				},
				education: ""
			}
		}
	}

	userDataUpdated(userData) {
		this.setState({userData: userData})
	}

  render() {
    return (
      <div>
	  	<UserDataForm userData={this.state.userData} userDataUpdated={this.userDataUpdated.bind(this)}/>
		<UserData userData={this.state.userData}/>
      </div>
    );
  }
}

export default App;
