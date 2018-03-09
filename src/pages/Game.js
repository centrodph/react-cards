import React, { Component } from 'react';
import Card from '../components/Card';

class Game extends Component {
	constructor(props) {
		super(props);
		this.state = {
			waiting: false,
			qtySelected: 0,
			indexSelected: []
		};
	}

	clean() {
		this.setState({ waiting: true });
		setTimeout(() => {
			this.setState({
				waiting: false,
				qtySelected: 0,
				indexSelected: []
			});
		}, 2000);
	}

	handleCardClick = index => {
		if (this.state.waiting === true) return;

		if (this.state.indexSelected.indexOf(index) === -1)
			this.setState({
				qtySelected: this.state.qtySelected + 1,
				indexSelected: [...this.state.indexSelected, index]
			});
	};

	renderCards() {
		return this.props.cards.map((card, index) => {
			const flipped = this.state.indexSelected.indexOf(index) > -1;
			return <Card key={index} flipped={flipped} {...card} onClick={() => this.handleCardClick(index)} />;
		});
	}

	renderDebug() {
		return this.state.indexSelected.join(' - ');
	}

	render() {
		if (this.state.indexSelected.length > 1) {
			this.clean();
		}

		return (
			<div className="component-game">
				<h3>Selected: {this.renderDebug()}</h3>
				<div className="component-game-box">{this.renderCards()}</div>
			</div>
		);
	}
}

Game.defaultProps = {
	cards: [
		{ background: 'red', title: 'Puka' },
		{ background: 'green', title: 'Mora' },
		{ background: 'yellow', title: 'Rapunzel' },
		{ background: 'violet', title: 'Elsa' },
		{ background: 'blue', title: 'Ana' }
	]
};

export default Game;
