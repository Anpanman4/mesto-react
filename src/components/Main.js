import React from "react";

function Main({userName, userAbout, userAvatar}) {
  return (
    <>
      <main>
        <section className="profile">
          <div className="profile__container">
            <div className="profile__avatar-cover">
              <img className="profile__avatar" src={userAvatar} alt="Аватарка" />
            </div>
            <div className="profile__info">
              <h1 className="profile__name">{userName}</h1>
              <button className="profile__edit-button" type="button" aria-label="Редактирование"></button>
              <p className="profile__job">{userAbout}</p>
            </div>
          </div>
          <button className="profile__add-button" type="button" aria-label="Добавить карточку"></button>
        </section>

        <section>
          <ul className="elements">

          </ul>
        </section>
      </main>

      <div className="popup popup_type_edit">
        <div className="popup__container">
          <button className="popup__close-button" type="button" aria-label="Закрыть"></button>
          <h2 className="popup__title">Редактировать профиль</h2>
          <form className="popup__form" name="personal-information" noValidate>
            <section className="popup__section">
              <input className="popup__field popup__field_type_name" type="text" name="name" placeholder="Ваше имя" autoComplete="off" required minLength="2" maxLength="40" />
              <span className="popup__field-error"></span>
            </section>
            <section className="popup__section">
              <input className="popup__field popup__field_type_job" type="text" name="about" placeholder="Чем занимаетесь" autoComplete="off" required minLength="2" maxLength="200" />
              <span className="popup__field-error"></span>
            </section>
            <button className="popup__save-button" type="submit">Сохранить</button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_add">
        <div className="popup__container">
          <button className="popup__close-button" type="button" aria-label="Закрыть"></button>
          <h2 className="popup__title">Новое место</h2>
          <form className="popup__form" name="new-card" noValidate>
            <section className="popup__section">
              <input className="popup__field popup__field_type_name" type="text" name="name" placeholder="Название" autoComplete="off" required minLength="2" maxLength="30" />
              <span className="popup__field-error"></span>
            </section>
            <section className="popup__section">
              <input className="popup__field popup__field_type_image" type="url" name="link" placeholder="Ссылка на картинку" autoComplete="off" required />
              <span className="popup__field-error"></span>
            </section>
            <button className="popup__save-button popup__save-button_inactive" type="submit" disabled>Создать</button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_image">
        <div className="popup__image-container">
          <button className="popup__close-button" type="button" aria-label="Закрыть"></button>
          <img className="popup__image" src="#" alt="" />
          <h2 className="popup__text">{""}</h2>
        </div>
      </div>

      <div className="popup popup_type_avatar">
        <div className="popup__container">
          <button className="popup__close-button" type="button" aria-label="Закрыть"></button>
          <h2 className="popup__title">Обновить аватар</h2>
          <form className="popup__form" name="new-avatar" noValidate>
            <section className="popup__section">
              <input className="popup__field popup__field_type_image" type="url" name="avatar" placeholder="Ссылка на картинку" autoComplete="off" required />
              <span className="popup__field-error"></span>
            </section>
            <button className="popup__save-button popup__save-button_inactive" type="submit" disabled>Сохранить</button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_delete">
        <div className="popup__container">
          <button className="popup__close-button" type="button" aria-label="Закрыть"></button>
          <h2 className="popup__title">Вы уверены?</h2>
          <button className="popup__save-button">Да</button>
        </div>
      </div>
    </>
  )
}

export default Main