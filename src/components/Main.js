import { useContext } from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({
  cards,
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  onCardLike,
  onCardDelete,
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <div className="profile__avatar">
            <button
              type="button"
              onClick={onEditAvatar}
              className="profile__button-avatar"
            ></button>
            <img
              src={currentUser.avatar}
              alt="Фото пользователя"
              className="profile__photo"
            />
          </div>
          <div className="profile__contact">
            <div className="profile__names">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button
                type="button"
                onClick={onEditProfile}
                className="profile__button-redaction"
              ></button>
            </div>
            <p className="profile__vocation">{currentUser.about}</p>
          </div>
        </div>
        <button
          type="button"
          onClick={onAddPlace}
          className="profile__button-add"
        ></button>
      </section>
      <section className="cards">
        <article className="cards__container">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))}
        </article>
      </section>
    </main>
  );
}

export default Main;