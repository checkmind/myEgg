import React, { Component } from 'react';
import { template } from '../mixins/template'
import { connect } from 'react-redux'
import MyFoot from '../Components/Common/footer'
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
/* 竹简 */
import MailBody from '../Components/mailbody'
import '../styles/module/timeline.less'
import { getMailList, mailWordsConfig } from 'Action/index.js'

class TimeLine extends Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			"open": false,
			"chooseId": null
		}
	}
	fillList = () => {
		let arr = [{
			value: '备忘录',
			time: new Date()
		}]
	}
	openBook = (content, id) => {

		console.log(id)
		this.props.dispatch(mailWordsConfig(content.replace(/\n/g, " ").split(" ")))
		this.setState({
			chooseId: id
		})
		this.setState({
			open: true
		})
	}
	closeMail = () => {
		this.setState({
			open: false
		})
	}
	componentDidMount() {
		const { dispatch } = this.props
		dispatch(getMailList())
	}

	render() {
		let mailbody,
			mailList = this.props.mailList;
		if (this.state.open)
			mailbody = <MailBody closeMail={this.closeMail} wordsArr={this.props.mailWords} chooseId={this.state.chooseId} />
		return (
			<div className="timeline">
				<div className='bodyer'>
					<div className='list'>
						{mailList.map((val) => {
							return (
								<li key={val.id} onClick={() => this.openBook(val.content, val.id)}>
									<p>{val.title}</p>
									<p>{val.timer}</p>
								</li>);
						})}
					</div>
					{mailbody}
					<div className='btnGroup'>
						<Link to='/EditBook' className='btnRadius'>+</Link>
					</div>
				</div>
				<MyFoot page='0' unRead={typeof this.props.unRead === 'number' ? this.props.unRead : ''} />
			</div>
		);
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

export default connect(mapStateToProps)(TimeLine)