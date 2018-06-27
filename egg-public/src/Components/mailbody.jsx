import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import  '../styles/module/child.css'

import createHashHistory  from 'history/createHashHistory'
const history = createHashHistory()

class Child extends Component {
	constructor() {
		super();
		this.state = {
			words : [],
			maxLength: 8,
			show: true
		};
		this.changeWords = (words)=>{
			let arr,
				{maxLength} = this.state,
				wordsArr = [];

			arr = words.split('')
			for(let i = 0,len=arr.length;i<len;i+=maxLength){
				let message = words.substr(i,maxLength)
				wordsArr.push(message);
			}
			return wordsArr;
		}
		this.fillWords = (words)=>{
			let arr = [],
				fatherWidth = document.querySelector("#root").clientWidth-36;
			if(this.refs.mailBody)
				fatherWidth = this.refs.mailBody.clientWidth;
			words.map(function(val){
				let item= val.split('').map(function(text){
								return <span key={Math.random()}>{text}</span>
						  })
				arr.push(<li key={Math.random()}><div>{item}</div></li>)
				return val;
			})
			// 补充空白
			if(words.length*34 < fatherWidth){
				let num  =Math.ceil(fatherWidth/34-words.length)
				for(let i = 0;i<num;i++){
					if(i%2===0)
						arr.push(<li key={Math.random()}><div></div></li>)
					else
						arr.unshift(<li key={Math.random()}><div></div></li>)	
					
				}
			}
			return arr;
		}
		/*
		 *{
			words: ['锄禾啦啦啦','王安石','宫花寂寞红。','宫花寂寞红。']
		 }
		*/
		this.getWordsAndFill =(words)=>{
			let arr = [];
			words.map((item)=>{
				arr = arr.concat(this.changeWords(item));
				return item;
			})

			return arr;
		}
		/*
		 * 编辑竹简
		**/
		this.editMail = ()=>{
			history.push('/EditBook?chooseId='+this.props.chooseId)
		}
	}
	render() {
		let words = [],
			el;
			console.log(this.props)
		if(this.state.show){

			words = this.getWordsAndFill(this.props.wordsArr);
			words = this.fillWords(words)
			el = (<div className='mailToast'>
					<div className='mailBody' ref='mailBody' >
						{words}
			     	</div>
			     	<div className='btnGroup'>
			    		<span className='closeToast' onClick={this.props.closeMail}></span>	
			    		<span className='editMail' onClick={this.editMail}></span>	
			    	</div>
			     </div>);
			return el;
		} else {
			return '';
		}
	    
	}
}
export default Child