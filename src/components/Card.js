import React from 'react';

function Card({card, onCardClick}){
    
    const handleClick = () => {
        onCardClick(card)
    }
    return(
        <article className="cards__container">
            <div key={card._id} className="cards__item">
                <img onClick={handleClick} src={card.link} alt={card.name} className="cards__image" />
                <button type="button" className="cards__button-delete"></button>
                <div className="cards__description">
                    <h2 className="cards__title">{card.name}</h2>
                    <div className="cards__reaction">
                        <button type="button" className="cards__button-like"></button>
                        <span className="cards__span">{card.likes.length}</span>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Card;
