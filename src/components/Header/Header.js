import "./Header.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
import Navigation from "../Navigation/Navigation";

function Header(props) {

  const navigate = useNavigate();
  return (
    <header
      className={
        !props.loggedIn
          ? "header__container"
          : "header__container header__container_background_white"
      }
    >
      <div
        className="header__logo"
        onClick={() => {
          navigate("/");
        }}
      />
      {props.loggedIn ? (
        <Navigation />
      ) : (
        <div className="header__navigation">
          <div className="header__nav-main">
            <NavLink className="header__register" to="/signup">
              Регистрация
            </NavLink>
            <button
              type="button"
              className="header__login-button"
              onClick={() => {
                navigate("/signin");
              }}
            >
              Войти
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
