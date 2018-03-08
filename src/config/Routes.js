import React from 'react';
import App from '../pages/App';
import GameConfig from '../pages/GameConfig';

export default [
	{
		path: '/',
		component: App
	},
	{
		path: '/config',
		component: GameConfig
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
