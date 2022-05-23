import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = useContext(CurrentUserContext);

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner._id === currentUser._id;
  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = `cards__button-delete ${
    isOwn ? "cards__button-delete_active" : " "
  }`;

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = `cards__button-like ${
    isLiked ? "cards__button-like_active" : " "
  }`;

  const handleClick = () => {
    onCardClick(card);
  };

  const handleLikeClick = () => {
    onCardLike(card);
  };

  const handleDeleteClick = () => {
    onCardDelete(card);
  };

  return (
    <article className="cards__container">
      <div key={card._id} className="cards__item">
        <img
          onClick={handleClick}
          src={card.link}
          alt={card.name}
          className="cards__image"
        />
        <button
          onClick={handleDeleteClick}
          type="button"
          className={cardDeleteButtonClassName}
        ></button>
        <div className="cards__description">
          <h2 className="cards__title">{card.name}</h2>
          <div className="cards__reaction">
            <button
              onClick={handleLikeClick}
              type="button"
              className={cardLikeButtonClassName}
            ></button>
            <span className="cards__span">{card.likes.length}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Card;
