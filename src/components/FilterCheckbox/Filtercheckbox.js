import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <section className="filterCheckbox__container">
      <input className="filterCheckbox" type="checkbox" id="check-1"/>
        <label htmlFor={"check-1"} className="filterCheckbox__label">Короткометражки</label>
    </section>
  );
}

export default FilterCheckbox;
