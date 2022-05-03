import React from 'react';
import Card from './Card';


function Main({ onEditAvatar, onEditProfile, onAddPlace }) {
    
    return (
        <main className="content">
            <section className="profile">
                <div className="profile__container">
                    <div className="profile__avatar">
                        <button type="button" onClick={onEditAvatar} className="profile__button-avatar"></button>
                        <img src="#" alt="Фото пользователя" className="profile__photo" />
                    </div>
                    <div className="profile__contact">
                        <div className="profile__names">
                            <h1 className="profile__name">Жак-Ив Кусто</h1>
                            <button type="button" onClick={onEditProfile} className="profile__button-redaction"></button>
                        </div> 
                        <p className="profile__vocation">Исследователь океана</p>
                    </div>
                </div>
                <button type="button" onClick={onAddPlace} className="profile__button-add"></button>
            </section>
            <section className="cards">
                <Card />
            </section>
        </main>   
    )
}

export default Main;