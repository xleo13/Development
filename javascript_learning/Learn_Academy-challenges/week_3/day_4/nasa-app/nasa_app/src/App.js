import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
	PageHeader,
	Table
} from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props)
    let today = new Date()
    this.state = {
      apiKey: "1kWJY9hoEmEnf0kWw4r1WTgw8nYkOVvvKNxHIhDM",
      startDate:`${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`,
      apiUrl: "https://api.nasa.gov/neo/rest/v1/feed",
      asteroids: []
    }
}


	componentWillMount(){
  fetch(`${this.state.apiUrl}?start_date=${this.state.startDate}&api_key=${this.state.apiKey}`).then((rawResponse)=>{
    // rawResponse.json() returns a promise that we pass along
    return rawResponse.json()
  }).then((parsedResponse) => {

    // when this promise resolves, we can work with our data
    let neoData = parsedResponse.near_earth_objects

    let newAsteroids = []
    Object.keys(neoData).forEach((date)=>{
      neoData[date].forEach((asteroid) =>{
        newAsteroids.push({
          id: asteroid.neo_reference_id,
          name: asteroid.name,
          date: asteroid.close_approach_data[0].close_approach_date,
          diameterMin: asteroid.estimated_diameter.feet.estimated_diameter_min.toFixed(0),
          diameterMax: asteroid.estimated_diameter.feet.estimated_diameter_max.toFixed(0),
          closestApproach: asteroid.close_approach_data[0].miss_distance.miles,
          velocity: parseFloat(asteroid.close_approach_data[0].relative_velocity.miles_per_hour).toFixed(0),
          distance: asteroid.close_approach_data[0].miss_distance.miles
        })
      })
    })

    // state is updated when promises are resolved
    this.setState({asteroids: newAsteroids})
  })
}

  render() {
    return (
      <div className="App">
	  	<div className="container">
		<PageHeader>
		<img src="https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e01462af1cc44210aed3df2e90f35c78&auto=format&fit=crop&w=733&q=80" height="300px" alt="sky with comets"/>
		  Duck, Duck, Meteor!
		  </PageHeader>
		  <hd>
		  Hello Cosmonaut on the Spaceship Earth. Are you concerned about all the Near Earth Objects whizzing past your lonely planet spaceship?
		  think there may be an immenent collision about to happen? Fortunatly, there are hard working scientist at NASA monitoring the skies for just such events,
		  and "we're" going to provide all of that information to right here, right now. This information is real time,
		  so if you see any space rocks that are less than abut 238,900 miles from earth(this distance to the moon) you may want to take cover, or at least wear a helmet.
		  </hd>
		  <h2>List of the closest Meteors to Earth</h2>
	        <Table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Estimated Diameter (feet)</th>
						<th>Date of Closest Approach</th>
						<th>Distance (miles)</th>
						<th>Velocity (miles/hour)</th>
					</tr>
				</thead>
				<tbody>
					{this.state.asteroids.map((asteroid) => {
						return (
							<tr key={asteroid.id}>
								<td>{asteroid.name}</td>
								<td>{asteroid.diameterMin} - {asteroid.diameterMax}</td>
								<td>{asteroid.date}</td>
								<td>{asteroid.distance}</td>
								<td>{asteroid.velocity}</td>
							</tr>
						)
					})}
				</tbody>
			</Table>
		</div>
      </div>
    )
  }
}

export default App;
