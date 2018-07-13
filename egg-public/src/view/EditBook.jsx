import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../styles/module/editBook.less'
import urlParm from '../util/getUrlParm.js'
import { mailListConfig, postMailList } from 'Action/index.js'
class EditBook extends Component {

	constructor() {
		super();
		this.state = {
			"open": false,
			"chooseId": null,
			"words": [],
			"title": '',
			"content": ''
		}
		let chooseId = urlParm.getUrlParm("chooseId")
		if (chooseId) {
			this.state.chooseId = +chooseId
		}
		this.changeWords = () => {
			let { dispatch } = this.props;
			let obj = {};
			let str = this.refs.editContent.value
			obj.title = str.substr(0, 30);
			obj.timer = new Date().toString();
			obj.id = this.state.chooseId || Math.floor(Math.random() * 10000);
			obj.content = str;
			console.log('changewords')
			dispatch(postMailList([obj], this.state.chooseId))
		}
		this.saveWords = () => {
			this.changeWords();
			window.history.go(-1)
		}
	}
	fillContent(mailList) {
		let words
		for (let i = 0, len = this.props.mailList.length; i < len; i++) {
			let item = this.props.mailList[i]
			if (item.id == +urlParm.getUrlParm("chooseId")) {
				words = item.content;
				this.setState({
					words: words
				})
				return
			}
		}
	}
	render() {
		let { title, content } = this.state;
		let words = ''
		//words = this.fillContent(this.props.mailList)
		return (
			<div className='editBook'>
				<div className='header'>
					<span className='down-arrow' onClick={() => { window.history.back() }}></span>
					<h3>新建竹简</h3>
					<a href='javascript:;' className='saveIcon' onClick={this.saveWords} />
				</div>
				<div className='bodyer'>
					{/* <div type='text'
						className='editContent'
						ref='editContent'
						contentEditable="true">
						{this.state.words}
					</div> */}
					<textarea className='editContent'
						defaultValue={this.state.words}
						ref='editContent'></textarea>
				</div>
			</div>
		);
	}
	componentWillMount() {
		this.fillContent(this.props.mailList)
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

export default connect(mapStateToProps)(EditBook)