import "./Portfolio.css";
import linkIcon from "../../vendor/images/portfolio__link-icon.svg";
import { NavLink } from "react-router-dom";

function Portfolio() {
  return (
    <section className="portfolio__container">
      <h2 className="portfolio__header">Портфолио</h2>
      <ul className="portfolio__links">
        <li className="portfolio__link-container">
          <NavLink className="portfolio__link" to="*">
            <p className="portfolio__link-text">Статичный сайт</p>
            <img
              className="portfolio__link-image"
              src={linkIcon}
              alt="иконка ссылки"
            />
          </NavLink>
        </li>
        <li className="portfolio__link-container">
          <NavLink to="*" className="portfolio__link">
            {" "}
            <p className="portfolio__link-text">Адаптивный сайт</p>
            <img
              className="portfolio__link-image"
              src={linkIcon}
              alt="иконка ссылки"
            />
          </NavLink>
        </li>
        <li className="portfolio__link-container">
          <NavLink to="*" className="portfolio__link">
            <p className="portfolio__link-text">Одностраничное приложение</p>
            <img
              className="portfolio__link-image"
              src={linkIcon}
              alt="иконка ссылки"
            />
          </NavLink>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
