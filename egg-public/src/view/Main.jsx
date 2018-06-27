import React, { Component } from 'react';
import {template} from '../mixins/template'

import Myhead from '../Components/Common/header'
import MyFoot from '../Components/Common/footer'
import Mybody from '../Components/Common/bodyer'

import  '../styles/module/main.less'

class App extends Component {
  constructor(props, context){
  	super(props, context)
    
  }
  render() {
    return (
      <div className="App">
        <div className='bodyer'>
            <li>
              <span></span>
              <p>雎鸠</p>
            </li>
            <li>
              <span></span>
              <p>告示</p>
            </li>
            <li>
              <span></span>
              <p>诗经</p>
            </li> 
        </div>
        <MyFoot page='2' unRead={typeof this.props.unRead==='number'?this.props.unRead:''}/>
      </div>
    );
  }
}

export default template({
    component: App
});
