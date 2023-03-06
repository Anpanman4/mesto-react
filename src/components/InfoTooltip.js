import React from "react";

import Success from "../images/Success.svg"
import Fail from "../images/Fail.svg"

function InfoTooltip() {
  const isSuccess = true;

  return (
    <div className="popup">
      <div className="popup__container">
        <button className="popup__close-button" type="button" aria-label="Закрыть"></button>
        <img className="popup__alert" src={isSuccess ? Success : Fail} alt="Успешно" />
        <h2 className="popup__title-alert">{isSuccess ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте ещё раз."}</h2>
      </div>
    </div>
  )
}

export default InfoTooltip