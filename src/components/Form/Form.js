import React from "react";
import "./Form.css";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router";
import Logo from "../../vendor/images/header__logo.svg";

function Form(props) {
  const currentPath = useLocation();
  const navigate = useNavigate();

  return (
    <form className="form">
      <img
        className={
          currentPath.pathname === "/profile"
            ? "form__hidden-element"
            : "form__logo"
        }
        src={Logo}
        onClick={() => {
          navigate("/");
        }}
        alt="logo"
      />
      <h2
        className={
          currentPath.pathname === "/profile"
            ? "form__title"
            : "form__title form__title-reg"
        }
      >
        {props.title}
      </h2>
      <div
        className={
          currentPath.pathname === "/profile"
            ? "form__input-container"
            : currentPath.pathname === "/signin"
            ? "form__hidden-element"
            : "form__input-container form__input-container-reg"
        }
      >
        <p
          className={
            currentPath.pathname === "/profile"
              ? "form__input-title"
              : "form__input-title form__input-title-reg"
          }
        >
          Имя
        </p>
        <input
          name="name"
          type="name"
          className={
            currentPath.pathname === "/profile"
              ? "form__input"
              : "form__input form__input-reg"
          }
          placeholder="Имя"
          id="name-field"
          minLength="2"
          maxLength="40"
          required
          defaultValue={props.nameValue}
        />
        <span
          className={
            nameTouched === true
              ? "form__error-span form__error-span_visible"
              : "form__error-span"
          }
        >
          {nameError}
        </span>
      </div>

      <div
        className={
          currentPath.pathname === "/profile"
            ? "form__input-container"
            : "form__input-container form__input-container-reg"
        }
      >
        <p
          className={
            currentPath.pathname === "/profile"
              ? "form__input-title"
              : "form__input-title form__input-title-reg"
          }
        >
          E-mail
        </p>
        <input
          name="email"
          type="email"
          className={
            currentPath.pathname === "/profile"
              ? "form__input"
              : "form__input form__input-reg"
          }
          placeholder="Email"
          id="Email-field"
          minLength="2"
          maxLength="40"
          required
          defaultValue={props.emailValue}
        />
      </div>

      <div
        className={
          currentPath.pathname === "/profile"
            ? "form__hidden-element"
            : "form__input-container form__input-container-reg"
        }
      >
        <p className="form__input-title form__input-title-reg">Пароль</p>
        <input
          name="password"
          type="password"
          className={
            currentPath.pathname === "/profile"
              ? "form__hidden-element"
              : "form__input form__input-reg"
          }
          placeholder="Пароль"
          id="password-field"
          minLength="2"
          maxLength="40"
          required
        />
      </div>

      <button
        type="submit"
        className={
          currentPath.pathname === "/profile"
            ? "form__button"
            : "form__button form__button-reg"
        }
      >
        {props.buttonText}
      </button>
      <div className="form__link-container">
        <p
          className={
            currentPath.pathname === "/profile"
              ? "form__hidden-element"
              : "form__link-caption"
          }
        >
          {currentPath.pathname === "/signup"
            ? "Уже зарегистрированы?"
            : "Ещё не зарегистрированы?"}
        </p>
        <Link
          className={
            currentPath.pathname === "/profile"
              ? "form__link"
              : "form__link form__link-reg"
          }
          to={
            currentPath.pathname === "/profile"
              ? "/signin"
              : currentPath.pathname === "/signin"
              ? "/signup"
              : "/signin"
          }
        >
          {currentPath.pathname === "/profile"
            ? "Выйти из аккаунта"
            : currentPath.pathname === "/signup"
            ? "Войти"
            : "Регистрация"}
        </Link>
      </div>
    </form>
  );
}

export default Form;
