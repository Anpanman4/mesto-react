import React from "react";

function Login() {
  return (
    <>
      <section className="sign">
        <h1 className="sign__title">Вход</h1>
        <form className="sign__form">
          <input className="sign__input" type="email" name="Email" placeholder="Email" autoComplete="off" required minLength="2" maxLength="40" />
          <input className="sign__input" type="password" name="password" placeholder="Пароль" autoComplete="off" required minLength="2" maxLength="40" />
          <button className="sign__button">Войти</button>
        </form>
      </section>
    </>
  )
}

export default Login