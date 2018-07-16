import React, { Component } from 'react';
import { connect } from 'react-redux'
import MyFoot from '../Components/Common/footer'

import '../styles/module/main.less'

class Main extends Component {
  constructor(props, context) {
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
        <MyFoot page='2' unRead={typeof this.props.unRead === 'number' ? this.props.unRead : ''} />
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

export default connect(mapStateToProps)(Main)
