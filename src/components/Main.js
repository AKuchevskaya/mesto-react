import React, { useState, useEffect, useContext } from 'react';
import Card from './Card';
import api from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
    // const [userAvatar, setUserAvatar] = useState('');
    // const [userName, setUserName] = useState('');
    // const [userDescription, setUserDescription] = useState('');
    const [cards,setCards] = useState([])
    const [removeCard, setRemoveCard] = useState({})
    const currentUser = useContext(CurrentUserContext);

    useEffect(() => {
        Promise.all([ //в Promise.all передаем массив промисов которые нужно выполнить
        api.getInitialCards(),
       // api.getProfile()
        ])
        .then(([cards]) => {
            // setUserAvatar(data.avatar);
            // setUserName(data.name);
            // setUserDescription(data.about)

            setCards(cards)
        })
        .catch((err) => {console.log(`Ошибка.....: ${err}`)})
    }, [])

    function handleCardLike(card) {
        // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        
        // Отправляем запрос в API и получаем обновлённые данные карточки
        api.changeLikeCardStatus(card._id, !isLiked)
        .then((newCard) => {
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
            });
    }

    function handleCardDelete(card) {
        api.deleteCard(card._id)
        .then(() => {
            setCards((state) => state.filter((item) => 
            item._id !== card._id));
        })
    }

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__container">
                    <div className="profile__avatar">
                        <button type="button" onClick={onEditAvatar} className="profile__button-avatar"></button>
                        <img src={currentUser.avatar} alt="Фото пользователя" className="profile__photo" />
                    </div>
                    <div className="profile__contact">
                        <div className="profile__names">
                            <h1 className="profile__name">{currentUser.name}</h1>
                            <button type="button" onClick={onEditProfile} className="profile__button-redaction"></button>
                        </div> 
                        <p className="profile__vocation">{currentUser.about}</p>
                    </div>
                </div>
                <button type="button" onClick={onAddPlace} className="profile__button-add"></button>
            </section>
            <section className="cards">
                <article className="cards__container">
                    {cards.map((card) => (
                        <Card 
                        key={card._id} 
                        card={card} 
                        onCardClick={onCardClick}
                        onCardLike={handleCardLike} 
                        onCardDelete={handleCardDelete} />
                    ))}
                </article>
            </section>
        </main>   
    )
}

export default Main;

