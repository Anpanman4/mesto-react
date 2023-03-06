import React from "react";

function Register() {
  return (
    <>
      <section className="sign">
        <h1 className="sign__title">Регистрация</h1>
        <form className="sign__form">
          <input className="sign__input" type="email" name="Email" placeholder="Email" autoComplete="off" required minLength="2" maxLength="40" />
          <input className="sign__input" type="password" name="password" placeholder="Пароль" autoComplete="off" required minLength="2" maxLength="40" />
          <button className="sign__button">Зарегистрироваться</button>
        </form>
        <p className="sign__change">Уже зарегистрированы? Войти</p>
      </section>
    </>
  )
}

export default Register