import React, { useState, useEffect } from 'react';
import Card from './Card';
import api from '../utils/Api';


function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
    const [userAvatar, setUserAvatar] = useState('');
    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    //const [userData,setUserData] = useState([])
    const [cards,setCards] = useState([])

    useEffect(() => {
        Promise.all([ //в Promise.all передаем массив промисов которые нужно выполнить
        api.getInitialCards(),
        api.getProfile()
        ])
        .then(([cards, data]) => {
            console.log([cards, data])
            
            setUserAvatar(data.avatar);
            setUserName(data.name);
            setUserDescription(data.about)
            setCards(cards)
        })
        .catch((err) => {console.log(`Ошибка.....: ${err}`)})
    }, [])
    return (
        <main className="content">
            <section className="profile">
                <div className="profile__container">
                    <div className="profile__avatar">
                        <button type="button" onClick={onEditAvatar} className="profile__button-avatar"></button>
                        <img src={userAvatar} alt="Фото пользователя" className="profile__photo" />
                    </div>
                    <div className="profile__contact">
                        <div className="profile__names">
                            <h1 className="profile__name">{userName}</h1>
                            <button type="button" onClick={onEditProfile} className="profile__button-redaction"></button>
                        </div> 
                        <p className="profile__vocation">{userDescription}</p>
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
                        onCardClick={onCardClick} />
                    ))}
                </article>
            </section>
        </main>   
    )
}

export default Main;

