import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';

import Header from '../components/Header';
import '../assets/base.css';

class App extends Component {
	render() {
		const { route } = this.props;

		return (
			<div className="component-app">
				<Header />
				{renderRoutes(route.routes)}
			</div>
		);
	}
}

export default App;
