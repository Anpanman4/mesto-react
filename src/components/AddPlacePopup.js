import React, { useContext } from "react";

import PopupWithForm from './PopupWithForm.js'

import { CurrentUserContext } from '../contexts/CurrentUserContext.js'

function AddPlacePopup({isOpen, onClose}) {
  const currentUser = useContext(CurrentUserContext);
  
  return (
    <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isOpen} onClose={onClose}>
      <form className="popup__form" name="new-avatar" onSubmit={handleSubmit} noValidate>
        <section className="popup__section">
          <input className="popup__field popup__field_type_image" type="url" name="avatar" onChange={onChangeAvatar} placeholder="Ссылка на картинку" autoComplete="off" required />
          <span className="popup__field-error"></span>
        </section>
        <button className="popup__save-button">Сохранить</button>
      </form>
    </PopupWithForm>
  )
}

export default AddPlacePopup