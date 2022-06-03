import React from 'react';
import PopupWithForm from './PopupWithForm';

function DeleteCardPopup ({ isOpen, onClose, handleCardDelete }) {
    function handleSubmit (e) {
        e.preventDefault();
        handleCardDelete();
    }
    return(
        <PopupWithForm
          isOpen={isOpen}
          name="question"
          onClose={onClose}
          title="Вы уверены?"
          formName="form-question"
          buttonText="Да"
          onSubmit={handleSubmit}
        />
    )
}

export default DeleteCardPopup;