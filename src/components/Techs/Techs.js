import "./Techs.css";

function Techs() {
  return (
    <div className="techs__container">
      <div className="techs__caption">
        <h2 className="techs__caption-text">Технологии</h2>
      </div>
      <h3 className="techs__header-text">7 технологий</h3>
      <h4 className="techs__subheader-text">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </h4>
        <ul className="techs__list">
            <li className="techs__list-item">HTML</li>
            <li className="techs__list-item">CSS</li>
            <li className="techs__list-item">JS</li>
            <li className="techs__list-item">React</li>
            <li className="techs__list-item">Git</li>
            <li className="techs__list-item">Express.js</li>
            <li className="techs__list-item">MongoDB</li>
        </ul>
    </div>
  );
}

export default Techs;
