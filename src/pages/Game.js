import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getImagesByTag } from '../actions/';
import { shuffleArray, getUrlImageFlickr, mergeImagesWithCards } from '../util';
import Card from '../components/Card';

class Game extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [],
            waiting: false,
            qtySelected: 0,
            indexSelected: [],
            finded: [],
            cards: []
        };
    }

    componentDidMount = () => {
        this.props.getImagesByTag();
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.images.length > 0) {
            const _cards = mergeImagesWithCards(nextProps.quantity, nextProps.images);
            const cards = shuffleArray([..._cards, ..._cards]); //duplicate
            this.setState({ cards });
        }
    }

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

            //configuration for change background every time
            // let backgroundImage = 'none';
            // if (this.props.images && this.props.images.length > 0) {
            //     const inxImage = Math.floor(Math.random() * this.props.images.length);
            //     backgroundImage = getUrlImageFlickr(this.props.images[inxImage]);
            // }
            return (
                <Card
                    key={index}
                    flipped={flipped}
                    finded={finded}
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
        if (!this.props.images || !(this.props.images.length > 0)) return <p>loading...</p>;

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
    quantity: 5,
    cards: []
};

const mapStateToProps = (state) => {
    const { images: { images } } = state;
    return {
        images
    };
};
export default connect(mapStateToProps, { getImagesByTag })(Game);
