import React, {Component} from 'react';

class Input extends Component{
  handleChange(e){
    this.props.updateWords(e.target.value)
  }

  render(){
    return(
        <input value={this.props.words} onChange={this.handleChange.bind(this)}/>
    );
  }
}
export default Input;
