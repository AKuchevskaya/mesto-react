import React, { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/Api';


function App() {
const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false)
const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false)
const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false)
const [selectedCard, setSelectedCard] = useState({})
const [currentUser, setCurrentUser] = useState({}); 

useEffect(() => {
    
    api.getProfile()
    
    .then((currentUser) => {
        setCurrentUser(currentUser);
        
    })
    .catch((err) => {console.log(`Ошибка.....: ${err}`)})
}, [])

function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true)
}
function handleEditProfileClick() {
    setEditProfilePopupOpen(true)
}
function handleAddPlaceClick() {
    setAddPlacePopupOpen(true)
}

function handleCardClick(card) {
    setSelectedCard({
        isOpened: true,
        name: card.name,
        link: card.link,
    })
}

function closeAllPopups() {
    setEditAvatarPopupOpen(false)
    setEditProfilePopupOpen(false)
    setAddPlacePopupOpen(false)
    setSelectedCard({...selectedCard, isOpened: false})
}

function handleUpdateUser({name, about}) {
    api.editProfile(name, about)
    .then((res) => {
        console.log('res', res)
        setCurrentUser({
            name: res.name,
            about: res.about
        });
        closeAllPopups()
        
    })
    .catch((err) => {console.log(`Ошибка.....: ${err}`)})
}

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page__container">
        <Header />
        <Main 
        onCardClick={handleCardClick}
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
         />
        <Footer />
        <EditAvatarPopup 
        isOpen={isEditAvatarPopupOpen} 
        onClose={closeAllPopups} /> 

        <EditProfilePopup 
        isOpen={isEditProfilePopupOpen} 
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser} /> 

        <PopupWithForm
        name="profile-add"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        title="Новое место"
        formName="form-add"
        buttonText="Создать"
        >
            <input type="text" name="text" placeholder="Название" className="popup__input popup__input_type_title" id="title-input" required minLength="2" maxLength="30" />
            <span className="title-input-error popup__error"></span>
            <input type="url" name="link" placeholder="Ссылка на картинку" className="popup__input popup__input_type_link" id="link-input" required />
            <span className="link-input-error popup__error"></span>
        </PopupWithForm>

        <PopupWithForm
        name="question"
        onClose={closeAllPopups}
        title="Вы уверены?"
        formName="form-question"
        buttonText="Да" />

        <ImagePopup selectedCard={selectedCard} onClose={closeAllPopups} />
    </div> 
    </CurrentUserContext.Provider>       
  );
}

export default App;

