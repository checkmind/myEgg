import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import '../../styles/footer.less'

class Child extends Component {
  constructor(props, context){

    super(props, context);  
  }
  render() {
    let classname = [];
    let {unRead,page} = this.props;
    console.log(this.props)
    let unReadInf = ''
    classname[+page] = 'chooseLink';
    if(!unRead)
      unReadInf = '';
    else{
      if(unRead>=99)
        unRead = '99+'
      unReadInf = <span>{unRead}</span>;
    }
    return (<div className='footer'>
    			<Link to='/timeLine' className={classname[0]}>追忆阁</Link>
    			<Link to='/chatting' className={classname[1]}><p>雁书坊{unReadInf}</p></Link>
    			<Link to='/index' className={classname[2]}>伏案</Link>
    		</div>)
  }
  componentWillMount() {
  	
  }
}

export default Child