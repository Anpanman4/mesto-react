import React from "react";

function PopupWithForm({name, title, buttonTitle, isOpen, onClose, children}) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button className="popup__close-button" type="button" aria-label="Закрыть" onClick={onClose}></button>
        <h2 className="popup__title">{title}</h2>
        {children}
        <button className="popup__save-button">{buttonTitle}</button>
      </div>
    </div>
  )
}

export default PopupWithForm