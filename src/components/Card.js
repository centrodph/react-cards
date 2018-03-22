import React, { Component } from 'react';

class Card extends Component {
    render() {
        const { title, flipped, finded, onClick, backgroundImage } = this.props;
        const cardClass = `card ${flipped ? 'flipped' : ''}  ${finded ? 'flipped finded' : ''}`;
        return (
            <div className="component-card" onClick={onClick}>
                <div className="card-conteiner">
                    <div className={cardClass}>
                        <figure className="front">?</figure>
                        <figure className="back" style={{ backgroundImage: `url("${backgroundImage}")` }}>
                            {title}
                        </figure>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;
