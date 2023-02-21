import React, {useEffect, useState} from 'react';

import '../index.css'

import Header from "./Header.js";
import Footer from "./Footer.js";
import Main from "./Main.js"
import ImagePopup from "./ImagePopup.js";
import PopupWithForm from "./PopupWithForm.js";
import EditProfilePopup from "./EditProfilePopup.js";

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
      });
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
      setCards(newCards);
    })
    .catch((err) => console.log(err))
  }

  const deleteCard = (id) => {
    api.deleteCard(id)
    .then(() => {
      const newCards = cards.filter(card => card._id !== id);
      setCards(newCards);
    })
    .catch((err) => console.log(err))
  }

  const handleProfileSubmit = (info) => {
    api.updateUserValues(info)
    .then((data) => {
      setCurrentUser(data);
      closeAllPopups();
    })
    .catch((err) => console.log(err));
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
          handleCardDelete={deleteCard}
        />

        <Footer />

        <EditProfilePopup isOpen={isOpenPopupEdit} onClose={closeAllPopups} onUpdateUser={handleProfileSubmit} />

        <PopupWithForm name="add" title="Новое место" isOpen={isOpenPopupAdd} onClose={closeAllPopups}>
          <form className="popup__form" name="new-card" noValidate>
            <section className="popup__section">
              <input className="popup__field popup__field_type_name" type="text" name="name" placeholder="Название" autoComplete="off" required minLength="2" maxLength="30" />
              <span className="popup__field-error"></span>
            </section>
            <section className="popup__section">
              <input className="popup__field popup__field_type_image" type="url" name="link" placeholder="Ссылка на картинку" autoComplete="off" required />
              <span className="popup__field-error"></span>
            </section>
            <button className="popup__save-button">Создать</button>
          </form>
        </PopupWithForm>

        <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isOpenPopupAvatar} onClose={closeAllPopups}>
          <form className="popup__form" name="new-avatar" noValidate>
            <section className="popup__section">
              <input className="popup__field popup__field_type_image" type="url" name="avatar" defaultValue={currentUser.avatar} placeholder="Ссылка на картинку" autoComplete="off" required />
              <span className="popup__field-error"></span>
            </section>
            <button className="popup__save-button">Сохранить</button>
          </form>
        </PopupWithForm>

        <PopupWithForm name="delete" title="Вы уверены?" isOpen={isOpenPopupDelete} onClose={closeAllPopups}>
        <button className="popup__save-button">Да</button>
        </PopupWithForm>

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
