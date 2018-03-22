import React, { Component } from 'react';

class Recipes extends Component{


	render(){
		let recipeToMap = this.props.recipes.map(function(recipe) {
			return(
				<li key={recipe.name}>{recipe.name}</li>
			)
		})

		return(
			<ul>
				{recipeToMap}
			</ul>
		)
	}
}
export default Recipes
