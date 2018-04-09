import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import neoData from './sample-neo';

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			rawData: neoData,
			asteroids: {}
		}
	}

	ComponentWillMount() {
		let neoData = this.state.rawData.near_earth_objects;
		let newAsteroids = [];

		Object.keys(neoData).forEach((date) => {
			neoData[date].forEach((asteroid) => {
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
		this.setState({asteroids: newAsteroids})
	}

  render() {
    return (
      <div className="App">
        <table>
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
		</table>
      </div>
    );
  }
}

export default App;
