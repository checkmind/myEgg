import React, { Component } from 'react';


class Child extends Component {
  
  render() {
    return (<div className='header'>{this.props.headText}</div>)
  }
}
export default Child