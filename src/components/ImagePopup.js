import React from "react";

function ImagePopup({ selectedCard, onClose }) {
  return (
    <div
      className={`popup popup_card-review ${
        selectedCard.isOpened && "popup_opened"
      }`}
    >
      <div className="popup__box">
        <button
          onClick={onClose}
          type="button"
          className="popup__close popup__close-card"
        ></button>
        <figure className="popup__figure">
          <img
            className="popup__card"
            src={selectedCard.link}
            alt={selectedCard.name}
          />
          <figcaption className="popup__figcaption">
            {selectedCard.name}
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
export default ImagePopup;
