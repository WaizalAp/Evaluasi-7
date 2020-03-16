import React, { Component } from 'react';
import FecthX from './component/Fecth';
import Unc from './component/login';
import Detail from './component/detail'
import {BrowserRouter, Switch, Route} from 'react-router-dom';

class App extends Component {
	render() {

		return (
			<div>
				<BrowserRouter>
					<Switch>
						<Route exact path='/' component={Unc} />
						<Route exact path='/home' component={FecthX} />
						<Route exact path='/home/:index' component={Detail} />
					</Switch>
				</BrowserRouter>
			</div>
			);
	}
}

export default App;
