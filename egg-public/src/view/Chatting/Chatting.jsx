import React, { Component } from 'react';
import {template} from '../../mixins/template'
import { is, fromJS} from 'immutable';
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import '../../styles/module/chatting.less'

class Chatting extends Component {
	static childContextTypes = {
        loginOrNot : PropTypes.any
    }
	constructor(props, context) {
		super(props, context)
		 const { store } = this.context;
		 this.props.readConfig(10)
		this.state = {
				more: "more",
				value: "",
				loverName: "嫦娥",
				message: [{
					id: 0,
					sender: 0,
					message: '第一句话',
					date: "2017-03-16 21:03:00"
				},{
					id: 1,
					sender: 1,
					message: '第er 句话',
					date: "2017-03-16 21:04:00"
				},{
					id: 2,
					sender: 0,
					message: '第一san句话',
					date: "2017-03-16 21:05:00"
				}]
		}
		this.changSend = (ev)=>{
			this.setState({
				value: ev.target.value
			})
		}
		// 填充聊天信息
		this.drawWords = ()=>{ 
			let res='';
			let type;
			let that = this;
			if(this.refs.bodyer){
				this.refs.bodyer.scrollTop = 9999
			}
			
		 	
			return this.state.message.map(function(val){
				if(val.sender)
					type = 'right'
				else
					type = 'left'
				return      (<li className={type} key={val.id}>
								<div className='img'></div>
				        		<div className='words'>{val.message}</div>
			        		</li>)
			})
		}
		// 判断发送聊天消息或打开更多页面
		this.judgeMethod = ()=>{
			if(this.state.value)
				this.sendWords();
		}
		// 发送消息
		this.sendWords = ()=>{
			// state不能直接改变
			let message = this.state.message;
			this.props.judgeLogin(true) // 发送就登录
			message.push({
					sender: 0,
					message: this.state.value,
					date: new Date(),
					id: Math.random()
				})
			this.setState({
				message: message
			})
			this.setState({
				value: ''
			})
			this.refs.bodyer.scrollTop = 9999
			// 发送完聚焦
			this.refs.input_value.focus();
		}
		// 
	}
	getChildContext(){
        return{
            loginOrNot:this.props.store
        }
    }
	render() {
		let {more,value,loverName} = this.state;
		let icon,style
		let login = this.props.loginOrNot.isLogin;
		if(!login)
			loverName = '';
		console.log(this.context)
		if(!value){
			icon = '+';
			more = 'more';
		}else{
			icon = '发送';
			more = 'send';
		}
		if(this.refs.bodyer)
			this.refs.bodyer.scrollTop = 9999
	    return (
	      <div className='Chatting'>
	        <div className='header'>
	              <span className='down-arrow' onClick={()=>{ window.history.back()}}></span>
	             <h3>{loverName}</h3>
	        </div>
	        <div className='bodyer' ref='bodyer'>
	        	{this.drawWords()}
	        </div>
	        <div className='footer'>
	            <a href="javascript:;" className='voice'></a>
                <input type="text" onChange={this.changSend} value={value} ref='input_value'/>
                <a href="javascript:;" className='icon'></a>
                <a href="javascript:;" className={more} onClick={this.judgeMethod}>{icon}</a>
	        </div>
	      </div>
	    );
	}
	componentWillUpdate(nextProps, nextState) {
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
    }
	componentDidMount() {
		this.refs.bodyer.scrollTop = 9999
	}
	shouldComponentUpdate(nextProps, nextState) {
		return true;
	}
	
}
// console.log(React.PropTypes)
// Chatting.contextTypes = {
//   store: React.PropTypes.object
// }
export default template({
    component: Chatting
});
