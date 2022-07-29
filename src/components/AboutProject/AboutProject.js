import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about__container">
      <div className="about__caption">
        <h2 className="about__caption-text">О проекте</h2>
      </div>
      <ul className="about__flex-container">
        <li className="about__grid-item">
          <h3 className="about__grid-header">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about__grid-caption">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className="about__grid-item">
          <h3 className="about__grid-header">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about__grid-caption">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <ul className="about__timing-grid">
        <li className="about__timing-grid-item">
          <h3 className="about__timing-grid-green">1 неделя</h3>
        </li>
        <li className="about__timing-grid-item">
          <h3 className="about__timing-grid-grey">4 недели</h3>
        </li>
        <li className="about__timing-grid-item">
          <h4 className="about__timing-grid-caption">Back-end</h4>
        </li>
        <li className="about__timing-grid-item">
          <h4 className="about__timing-grid-caption">Front-end</h4>
        </li>
      </ul>
    </section>
  );
}

export default AboutProject;
