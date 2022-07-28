import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/Filtercheckbox";

function SearchForm() {
  return (
    <form className="searchForm__container">
      <div className="searchForm__input-container">
        <input
          name="film"
          type="text"
          id="name-field"
          minLength="2"
          maxLength="40"
          placeholder="Фильм"
          className="searchForm__input"
          required
        />
        <button type="submit" className="searchForm__button" />
      </div>

      <FilterCheckbox />
    </form>
  );
}

export default SearchForm;
