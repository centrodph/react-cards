import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import reducers from '../reducers';
import Routes from './Routes';

const store = createStore(reducers, applyMiddleware(thunk));

const Setup = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<div>{renderRoutes(Routes)}</div>
			</BrowserRouter>
		</Provider>
	);
};

export { Setup };
