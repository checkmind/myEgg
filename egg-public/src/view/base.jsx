import React, { Component } from 'react';
import { connect } from 'react-redux'
import ModalCom from '../Components/Common/ModalCom'
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

class Base extends Component {

	constructor(props, context) {
		super(props, context);
	}
	render() {
		return (<ModalCom/>)
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
export default connect(mapStateToProps)(Base)