import "./Profile.css";
import Header from "../Header/Header";
import "../Form/Form.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext/CurrentUserContext";
import React from "react";

function Profile(props) {
  const [defaultName, setDefaultName] = React.useState("");
  const [headerName, setHeaderName] = React.useState("");
  const [name, setName] = React.useState("");
  const [defaultEmail, setDefaultEmail] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [disabled, setDisabled] = React.useState(true);
  const [requestMessage, setRequestMessage] = React.useState("");


  const currentUser = React.useContext(CurrentUserContext);


  React.useEffect(() => {
    console.log("check")
    console.log(currentUser)
    setName(currentUser.name);
    setEmail(currentUser.email);
    setHeaderName(currentUser.name)
    setDefaultName(currentUser.name);
    setDefaultEmail(currentUser.email);
    setRequestMessage("")
  }, []);



  function handleNameChange(e) {
    const error = e.target.validationMessage;
    setName(e.target.value);
    if (name !== defaultName && !error) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }

  function handleEmailChange(e) {
    const error = e.target.validationMessage;
    setEmail(e.target.value);
    if (email !== defaultEmail && !error) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }

  function handleSubmit(e) {
    setRequestMessage(props.requestStatus)
    e.preventDefault();
    props.onSubmit(name, email);
    setHeaderName(name)
    setDisabled(true)
  }

  return (
    <>
      <Header />
      <form className="form" action="#" onSubmit={handleSubmit}>
        <h2 className="form__title">{`Привет, ${headerName || currentUser.name}!`}</h2>
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
