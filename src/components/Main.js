import React from "react";
import Card from "./Card.js";
import ImagePopup from "./ImagePopup.js";
import PopupWithForm from "./PopupWithForm.js";

function Main({userName, userAbout, userAvatar, cards}) {
  const [ isOpenPopupEdit, setIsOpenPopupEdit ] = React.useState(false);
  const [ isOpenPopupAdd, setIsOpenPopupAdd ] = React.useState(false);
  const [ isOpenPopupAvatar, setIsOpenPopupAvatar ] = React.useState(false);
  const [ isOpenPopupDelete, setIsOpenPopupDelete ] = React.useState(false);

  const [ selectedCard, setSelectedCard ] = React.useState(null);

  const closeAllPopups = () => {
    setIsOpenPopupEdit(false);
    setIsOpenPopupAdd(false);
    setIsOpenPopupAvatar(false);
    setIsOpenPopupDelete(false);
    setSelectedCard(null);
  }

  return (
    <>
      <main>
        <section className="profile">
          <div className="profile__container">
            <div className="profile__avatar-cover" onClick={() => setIsOpenPopupAvatar(true)}>
              <img className="profile__avatar" src={userAvatar} alt="Аватарка" />
            </div>
            <div className="profile__info">
              <h1 className="profile__name">{userName}</h1>
              <button className="profile__edit-button" type="button" aria-label="Редактирование" onClick={() => setIsOpenPopupEdit(true)}></button>
              <p className="profile__job">{userAbout}</p>
            </div>
          </div>
          <button className="profile__add-button" type="button" aria-label="Добавить карточку" onClick={() => setIsOpenPopupAdd(true)}></button>
        </section>

        <section>
          <ul className="elements">
            {
              cards.map((card) => (
                <Card key={card.id} card={card} onCardClick={setSelectedCard} />
              ))
            }
          </ul>
        </section>
      </main>

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
  )
}

export default Main