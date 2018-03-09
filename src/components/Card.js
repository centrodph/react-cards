import React, { Component } from 'react';

class Card extends Component {
	render() {
		const { title, background, flipped, onClick } = this.props;
		const cardClass = `card ${flipped ? 'flipped' : ''}`;
		return (
			<div className="component-card" onClick={onClick}>
				<div className="card-conteiner">
					<div className={cardClass}>
						<figure className="front">?</figure>
						<figure className="back">{title}</figure>
					</div>
				</div>
			</div>
		);
	}
}

export default Card;
