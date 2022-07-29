import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import profileLogo from "../../vendor/images/header__profile-logo.svg";

function Navigation() {
  const [sideBarVisible, toggleSideBarVisibility] = React.useState(false);

  function handleDropdown() {
    toggleSideBarVisibility(!sideBarVisible);
  }

  return (
    <nav className="navigation">
      <button
        className="navigation__open-button"
        type="button"
        onClick={handleDropdown}
      ></button>
      <div
        className={`navigation__container ${
          sideBarVisible ? "navigation__container_visible" : ""
        }`}
      >
        <div
          className={
            sideBarVisible
              ? "navigation__sidebar navigation__sidebar_visible"
              : "navigation__sidebar"
          }
        >
          <button
            className="navigation__close-button"
            type="button"
            onClick={handleDropdown}
          ></button>
          <NavLink to="/" className="navigation__main-link">
            Главная
          </NavLink>
          <NavLink
            to="/movies"
            activeClassName="navigation__movies-link_active"
            className="navigation__movies-link"
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            activeClassName="navigation__movies-link_active"
            className="navigation__saved-movies-link"
          >
            Сохраненные фильмы
          </NavLink>
          <NavLink
            to="/profile"
            activeClassName="navigation__movies-link_active"
            className="navigation__profile-link"
          >
            Аккаунт{" "}
            <img
              src={profileLogo}
              alt="logo"
              className="navigation__profile-icon"
            />
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
