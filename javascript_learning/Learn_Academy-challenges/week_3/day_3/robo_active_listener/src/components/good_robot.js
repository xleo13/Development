import React, {Component} from 'react';

class GoodRobot extends Component{
  render(){
    return(
      <div>
        <h2> Good Robot</h2>
		<h3>{this.props.words}</h3>
      </div>
    )
  }
}
export default GoodRobot;
