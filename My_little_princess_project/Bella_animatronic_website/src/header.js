import React, {Component} from 'react';

class Header extends Component{
  render() {
    return(
      <div>
      <h1> Hello {this.props.name}, welcome to my Animatronic list </h1>
      </div>
    )
  }
}
export default Header;
