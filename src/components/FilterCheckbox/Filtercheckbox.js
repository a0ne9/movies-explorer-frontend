import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <div className="filterCheckbox__container">
      <input className="filterCheckbox" type="checkbox" id="check-1"/>
        <label htmlFor={"check-1"} className="filterCheckbox__label">Короткометражки</label>
    </div>
  );
}

export default FilterCheckbox;
