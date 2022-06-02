import { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [cardName, setCardName] = useState("");
  const [cardLink, setCardLink] = useState("");
  
  function handleChangeCardName(e) {
    setCardName(e.target.value)
  }

  function handleChangeCardLink(e) {
    setCardLink(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name: cardName,
      link: cardLink
    });
  }

  useEffect(() => {
    setCardName("");
    setCardLink("");
  }, [isOpen])

  return (
    <PopupWithForm
      name="profile-add"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      title="Новое место"
      formName="form-add"
      buttonText="Создать"
    >
      <input
        onChange={handleChangeCardName}
        type="text"
        name="text"
        value={cardName || ""}
        placeholder="Название"
        className="popup__input popup__input_type_title"
        id="title-input"
        required
        minLength="2"
        maxLength="30"
      />
      <span className="title-input-error popup__error"></span>
      <input
        onChange={handleChangeCardLink}
        type="url"
        name="link"
        value={cardLink || ""}
        placeholder="Ссылка на картинку"
        className="popup__input popup__input_type_link"
        id="link-input"
        required
      />
      <span className="link-input-error popup__error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
