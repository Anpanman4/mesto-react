import React from 'react';
import {useEffect, useState} from 'react';

import '../index.css'

import Header from "./Header.js";
import Footer from "./Footer.js";
import Main from "./Main.js"
import ImagePopup from "./ImagePopup.js";
import PopupWithForm from "./PopupWithForm.js";

import api from "../utils/api.js"

function App() {
  const [ isOpenPopupEdit, setIsOpenPopupEdit ] = React.useState(false);
  const [ isOpenPopupAdd, setIsOpenPopupAdd ] = React.useState(false);
  const [ isOpenPopupAvatar, setIsOpenPopupAvatar ] = React.useState(false);
  const [ isOpenPopupDelete, setIsOpenPopupDelete ] = React.useState(false);

  const [ selectedCard, setSelectedCard ] = React.useState(null);

  const [ userName, setUserName ] = useState("");
  const [ userDescription, setUserDescription ] = useState("");
  const [ userAvatar, setUserAvatar ] = useState("");

  const [ cards, setCards ] = useState([]);

  const closeAllPopups = () => {
    setIsOpenPopupEdit(false);
    setIsOpenPopupAdd(false);
    setIsOpenPopupAvatar(false);
    setIsOpenPopupDelete(false);
    setSelectedCard(null);
  }

  useEffect(() => {
    api.getUserValues()
    .then((data) => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
    })
    .catch((err) => console.log(err))
  }, [userName, userDescription, userAvatar])

  useEffect(() => {
    api.getInitialCards()
    .then((data) => {
      setCards(data)
    })
    .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <Header altText="Логотип Место" />

      <Main
        userName={userName}
        userAbout={userDescription}
        userAvatar={userAvatar}
        cards={cards}
        handleEditAvatarClick={setIsOpenPopupAvatar}
        handleEditProfileClick={setIsOpenPopupEdit}
        handleAddPlaceClick={setIsOpenPopupAdd}
        setSelectedCard={setSelectedCard}
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
    </>
  );
}

export default App;
