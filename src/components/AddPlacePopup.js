import { useRef, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const cardNameRef = useRef();
  const cardLinkRef = useRef();

  useEffect(() => {
    cardNameRef.current.value = "";
    cardLinkRef.current.value = "";
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name: cardNameRef.current.value,
      link: cardLinkRef.current.value,
    });
  }
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
        type="text"
        name="text"
        ref={cardNameRef}
        placeholder="Название"
        className="popup__input popup__input_type_title"
        id="title-input"
        required
        minLength="2"
        maxLength="30"
      />
      <span className="title-input-error popup__error"></span>
      <input
        type="url"
        name="link"
        ref={cardLinkRef}
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
