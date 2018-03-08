import React, { Component } from 'react';

import { renderRoutes } from 'react-router-config';

class App extends Component {
	render() {
		const { route } = this.props;

		return <div className="component-app">{renderRoutes(route.routes)}</div>;
	}
}

export default App;
