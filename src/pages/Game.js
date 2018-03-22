import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getImagesByTag } from '../actions/';
import { shuffleArray, getUrlImageFlickr } from '../util';
import Card from '../components/Card';

class Game extends Component {
    constructor(props) {
        super(props);

        const cards = shuffleArray([...this.props.cards, ...this.props.cards]); //duplicate

        this.state = {
            images: [],
            waiting: false,
            qtySelected: 0,
            indexSelected: [],
            finded: [],
            cards
        };
    }

    componentDidMount = () => {
        this.props.getImagesByTag();
    };

    clean() {
        setTimeout(() => {
            this.setState({
                waiting: false,
                qtySelected: 0,
                indexSelected: []
            });
        }, this.props.delay);
    }

    handleCardClick = (index) => {
        if (this.state.waiting === true) return;

        if (this.state.indexSelected.indexOf(index) === -1) {
            const indexSelected = [...this.state.indexSelected, index];
            const qtySelected = indexSelected.length;
            const waiting = qtySelected === 2;
            let finded = [];
            if (waiting && this.state.cards[indexSelected[0]].id === this.state.cards[indexSelected[1]].id) {
                finded = [...indexSelected];
            }

            this.setState({
                waiting,
                qtySelected,
                indexSelected,
                finded: [...this.state.finded, ...finded]
            });
        }
    };

    renderCards() {
        return this.state.cards.map((card, index) => {
            const flipped = this.state.indexSelected.indexOf(index) > -1;
            const finded = this.state.finded.indexOf(index) > -1;
            let backgroundImage = 'none';
            if (this.props.images && this.props.images.length > 0) {
                const inxImage = Math.floor(Math.random() * this.props.images.length);
                backgroundImage = getUrlImageFlickr(this.props.images[inxImage]);
            }
            return (
                <Card
                    key={index}
                    flipped={flipped}
                    finded={finded}
                    backgroundImage={backgroundImage}
                    {...card}
                    onClick={() => this.handleCardClick(index)}
                />
            );
        });
    }

    renderDebug() {
        return this.state.indexSelected.join(' - ');
    }

    renderFinded() {
        return this.state.finded.length;
    }

    render() {
        console.log(this.props);
        if (this.state.waiting === true) {
            this.clean();
        }
        if (this.state.finded.length === this.state.cards.length) {
            alert('GANASTE !!!!!');
        }

        return (
            <div className="component-game">
                <div className="component-game-structure">
                    <div className="component-game-box">{this.renderCards()}</div>
                    <div className="component-game-score">
                        <ul>
                            <li>Selected: {this.renderDebug()}</li>
                            <li>finded: {this.renderFinded()}</li>
                            <li>QTY: {this.state.qtySelected}</li>
                            <li>
                                Waiting: {this.state.waiting && ` true`}
                                {!this.state.waiting && ` false`}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

Game.defaultProps = {
    delay: 1500,
    cards: [
        { background: 'red', title: 'Puka', id: 1 },
        { background: 'green', title: 'Mora', id: 2 },
        { background: 'yellow', title: 'Rapunzel', id: 3 },
        { background: 'violet', title: 'Elsa', id: 4 },
        { background: 'blue', title: 'Ana', id: 5 }
    ]
};

const mapStateToProps = (state) => {
    const { images: { images } } = state;
    return {
        images
    };
};
export default connect(mapStateToProps, { getImagesByTag })(Game);
