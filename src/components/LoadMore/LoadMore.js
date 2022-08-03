import "./LoadMore.css";

function LoadMore(props) {
  return (
    <section className="loadMore__container">
      <button
        type="button"
        className={
          props.isButtonVisible ? "loadMore__button" : "loadMore__button_hidden"
        }
        onClick={props.handleClick}
      >
        Ещё
      </button>
    </section>
  );
}

export default LoadMore;
