import "./Profile.css";
import Header from "../Header/Header";
import "../Form/Form.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext/CurrentUserContext";
import api from "../../utils/MainApi";
import React from "react";

function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [defaultName, setDefaultName] = React.useState("");
  const [name, setName] = React.useState("");
  const [defaultEmail, setDefaultEmail] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [requestMessage, setRequestMessage] = React.useState(props.requestStatus);
  const [isValid, setIsValid] = React.useState(false);
  const [errors, setErrors] = React.useState({})
  const [isLoading, setIsLoading] = React.useState(false)

  const disabled = isValid===false || (defaultName === name && defaultEmail === email) || isLoading


  React.useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  React.useEffect(() => {
    setRequestMessage(props.requestStatus)
    setIsLoading(props.requestSending)
    api.getUser().then(res => {
      setName(res.name)
      setDefaultName(res.name)
      setEmail(res.email)
      setDefaultEmail(res.email)
    }).catch(err => {
      console.log(err)
    })
  }, [props]);



  function handleNameChange(e) {
    setName(e.target.value);
    setErrors({ ...errors, [e.target.name]: e.target.validationMessage });
    setIsValid(e.target.closest("form").checkValidity());
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
    setErrors({ ...errors, [e.target.name]: e.target.validationMessage });
    setIsValid(e.target.closest("form").checkValidity());
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit(name, email);
  }

  return (
    <>
      <Header loggedIn={props.loggedIn}/>
      <form className="form" action="#" onSubmit={handleSubmit}>
        <h2 className="form__title">{`Привет, ${currentUser.name}!`}</h2>
        <div className="form__input-container">
          <p className="form__input-title">Имя</p>
          <div className="form__span-container">
            <input
              name="name"
              type="name"
              className="form__input"
              placeholder="Имя"
              id="name-field"
              minLength="2"
              maxLength="40"
              required
              value={name || ""}
              onChange={handleNameChange}
            />
            <span className="profile__span">{errors.name}</span>
          </div>
        </div>

        <div className="form__input-container">
          <p className="form__input-title">E-mail</p>
          <div className="form__span-container">
            <input
              name="email"
              type="email"
              className="form__input"
              placeholder="Email"
              id="Email-field"
              minLength="2"
              maxLength="40"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              value={email || ""}
              onChange={handleEmailChange}
            />
            <span className="profile__span">{errors.email}</span>
          </div>
        </div>
        <span className="form__request-status"> {requestMessage} </span>
        <button type="submit" className="form__button" disabled={disabled}>
          Редактировать
        </button>
        <div className="form__link-container">
          <button onClick={props.onLogout} className="form__link">
            Выйти из аккаунта
          </button>
        </div>
      </form>
    </>
  );
}

export default Profile;
