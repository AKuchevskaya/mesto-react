import '../../src/index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';


function App() {
  return (
    <body className="page">
    <div className="page__container">
        <Header />
        <Main />
        <Footer />
        
        <div className="popup popup_profile-redaction">
            <div className="popup__container">
                <button type="button" className="popup__close popup__close-redaction"></button>
                <h3 className="popup__title">Редактировать профиль</h3>
                <form name="fname" className="popup__form popup__form-redaction">
                    <input type="text" name="name" placeholder="ФИО" className="popup__input popup__input_type_name" id="name-input" required minLength="2" maxLength="40" />
                    <span className="name-input-error popup__error"></span>
                    <input type="text" name="vocation" placeholder="О себе" className="popup__input popup__input_type_vocation" id="vocation-input" required minLength="2" maxLength="200" />
                    <span className="vocation-input-error popup__error"></span>
                    <button type="submit" className="popup__save popup__save-text popup__save_inactive" disabled>Сохранить</button>
                </form>
            </div>
        </div>
        <div className="popup popup_profile-avatar">
            <div className="popup__container">
                <button type="button" className="popup__close popup__close-avatar"></button>
                <h3 className="popup__title">Обновить аватар</h3>
                <form name="profile-avatar" className="popup__form popup__form-avatar">
                    <input type="url" name="avatar" placeholder="Ссылка на новый аватар" className="popup__input popup__input_type_avatar" id="url-input" required />
                    <span className="url-input-error popup__error"></span>
                    <button type="submit" className="popup__save popup__save-avatar popup__save_inactive" disabled>Сохранить</button>
                </form>
            </div>
        </div>
        <div className="popup popup_profile-add">
            <div className="popup__container">
                <button type="button" className="popup__close popup__close-add"></button>
                <h3 className="popup__title">Новое место</h3>
                <form name="fcard" className="popup__form popup__form-add" noValidate>
                    <input type="text" name="text" placeholder="Название" className="popup__input popup__input_type_title" id="title-input" required minLength="2" maxLength="30" />
                    <span className="title-input-error popup__error"></span>
                    <input type="url" name="link" placeholder="Ссылка на картинку" className="popup__input popup__input_type_link" id="link-input" required />
                    <span className="link-input-error popup__error"></span>
                    <button type="submit" className="popup__save popup__save-card popup__save_inactive" disabled>Создать</button>
                </form>
            </div>
        </div>
        <div className="popup popup_question">
            <div className="popup__container">
                <button type="button" className="popup__close popup__close-question"></button>
                <h3 className="popup__title">Вы уверены?</h3>
                <form name="question" className="popup__form popup__form-question" noValidate>
                    <button type="submit" className="popup__save popup__save-question">Да</button>
                </form>
            </div>
        </div>
        <div className="popup popup_card-review">
            <div className="popup__box">
                <button type="button" className="popup__close popup__close-card"></button>
                <figure className="popup__figure">
                    <img className="popup__card" src="#" alt="картинка крупно" />
                    <figcaption className="popup__figcaption"></figcaption>
                </figure>
            </div>
        </div>
        <template className="template__item">
            <li className="cards__item">
                <img src="<%=require('./images/karachaevsk.jpg')%>" alt="Картинка Карачаевска" className="cards__image" />
                <button type="button" className="cards__button-delete"></button>
                <div className="cards__description">
                    <h2 className="cards__title">Карачаевск</h2>
                    <div className="cards__reaction">
                        <button type="button" className="cards__button-like"></button>
                        <span className="cards__span"></span>
                    </div>
                </div>
            </li>
        </template>
    </div>
</body>
        
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
