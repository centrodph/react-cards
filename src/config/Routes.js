import React from 'react';
import App from '../pages/App';
import GameConfig from '../pages/GameConfig';

export default [
	{
		component: App,
		routes: [
			{
				path: '/config',
				component: GameConfig
			},
			{
				path: '/',
				component: GameConfig
			}
		]
	}
	// {
	// 	path: '/game',
	// 	component: GameWrapper,
	// 	routes: [
	// 		{
	// 			path: '/',
	// 			component: Game
	// 		},
	// 		{
	// 			path: '/result',
	// 			component: GameResult
	// 		}
	// 	]
	// }
];
