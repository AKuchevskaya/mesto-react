import React from 'react';

function Card(){
    const cardList = [
        {link: '...',
        name: 'title1'},
        {link: '...',
        name: 'title2'},
        {link: '...',
        name: 'title3'},
    ]
    return(
            cardList.map((card) => {
                <article className="cards__container">
                    <div className="cards__item">
                        <img src={card.link} alt={card.name} className="cards__image" />
                        <button type="button" className="cards__button-delete"></button>
                        <div className="cards__description">
                            <h2 className="cards__title">{card.name}</h2>
                            <div className="cards__reaction">
                                <button type="button" className="cards__button-like"></button>
                                <span className="cards__span"></span>
                            </div>
                        </div>
                    </div>
                </article>
            })
        
    )
}

export default Card;
