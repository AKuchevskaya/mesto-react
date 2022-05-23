import React from "react";

function PopupWithForm({
  name,
  isOpen,
  onClose,
  title,
  onSubmit,
  formName,
  children,
  buttonText,
}) {
  return (
    <div className={`popup popup_${name} ${isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__close"
          onClick={onClose}
        ></button>
        <h3 className="popup__title">{title}</h3>
        <form
          name="fname"
          onSubmit={onSubmit}
          className={`popup__form  popup__${formName}`}
        >
          {children}
          <button type="submit" className="popup__save">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}
export default PopupWithForm;
