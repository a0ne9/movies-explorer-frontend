import React from "react";
import "./Form.css";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router";
import Logo from "../../vendor/images/header__logo.svg";
import { useFormWithValidation } from "../../utils/FormValidation";

function Form(props) {
  const currentPath = useLocation();
  const navigate = useNavigate();
  const [requestMessage, setRequestMessage] = React.useState("");

  const { values, handleChange, resetFrom, errors, isValid } =
    useFormWithValidation();

  const disabled = !isValid && !props.requestSanding;

  React.useEffect(() => {
    setRequestMessage("");
  }, []);

  function handleRegistrationSubmit(e) {
    setRequestMessage(props.requestStatus);
    e.preventDefault();
    props.onSubmit({
      name: values.name,
      email: values.email,
      password: values.password,
    });
  }

  function handleLoginSubmit(e) {
    setRequestMessage(props.requestStatus);
    e.preventDefault();
    props.onSubmit({ email: values.email, password: values.password });
    console.log("login srabotal");
  }

  return (
    <form
      className="form"
      action="#"
      onSubmit={
        currentPath.pathname === "/signup"
          ? handleRegistrationSubmit
          : handleLoginSubmit
      }
    >
      <img
        className="form__logo"
        src={Logo}
        onClick={() => {
          navigate("/");
        }}
        alt="logo"
      />
      <h2 className="form__title form__title-reg">{props.title}</h2>
      {currentPath.pathname === "/signup" ? (
        <div className="form__input-container form__input-container-reg">
          <p className="form__input-title form__input-title-reg">Имя</p>
          <input
            name="name"
            type="name"
            className="form__input form__input-reg"
            placeholder="Имя"
            id="name-field"
            minLength="2"
            maxLength="40"
            required
            value={values.name || ""}
            onChange={handleChange}
          />
          <span className="form__input-error">{errors.name || ""}</span>
        </div>
      ) : (
        <></>
      )}

      <div className="form__input-container form__input-container-reg">
        <p className="form__input-title form__input-title-reg">E-mail</p>
        <input
          name="email"
          type="email"
          className="form__input form__input-reg"
          placeholder="Email"
          id="Email-field"
          minLength="2"
          maxLength="40"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          value={values.email || ""}
          onChange={handleChange}
        />
        <span className="form__input-error">{errors.email || ""}</span>
      </div>
      <div className="form__input-container form__input-container-reg">
        <p className="form__input-title form__input-title-reg">Пароль</p>
        <input
          name="password"
          type="password"
          className="form__input form__input-reg"
          placeholder="Пароль"
          id="password-field"
          minLength="2"
          maxLength="40"
          required
          value={values.password || ""}
          onChange={handleChange}
        />
        <span className="form__input-error">{errors.password || ""}</span>
      </div>
      <span className="form__request-status">{requestMessage}</span>
      <button
        type="submit"
        className="form__button form__button-reg"
        disabled={disabled}
      >
        {props.buttonText}
      </button>
      <div className="form__link-container">
        <p className="form__link-caption">
          {currentPath.pathname === "/signup"
            ? "Уже зарегистрированы?"
            : "Ещё не зарегистрированы?"}
        </p>
        <Link
          className="form__link form__link-reg"
          to={currentPath.pathname === "/signin" ? "/signup" : "/signin"}
        >
          {currentPath.pathname === "/signup" ? "Войти" : "Регистрация"}
        </Link>
      </div>
    </form>
  );
}

export default Form;
