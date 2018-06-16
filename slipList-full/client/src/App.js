import React, { Component } from 'react';

import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import {
	Col,
	Row,
	Grid,
	PageHeader
} from 'react-bootstrap'
import './App.css'
import CarouselTop from './components/Carousel'
import NavbarTop from './components/NavbarTop'
import Newuser from './pages/Newuser'
import Availables from './pages/Availables'
import CreateAvailability from './pages/CreateAvailability'
import GoogleApiWrapper from './components/mapcontainer'
import Footer from './components/footer'
import Login from './components/signin.js'
import Logout from './pages/Logout.js'

var backApi;
if(process.env.NODE_ENV === 'production') {
    backApi = "https://cat-tinder-fun.herokuapp.com";
} else {
    backApi =  "http://localhost:3000";
}

class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			googleAPI: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAPHEKTmg_-2YGuO7CSoQgw-nunhQL7xTM&callback=initMap",
			errors: null,
			user: [],

		availables:[],
	    	newUserSuccess: false,
			newAvailSuccess: false,

			isLoggedIn: false,
			logOutSuccess: false,
			logInSuccess: false
		}
	}


	loggedIn() {
		if(localStorage.getItem('authToken') != null) {
			this.setState({isLoggedIn: true})
		}
	}

	logOut() {
		localStorage.removeItem('authToken')
		this.setState({isLoggedIn: false, logOutSuccess: true})
	}

	componentWillMount() {
		fetch(`${backApi}/availables`)
		.then((raw) => {
			return raw.json();
		})
		.then((parsed) => {
			this.setState({availables: parsed.availables})
		})
		.then(() => {
			if(localStorage.getItem('authToken') != null) {
				this.setState({isLoggedIn: true})
			} else {
				this.setState({isLoggedIn: false})
			}
		})
	}





	getUsers() {
		fetch(`${backApi}/user`)
		.then((raw) => {
			return raw.json()
		})
		.then((res) => {
			this.setState({user: res.user})
		})
	}

	handleNewuser(params){
		fetch(`${backApi}/user`,
		{
			body: JSON.stringify(params),
	     	headers:
				{
					"Content-Type": "application/json"
				},
			method: "POST"
		})
		.then((raw) => {
			return raw.json();
		})
		.then((parsed) => {
			if(parsed.errors) {
				this.setState({errors: parsed.errors})
				console.log(this.state.errors)
			} else{
				const user = Object.assign([], this.state.user);

				user.push(parsed.user)

				localStorage.setItem('authToken', this.state.user[0].authToken)

				this.setState({
					user: user,
					errors: null,
					newUserSuccess: true,
					isLoggedIn: true
				})
			}
		}).catch((e) => {
			console.log("error registering:", e);
		})
	}

	handleNewAvail(params){
		fetch(`${backApi}/availables`,
		{
			body:JSON.stringify(params),
			headers: {
				"Content-Type": "application/json",
					  "Accept": "application/json"
			},
			method: "POST"
		}).then((raw) => {
			return raw.json();
		}).then((parsed) => {
			if(parsed.errors) {
				this.setState({errors: parsed.errors})
				console.log(this.state.errors)
			} else{
				const availables = Object.assign([], this.state.availables);
				availables.push(parsed.available)
				this.setState({
					availables: availables,
					errors: null,
					newAvailSuccess: false,
					isLoggedIn: true
				})
				console.log(this.state.availables)
			}
		}).catch(function() {
                console.log('could not save new user')
            })
	}








	handleExistingUser(params) {
		fetch(`${backApi}/user/signin`,
			{
			body:JSON.stringify(params),
			headers: {
				'Content-Type': 'application/json'
			},
			method: "POST"
		}).then((raw) => {
			return raw.json()
		}).then((res) => {
			if(res.errors){
				console.log("login errors", res.errors);
				this.setState({errors: res.errors})
			} else {
				const user = Object.assign([], this.state.user);
				user.push(res.user)
				this.setState({
					user: user,
					errors: null,
					logInSuccess: true,
					isLoggedIn: true
				})
				console.log(this.state.user)
				localStorage.setItem('authToken', this.state.user[0].authToken)
			}
		}).catch(function() {
			console.log('could not save new user')
		})
	}




	render() {
		return (
			<Router>

				<div>
					<NavbarTop isLoggedIn={this.state.isLoggedIn} />
					<div>
						<Route exact path="/"  className="home" render={props => (
							<Grid>
								<PageHeader >
									<CarouselTop />
								</PageHeader>
								<div className="flex">

									<div className="container-left">
										<h1  className='subtitle2'>
											Sign In
										</h1>
										<Newuser onSubmit={this.handleNewuser.bind(this)}
										errors={this.state.errors && this.state.errors.validations} />
										{this.state.newUserSuccess && <Redirect to="/" /> }
									</div>

									<div className="container-right">
										<h1  className='subtitle'>
											Sign Up
										</h1>
										<Login onSubmit={this.handleExistingUser.bind(this)}
										errors={this.state.errors && (this.state.errors.validations || this.state.errors.serverValidations)} />
									{this.state.logInSuccess && <Redirect to="/availables" /> }

									</div>

								</div>
								<GoogleApiWrapper />
							</Grid>
						)} />

					<Route exact path="/availables" render={props => (
							<div className="avail">
								<Grid>
									<PageHeader>
										<Row>
											<Col xs={8}>
												<br/>
												<small className='subtitle'>Availability Listings for Today: </small>
											</Col>
										</Row>
									</PageHeader>
									<Availables availables={this.state.availables} />
								</Grid>
							</div>
						)} />


					<Route exact path="/availables/new" render={props => {
							if(this.state.newAvailSuccess) {
								return <Redirect to="/availables" />
							}

							return (
								<Grid>
									<PageHeader>
										<Row>
											<br/>
											<Col sm={12}>
												<small className='subtitle'>Please enter your posting information below: </small>
											</Col>
										</Row>
									</PageHeader>
									<CreateAvailability onSubmit={this.handleNewAvail.bind(this) } />
								</Grid>
							)
						}} />

						<Route path="/logout" render={props => (
							<div>
								<Logout
								onSubmit={this.logOut.bind(this)}
								/>
								{this.state.logOutSuccess &&
									<Redirect to="/" />
								}
							</div>
						)} />
					</div>
					<Footer />
				</div>
			</Router>
		);
	}
}
export default App;
