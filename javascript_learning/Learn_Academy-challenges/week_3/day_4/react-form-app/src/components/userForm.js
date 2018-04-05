import React, { Component } from 'react';

export default class UserForm extends Component{
	constructor(props){
		super(props)
		this.state = {
			name: ''
		}
	}

	handleChange(event) {
		const target = event.target;
		const attribute = target.name;
		const value = target.type === "checkbox" ? target.checked : target.value;
		this.setState({[attribute]: value}, ()=> {
			console.log(this.state);
		})
	}

	submitForm(event){
		this.props.onSubmit(this.state);
		event.preventDefault();
	}

	render() {
		return(
			<form onSubmit={this.submitForm.bind(this)}>

				<div className="form-group">
					<label className="control-label">
						Username
					</label>
					<input className="form-control"
					name="firstName"
					type="text"
					value={this.state.firstName}
					onChange={this.handleChange.bind(this)}
					/>
				</div>

				<div className="form-group">
					<label className="control-label">
						Email
					</label>
					<textarea className="form-control"
					name="email"
					value={this.state.email}
					onChange={this.handleChange.bind(this)}
					/>
				</div>
				<div className="form-group">
					<label className="control-label">Favorite Color</label>
					<select
						name="favoriteColor"
						className="form-control"
						value={this.state.favoriteColor}
						onChange={this.handleChange.bind(this)}
						>

						<option value="blue">Blue</option>
						<option value="Red">Red</option>
					</select>
				</div>

				<div className="form-group">
					<label> Favorite Fruit </label>

					<div className="radio">
						<label>
							<input
							type="radio"
							name="favoriteFruit"
							value="Cherries"
							checked={this.state.favoriteFruit === "Cherries"}
							onChange={this.handleChange.bind(this)}
							/>
							Cherries
						</label>
					</div>

					<div className="radio">
						<label>
							<input
							type="radio"
							name="favoriteFruit"
							value="Apples"
							checked={this.state.favoriteFruit === "Apples"}
							onChange={this.handleChange.bind(this)}
							/>
							Apples
						</label>
					</div>


						<label>
							<input
							name="likesJavascript"
							type="checkbox"
							checked={this.state.likesJavascript}
							onChange={this.handleChange.bind(this)}
							/>
							Do you like JavaScript?
						</label>


				</div>

				<input type="submit" value="Submit" />

			</form>
		)
	}
}
