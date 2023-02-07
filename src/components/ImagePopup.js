import React from "react";

function ImagePopup() {
  return (
    <div className="popup popup_type_image">
      <div className="popup__image-container">
        <button className="popup__close-button" type="button" aria-label="Закрыть"></button>
        <img className="popup__image" src="#" alt="" />
        <h2 className="popup__text">{""}</h2>
      </div>
    </div>
  )
}

export default ImagePopup