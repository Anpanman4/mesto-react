import React from "react";

function Main({userName, userAbout, userAvatar}) {
  return (
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
  )
}

export default Main