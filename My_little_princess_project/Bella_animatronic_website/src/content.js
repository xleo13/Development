import React, { Component } from 'react';

class Content extends Component{
  render() {
    let names = this.props.heroeNames.map(function(n){
      return(
        <li key= {n.name}>{n.name}</li>
      )
    })
    return(
      <ul>
      {names}
      </ul>
    );
  }
}
export default Content;
