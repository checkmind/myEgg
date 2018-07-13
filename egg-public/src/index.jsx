import React from 'react';
import ReactDOM from 'react-dom';
import './styles/common.less';
import { Provider } from 'react-redux';
import store from './Redux/Store/';
import registerServiceWorker from './registerServiceWorker';
import {
	HashRouter as Router,
	Route
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './view/Main';
import TimeLine from './view/TimeLine';
import Chatting from './view/Chatting/Chatting'
import EditBook from './view/EditBook'
import Login from './view/Login'



ReactDOM.render((
	<Provider store={store}>
		<Router>
			<div className='Router'>
				<Route path="/timeLine" component={TimeLine} />
				<Route path="/chatting" component={Chatting} />
				<Route path="/index" component={Main} />
				<Route path="/editBook" component={EditBook} />
				<Route path="/login" component={Login} />
			</div>
		</Router>
	</Provider>
), document.getElementById('root'))
registerServiceWorker();
