import React, { Component } from 'react';

import {template} from '../mixins/template'
import Myhead from '../Components/Common/header'
import MyFoot from '../Components/Common/footer'
import Mybody from '../Components/Common/bodyer'


/* 竹简 */
import MailBody from '../Components/mailbody'

import  '../styles/module/editBook.less'


class EditBook extends Component {
	
	constructor(){
		super();
		this.state = {
			"open": false,
			"words": [],
			"title": '',
			"content": ''
		}

		this.changeWords = ()=>{
			let arr = this.state.words;
			let obj = {};
			//arr.push(this.refs.editTitel.innerText); //先放入标题
			let str = this.refs.editContent.innerText
			// this.refs.editContent.innerText.split(' ').forEach(function(val, index){
			// 	if(val!=' ')
			// 		str+= val;
			// 	else{
			// 		arr.push(str)
			// 		str = '';
			// 	}
			// })

			obj.title = str.substr(0,30);
			obj.timer = new Date().toString();
			obj.id = Math.floor(Math.random()*10000);
			obj.content = str;
			//arr.push(str)
			this.props.mailListConfig([obj]);
			// this.setState({
			// 	words: arr
			// })
	//		this.props.mailListConfig(arr)
		}
		this.saveWords = ()=>{
			this.changeWords();
			window.history.go(-1)
		}
		
		this.getHash = (it) =>{
			let hash = window.location.hash
			let res;
			hash = hash.split("?")[1].split("&").forEach((val,index)=>{
				let key = val.split("=")[0];
				let value = val.split("=")[1];
				if(key===it)
					res = value
			})
			return res;	
		}

		this.fillContent = (mailList)=>{
			let words
			console.log(this.props)
			for(let i = 0,len=this.props.mailList.length;i<len;i++){
				console.log(this.props.mailList[i])
				let item = this.props.mailList[i]
				if(item.id == +this.getHash("chooseId")){
					words = item.content;
					this.setState({
						words: words
					})
					return 
				}  
			}	
		}
	}	
	render() {
		let {title,content} = this.state;
		let words = ''
		//words = this.fillContent(this.props.mailList)
		return (
		  <div className='editBook'>
		  		<div className='header'>
	              	<span className='down-arrow' onClick={()=>{ window.history.back()}}></span>
		            <h3>新建竹简</h3>
		            <a href='javascript:;' className='saveIcon' onClick={this.saveWords} />
		        </div>
		        <div className='bodyer'>
		        	<div type='text'
		        	   	   className='editContent'
		        	   	   ref='editContent'
		        	   	   contentEditable="true"> 
		        	   	   {this.state.words}
		        	 </div>
		        </div>
		  </div>
		);
	}
	componentWillMount() {
		this.fillContent(this.props.mailList)
	}
}


export default template({
    component: EditBook
});
