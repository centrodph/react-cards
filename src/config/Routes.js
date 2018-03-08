import React from 'react';
import App from '../pages/App';

import Game from '../pages/Game';
import GameConfig from '../pages/GameConfig';
import Landing from '../pages/Landing';

export default [
	{
		component: App,
		routes: [
			{
				exact: true,
				path: '/',
				component: Landing
			},
			{
				exact: true,
				path: '/config',
				component: GameConfig
			},
			{
				path: '/game',
				component: Game
			}
		]
	}
];
