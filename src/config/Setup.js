import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { renderRoutes } from 'render-routes-config';

import Routes from './Routes';

const store = createStore(() => {
	dummy: 'ok';
}, applyMiddleware(thunk));

const Setup = () => {
	<Provider store={store}>{renderRoutes(Routes)}</Provider>;
};

export default Setup;
