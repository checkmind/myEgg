import React, { Component } from 'react';
import { template } from '../mixins/template'
import UserName from '~/Common/userName.jsx'
import UserPhone from '~/Common/userPhone.jsx'
import '../styles/module/login.less'

class App extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      methods: true
    }
  }
  changeMethods() {
    console.log(this.state.methods)
    this.setState({
      methods: !this.state.methods
    })
  }
  render() {
    let userMethods = null;
    if (this.state.methods) {
      userMethods = (<UserName />)
    } else {
      userMethods = (<UserPhone />)
    }
    console.log(this.state.methods)
    console.log(userMethods)
    return (
      <div className="App">
        <div className="container">
          {userMethods}
          <a href='javascript:;' className='check' onClick={() => { this.changeMethods() }}>{this.state.methods ? '密码登陆' : '手机验证码登陆'}</a>
        </div>
      </div>
    );
  }
}

export default template({
  component: App
});
