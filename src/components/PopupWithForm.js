import React from 'react';

function PopupWithForm({ name, isOpen, title, formName, children, buttonText }){
    
    return(
        <div className={`popup popup_${name} ${isOpen ? "popup_opened" : " "}`}>
            <div className="popup__container">
                <button type="button" className="popup__close"></button>
                <h3 className="popup__title">{title}</h3>
                <form name="fname" className={`popup__form  popup__${formName}`}>
                    {children}
                    <button type="submit" className="popup__save" disabled>{buttonText}</button>
                </form>
            </div>
        </div>
    )
}
export default PopupWithForm;