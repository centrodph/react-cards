import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	const base = process.env.REACT_APP_PUBLIC_URL;
	return (
		<div className="component-header">
			<h1 className="App-title">React Cards</h1>
			<Link to={`${base}/`}>Home</Link>
			<Link to={`${base}/config`}>Config</Link>
			<Link to={`${base}/game`}>Game</Link>
		</div>
	);
};

export default Header;
