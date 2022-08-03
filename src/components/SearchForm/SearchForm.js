import React from "react";

import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/Filtercheckbox";
import { useLocation } from "react-router";

function SearchForm(props) {
  const [value, setValue] = React.useState("");
  const [checkboxStatus, setCheckboxStatus] = React.useState(false);
  const location = useLocation();

  function handleValueChange(e) {
    setValue(e.target.value);
    const input = document.getElementById("film-field");
    input.setCustomValidity("");
  }

  function handleChange(checkboxStatus) {
    setCheckboxStatus(checkboxStatus);
    props.onSearch(value, checkboxStatus);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onSearch(value, checkboxStatus);
  }

  const handleCheckboxChange = (e) => {
    handleChange(e.target.checked);
  };

  React.useEffect(() => {
    if (location.pathname === "/movies") {
      const inputValue = localStorage.getItem("inputValue");
      setValue(inputValue);
      const checkboxValue = localStorage.getItem("checkBoxStatus");
      if (checkboxValue === "/true") {
        setCheckboxStatus(true);
      } else {
        setCheckboxStatus(false);
      }
    }
  }, [location.pathname]);

  React.useEffect(() => {
    if (!value) {
      const input = document.getElementById("film-field");
      input.setCustomValidity("Нужно ввести ключевое слово");
    }
  }, [value]);

  return (
    <form className="searchForm__container" onSubmit={handleSubmit}>
      <div className="searchForm__input-container">
        <input
          name="film"
          type="text"
          id="film-field"
          minLength="1"
          maxLength="40"
          placeholder="Фильм"
          className="searchForm__input"
          required
          value={value || ""}
          onChange={handleValueChange}
          aria-errormessage="Нужно ввести ключевое слово"
        />
        <button type="submit" className="searchForm__button" />
      </div>

      <FilterCheckbox
        onCheckBoxChange={handleCheckboxChange}
        checkBoxStatus={checkboxStatus}
      />
    </form>
  );
}

export default SearchForm;
