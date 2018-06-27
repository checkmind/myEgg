import React, { Component } from 'react';
import  '../styles/module/child.css'

class Child extends Component {
  render() {
    return (<div>
    			<p>{this.props.username}</p>
    			<ol>
    			{
						React.Children.map(this.props.children,function(child){
							return <li>{child}</li>
						})
				}
				</ol>
			</div>)
  }
}
export default Child