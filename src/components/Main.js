import React from "react";
import Card from "./Card.js";

function Main({
  userName,
  userAbout,
  userAvatar,
  cards,
  handleEditAvatarClick,
  handleEditProfileClick,
  handleAddPlaceClick,
  setSelectedCard
}) {
  return (
    <>
      <main>
        <section className="profile">
          <div className="profile__container">
            <div className="profile__avatar-cover" onClick={() => handleEditAvatarClick(true)}>
              <img className="profile__avatar" src={userAvatar} alt="Аватарка" />
            </div>
            <div className="profile__info">
              <h1 className="profile__name">{userName}</h1>
              <button className="profile__edit-button" type="button" aria-label="Редактирование" onClick={() => handleEditProfileClick(true)}></button>
              <p className="profile__job">{userAbout}</p>
            </div>
          </div>
          <button className="profile__add-button" type="button" aria-label="Добавить карточку" onClick={() => handleAddPlaceClick(true)}></button>
        </section>

        <section>
          <ul className="elements">
            {
              cards.map((card) => (
                <Card key={card._id} card={card} onCardClick={setSelectedCard} />
              ))
            }
          </ul>
        </section>
      </main>
    </>
  )
}

export default Main