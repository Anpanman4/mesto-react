import React, {useEffect, useState} from 'react';

import '../index.css'

import Header from "./Header.js";
import Footer from "./Footer.js";
import Main from "./Main.js"
import ImagePopup from "./ImagePopup.js";
import PopupWithForm from "./PopupWithForm.js";

import api from "../utils/api.js"

import { CurrentUserContext } from '../contexts/CurrentUserContext.js'

function App() {
  const [ isOpenPopupEdit, setIsOpenPopupEdit ] = React.useState(false);
  const [ isOpenPopupAdd, setIsOpenPopupAdd ] = React.useState(false);
  const [ isOpenPopupAvatar, setIsOpenPopupAvatar ] = React.useState(false);
  const [ isOpenPopupDelete, setIsOpenPopupDelete ] = React.useState(false);

  const [ selectedCard, setSelectedCard ] = React.useState(null);
  
  const [ currentUser, setCurrentUser ] = React.useState({});

  const [ cards, setCards ] = useState([]);

  const closeAllPopups = () => {
    setIsOpenPopupEdit(false);
    setIsOpenPopupAdd(false);
    setIsOpenPopupAvatar(false);
    setIsOpenPopupDelete(false);
    setSelectedCard(null);
  }

  const onCardLike = (id) => {
    api.doLike(id)
    .then((newCard) => {
      const newCards = cards.map((card) => {
        return card._id === newCard._id ? newCard : card;
      })
      setCards(newCards);
    })
    .catch((err) => console.log(err))
  }

  const onCardDislike = (id) => {
    api.deleteLike(id)
    .then((newCard) => {
      const newCards = cards.map((card) => {
        return card._id === newCard._id ? newCard : card;
      })
      setCards(newCards)
    })
    .catch((err) => console.log(err))
  }

  useEffect(() => {
    api.getUserValues()
    .then((data) => {
      setCurrentUser(data);
    })
    .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    api.getInitialCards()
    .then((data) => {
      setCards(data)
    })
    .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Header altText="Логотип Место" />
        <Main
          cards={cards}
          handleEditAvatarClick={setIsOpenPopupAvatar}
          handleEditProfileClick={setIsOpenPopupEdit}
          handleAddPlaceClick={setIsOpenPopupAdd}
          setSelectedCard={setSelectedCard}
          onCardLike={onCardLike}
          onCardDislike={onCardDislike}
        />

        <Footer />

        <PopupWithForm name="edit" title="Редактировать профиль" buttonTitle="Сохранить" isOpen={isOpenPopupEdit} onClose={closeAllPopups}>
          <form className="popup__form" name="personal-information" noValidate>
            <section className="popup__section">
              <input className="popup__field popup__field_type_name" type="text" name="name" placeholder="Ваше имя" autoComplete="off" required minLength="2" maxLength="40" />
              <span className="popup__field-error"></span>
            </section>
            <section className="popup__section">
              <input className="popup__field popup__field_type_job" type="text" name="about" placeholder="Чем занимаетесь" autoComplete="off" required minLength="2" maxLength="200" />
              <span className="popup__field-error"></span>
            </section>
          </form>
        </PopupWithForm>

        <PopupWithForm name="add" title="Новое место" buttonTitle="Создать" isOpen={isOpenPopupAdd} onClose={closeAllPopups}>
          <form className="popup__form" name="new-card" noValidate>
            <section className="popup__section">
              <input className="popup__field popup__field_type_name" type="text" name="name" placeholder="Название" autoComplete="off" required minLength="2" maxLength="30" />
              <span className="popup__field-error"></span>
            </section>
            <section className="popup__section">
              <input className="popup__field popup__field_type_image" type="url" name="link" placeholder="Ссылка на картинку" autoComplete="off" required />
              <span className="popup__field-error"></span>
            </section>
          </form>
        </PopupWithForm>

        <PopupWithForm name="avatar" title="Обновить аватар" buttonTitle="Сохранить" isOpen={isOpenPopupAvatar} onClose={closeAllPopups}>
          <form className="popup__form" name="new-avatar" noValidate>
            <section className="popup__section">
              <input className="popup__field popup__field_type_image" type="url" name="avatar" placeholder="Ссылка на картинку" autoComplete="off" required />
              <span className="popup__field-error"></span>
            </section>
          </form>
        </PopupWithForm>

        <PopupWithForm name="delete" title="Вы уверены?" buttonTitle="Да" isOpen={isOpenPopupDelete} onClose={closeAllPopups} />

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
