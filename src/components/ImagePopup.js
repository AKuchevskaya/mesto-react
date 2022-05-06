import React from 'react';

function ImagePopup({ card, isOpen, onClose}){
   
    const cardItem = ({ ...card})
    console.log(cardItem.link)
    return(
        <div className={`popup popup_card-review ${isOpen ? "popup_opened" : " "}`}>
            <div className="popup__box">
                <button onClick={onClose} type="button" className="popup__close popup__close-card"></button>
                <figure className="popup__figure">
                    <img className="popup__card" link={cardItem.link} name={cardItem.name} />
                    <figcaption className="popup__figcaption">{cardItem.name}</figcaption>
                </figure>
            </div>
        </div>
    )
}
export default ImagePopup;