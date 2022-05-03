import React from 'react';

function ImagePopup(){
    return(
        <div className="popup popup_card-review">
            <div className="popup__box">
                <button type="button" className="popup__close popup__close-card"></button>
                <figure className="popup__figure">
                    <img className="popup__card" src="#" alt="картинка крупно" />
                    <figcaption className="popup__figcaption"></figcaption>
                </figure>
            </div>
        </div>
    )
}
export default ImagePopup;