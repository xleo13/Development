import React, { Component } from 'react';
import {
  Col,
  Row,
  ControlLabel,
  FormGroup,
  FormControl,
  Alert,
  HelpBlock,
  Button
} from 'react-bootstrap';

export default class NewCat extends Component{
	constructor(props) {
		super(props)
		this.state = {
			form: {
				name: '',
				age: '',
				enjoys: '',
				city: ''
			}
		}
	}


	handleChange(event) {
		const formState = Object.assign({}, this.state.form);
		formState[event.target.name] = event.target.value;
		this.setState({form: formState});
	}

	handleSubmit(){
  		this.props.onSubmit(this.state.form)
}

	errorsFor(attribute) {
		var errorString = '';

		if(this.props.errors) {
			const errors = this.props.errors.filter(error => error.param === attribute)
		if(errors) {
			errorString = errors.map(error => error.msg ).join(", ");
		}
		}
		return errorString === "" ? null : errorString;
	}

	render(){
		return(
			<div id="new-cat-div-wrapper">
				<form id="new-cat-form">

					<Row>
						<Col xs={6}>
							{this.props.errors &&
								<Alert bsStyle="danger">
									Please check the form and try again.
								</Alert>
							}
						</Col>
					</Row>

					<Row>
			        	<Col xs={6}>
							<FormGroup id="name-form-group"
							validationState={this.errorsFor('name') && 'error'}>
								<ControlLabel id="name">Name</ControlLabel>
								<FormControl
									type="text"
									name="name"
									onChange={this.handleChange.bind(this)}
									value={this.state.form.name}
								 />
								 {this.errorsFor('name') &&
							 		<HelpBlock id="name-help-block"> {this.errorsFor('name')}</HelpBlock>
								 }
							</FormGroup>
			        	</Col>
			      	</Row>

					<Row>
			        	<Col xs={6}>
							<FormGroup
								id="age-form-group"
								validationState={this.errorsFor('age') && 'error'}>
								<ControlLabel id="age">Age</ControlLabel>
								<FormControl
									type="number"
									name="age"
									onChange={this.handleChange.bind(this)}
									value={this.state.form.age}
								 />
								 {this.errorsFor('age') &&
								 	<HelpBlock id="age-help-block">{this.errorsFor('age')}</HelpBlock>
							 	 }
							</FormGroup>
			        	</Col>
			      	</Row>

					<Row>
			        	<Col xs={6}>
							<FormGroup
								id="enjoys-form-group"
								validationState={this.errorsFor('enjoys') && 'error'}>
								<ControlLabel id="enjoys">Enjoys</ControlLabel>
								<FormControl
									type="text"
									name="enjoys"
									onChange={this.handleChange.bind(this)}
									value={this.state.form.enjoys}
								 />
								 {this.errorsFor('enjoys') && <HelpBlock id="enjoys-help-block">{this.errorsFor('age')}</HelpBlock>
							 	 }
							</FormGroup>
			        	</Col>
			      	</Row>

					<Row>
			        	<Col xs={6}>
							<FormGroup
								id="city-form-group"
								validationState={this.errorsFor('city') && 'error'}>
								<ControlLabel id="city">City</ControlLabel>
								<FormControl
									type="text"
									name="city"
									onChange={this.handleChange.bind(this)}
									value={this.state.form.city}
								 />
								 {this.errorsFor('city') && <HelpBlock id="city-help-block">{this.errorsFor('city')}</HelpBlock>
							 	 }
							</FormGroup>
			        	</Col>
			      	</Row>

					<Row>
						<Col xs={6}>
						<Button
						bsStyle="primary"
						id="submit"
						color="info"
						size="lg"
						onClick={this.handleSubmit.bind(this)}
						>Create Cat Profile</Button>
						</Col>
					</Row>

				</form>
				<span><img id="cat-image" src="https://images.unsplash.com/photo-1506160484494-d2b1d999debd?ixlib=rb-0.3.5&s=f51b5410e026bae7bac8215e2e5f79aa&auto=format&fit=crop&w=1217&q=80"  alt="pic if cat"/></span>
			</div>
		);
	}
}
