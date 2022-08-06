import "./Techs.css";

function Techs() {
  return (
    <section className="techs__container">
      <div className="techs__caption">
        <h2 className="techs__caption-text">Технологии</h2>
      </div>
      <h3 className="techs__header-text">7 технологий</h3>
      <h4 className="techs__subheader-text">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </h4>
      <ul className="techs__list">
        <li className="techs__list-item">
          <p className="techs__list-text">HTML</p>
        </li>
        <li className="techs__list-item">
          <p className="techs__list-text">CSS</p>
        </li>
        <li className="techs__list-item">
          <p className="techs__list-text">JS</p>
        </li>
        <li className="techs__list-item">
          <p className="techs__list-text">React</p>
        </li>
        <li className="techs__list-item">
          <p className="techs__list-text">Git</p>
        </li>
        <li className="techs__list-item">
          <p className="techs__list-text">Express.js</p>
        </li>
        <li className="techs__list-item">
          <p className="techs__list-text">MongoDB</p>
        </li>
      </ul>
    </section>
  );
}

export default Techs;
