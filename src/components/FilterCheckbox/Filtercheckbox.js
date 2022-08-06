import "./FilterCheckbox.css";

function FilterCheckbox(props) {
  return (
    <section className="filterCheckbox__container">
      <input
        className="filterCheckbox"
        type="checkbox"
        id="check-1"
        checked={props.checkBoxStatus}
        onChange={props.onCheckBoxChange}
      />
      <label htmlFor={"check-1"} className="filterCheckbox__label">
        Короткометражки
      </label>
    </section>
  );
}

export default FilterCheckbox;
