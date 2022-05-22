import React, { useState, useContext, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditAvatarPopup ({isOpen, onClose}){
    const currentUser = useContext(CurrentUserContext);
    return (
        <PopupWithForm
            name="profile-avatar"
            isOpen={isOpen}
            onClose={onClose}
            title="Обновить аватар"
            formName="profile-avatar"
            buttonText="Сохранить"
            >
                <input type="url" name="avatar" placeholder="Ссылка на новый аватар" className="popup__input popup__input_type_avatar" id="url-input" required />
                <span className="url-input-error popup__error"></span>
            </PopupWithForm>
    )
}

export default EditAvatarPopup;