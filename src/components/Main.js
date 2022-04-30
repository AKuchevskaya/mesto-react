import React from 'react';

function Main() {
    
    return (
        <main className="content">
            <section className="profile">
                <div className="profile__container">
                    <div className="profile__avatar">
                        <button type="button" className="profile__button-avatar"></button>
                        <img src="#" alt="Фото пользователя" className="profile__photo" />
                    </div>
                    <div className="profile__contact">
                        <div className="profile__names">
                            <h1 className="profile__name">Жак-Ив Кусто</h1>
                            <button type="button" className="profile__button-redaction"></button>
                        </div> 
                        <p className="profile__vocation">Исследователь океана</p>
                    </div>
                </div>
                <button type="button" className="profile__button-add"></button>
            </section>
            <section className="cards">
                <ul className="cards__container">
                </ul>
            </section>
        </main>   
    )
}

export default Main;