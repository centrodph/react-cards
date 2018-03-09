import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	const base = process.env.REACT_APP_PUBLIC_URL;
	return (
		<div className="component-header">
			<section className="hero is-primary">
				<div className="hero-body">
					<div className="columns">
						<div className="column">
							<h2 className="subtitle">Learning with cards</h2>
						</div>
						<div className="column is-three-quaters link-buttons">
							<Link to={`${base}/`} className="bd-tw-button button">
								Home
							</Link>
							<Link to={`${base}/game`} className="bd-tw-button button">
								Game
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Header;
