import App from '../pages/App';
import Game from '../pages/Game';
import GameConfig from '../pages/GameConfig';
import Landing from '../pages/Landing';

const base = process.env.REACT_APP_PUBLIC_URL;

export default [
    {
        component: App,
        routes: [
            {
                exact: true,
                path: `${base}/`,
                component: Landing
            },
            {
                exact: true,
                path: `${base}/config`,
                component: GameConfig
            },
            {
                path: `${base}/game`,
                component: Game
            }
        ]
    }
];
