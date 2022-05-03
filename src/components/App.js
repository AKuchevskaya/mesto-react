import React, {useState} from 'react';
import '../../src/index.css';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import Footer from './Footer';



function App() {
const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false)
const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false)
const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false)

function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true)
}
function handleEditProfileClick() {
    setEditProfilePopupOpen(true)
}
function handleAddPlaceClick() {
    setAddPlacePopupOpen(true)
}
function closeAllPopup() {
    setEditAvatarPopupOpen(false)
    setEditProfilePopupOpen(false)
    setAddPlacePopupOpen(false)
}
  return (
    <div className="page__container">
        <Header />
        <Main 
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick} />
        <Footer />
        <PopupWithForm
        name="profile-avatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopup}
        title="Обновить аватар"
        id="form-profile"
        formName="profile-avatar"
        buttonText="Сохранить"
        >
            <input type="url" name="avatar" placeholder="Ссылка на новый аватар" className="popup__input popup__input_type_avatar" id="url-input" required />
            <span className="url-input-error popup__error"></span>
        </PopupWithForm>

        <PopupWithForm
        name="profile-redaction"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopup}
        title="Редактировать профиль"
        id="form-profile"
        formName="form-redaction"
        buttonText="Сохранить"
        >
            <input type="text" name="name" placeholder="ФИО" className="popup__input popup__input_type_name" id="name-input" required minLength="2" maxLength="40" />
            <span className="name-input-error popup__error"></span>
            <input type="text" name="vocation" placeholder="О себе" className="popup__input popup__input_type_vocation" id="vocation-input" required minLength="2" maxLength="200" />
            <span className="vocation-input-error popup__error"></span>
        </PopupWithForm>

        <PopupWithForm
        name="profile-add"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopup}
        title="Новое место"
        id="form-profile"
        formName="form-add"
        buttonText="Создать"
        >
            <input type="text" name="text" placeholder="Название" className="popup__input popup__input_type_title" id="title-input" required minLength="2" maxLength="30" />
            <span className="title-input-error popup__error"></span>
            <input type="url" name="link" placeholder="Ссылка на картинку" className="popup__input popup__input_type_link" id="link-input" required />
            <span className="link-input-error popup__error"></span>
        </PopupWithForm>
        <ImagePopup />
    </div>        
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
