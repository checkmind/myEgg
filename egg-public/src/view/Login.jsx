import React, { Component } from 'react';
import { connect } from 'react-redux'
import UserName from '~/userName.jsx'
import UserPhone from '~/userPhone.jsx'
import { login, getCode } from 'Action/index.js'
import '../styles/module/login.less'

class Login extends Component {
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
  async onLoginBtn(userInf) {
    const { dispatch } = this.props
    const res = await dispatch(login(userInf))
    if (res.success) {
      this.props.history.push('/index', null)
    }
  }
  async onTapCode(userInf) {
    const { dispatch } = this.props
    const res = await dispatch(getCode(userInf))
    if (res.success) {
      this.props.history.push('/index', null)
    }
  }
  render() {
    let userMethods = null;
    if (this.state.methods) {
      userMethods = (<UserName chooseLoginBtn={(ev) => { this.onLoginBtn(ev) }} getCode={ev => {this.onTapCode(ev)}}/>)
    } else {
      userMethods = (<UserPhone chooseLoginBtn={(ev) => { this.onLoginBtn(ev) }}/>)
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

function mapStateToProps(state) {
  const { mailList, mailWords, unRead, mailWordsConfig, fetchData } = state
  return {
    mailList,
    mailWords,
    unRead,
    mailWordsConfig,
    fetchData
  }
}

export default connect(mapStateToProps)(Login)