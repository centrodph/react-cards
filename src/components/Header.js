import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className="component-header">
			<h1 className="App-title">React Cards</h1>
			<Link to="./">Home</Link>
			<Link to="{`${process.env.PUBLIC_URL}/config`}">Config</Link>
			<Link to="./game">Game</Link>
		</div>
	);
};

export default Header;
