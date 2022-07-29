import "./Portfolio.css";
import linkIcon from "../../vendor/images/portfolio__link-icon.svg";

function Portfolio() {
  return (
    <section className="portfolio__container">
      <h2 className="portfolio__header">Портфолио</h2>
      <ul className="portfolio__links">
        <li className="portfolio__link-container">
          <a
            className="portfolio__link"
            href="https://a0ne9.github.io/russian-travel/"
            target="_blank"
          >
            <p className="portfolio__link-text">Статичный сайт</p>
            <img
              className="portfolio__link-image"
              src={linkIcon}
              alt="иконка ссылки"
            />
          </a>
        </li>
        <li className="portfolio__link-container">
          <a
            href="https://a0ne9.github.io/mesto/"
            className="portfolio__link"
            target="_blank"
          >
            <p className="portfolio__link-text">Адаптивный сайт</p>
            <img
              className="portfolio__link-image"
              src={linkIcon}
              alt="иконка ссылки"
            />
          </a>
        </li>
        <li className="portfolio__link-container">
          <a
            target="_blank"
            href="https://mestodomain.students.nomoredomains.xyz/"
            className="portfolio__link"
          >
            <p className="portfolio__link-text">Одностраничное приложение</p>
            <img
              className="portfolio__link-image"
              src={linkIcon}
              alt="иконка ссылки"
            />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
