import React from 'react';

const Header = () => {
	return (
		<div className="component-header">
			<h1 className="App-title">React Cards</h1>
			<Link to="/">Home</Link>
			<Link to="/config">Config</Link>}
			<Link to="/game">Game</Link>
		</div>
	);
};
