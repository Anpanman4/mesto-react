import React from "react";
import Trash from "../images/Trash.svg"

function Card({card, onCardClick}) {
  const handleCardClick = () => {
    onCardClick(card)
  }

  return (
    <li className="element">
      <img className="element__trash" src={Trash} alt="удалить" />
      <img className="element__image" src={card.link} alt={card.name} onClick={handleCardClick} />
      <div className="element__container">
        <h2 className="element__place">{card.name}</h2>
        <div className="element__like-container">
          <button className="element__like" type="button" aria-label="Нравится"></button>
          <span className="element__likes-number">{card.likes.length}</span>
        </div>
      </div>
    </li>
  )
}

export default Card