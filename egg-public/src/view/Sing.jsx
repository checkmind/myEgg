import React, { Component } from 'react';
import UserSing from '~/userSing.jsx'
import { connect } from 'react-redux'
import { sing, getCode } from 'Action/index.js'
import '../styles/module/login.less'

class SingPage extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      methods: true
    }
  }
  async onSingBtn(userInf) {
    console.log(this.state)
    const { dispatch } = this.props
    const res = await dispatch(sing(userInf))
    if (res.success) {
      this.props.history.push('/index', null)
    }
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <UserSing chooseSingBtn={(ev) => { this.onSingBtn(ev) }} getCode={ev => {this.onTapCode(ev)}}/>
        </div>
      </div>
    );
  }
  async onTapCode(userInf) {
    const { dispatch } = this.props
    const res = await dispatch(getCode(userInf))
    if (res.success) {
      this.props.history.push('/index', null)
    }
  }
}

function mapStateToProps(state) {
  const { mailList, mailWords, unRead, mailWordsConfig } = state
  return {
    mailList,
    mailWords,
    unRead,
    mailWordsConfig
  }
}

export default connect(mapStateToProps)(SingPage)
