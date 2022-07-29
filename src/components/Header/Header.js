import "./Header.css";
import { NavLink } from "react-router-dom";
import { useLocation, useNavigate } from "react-router";
import Navigation from "../Navigation/Navigation";

function Header() {
  const currentLocation = useLocation();
  const navigate = useNavigate();
  return (
    <header
      className={
        currentLocation.pathname === "/"
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
      <div className="header__navigation">
        {currentLocation.pathname === "/" ? (
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
        ) : (
          <Navigation />
        )}
      </div>
    </header>
  );
}

export default Header;
