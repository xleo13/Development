import React, {Component} from 'react';

export default class BadRobot extends Component{
  render(){

    return(
      <div>
        <h2> Bad Robot</h2>
		<h3 id="bla" >{"BLA".repeat(this.props.bla.length)}</h3>
      </div>
    )
  }
}
