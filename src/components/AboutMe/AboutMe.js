import "./AboutMe.css";
import profilePic from "../../vendor/images/profile__pic.svg";

function AboutMe() {
  return (
    <section className="aboutMe__container">
      <div className="aboutMe__caption">
        <h2 className="aboutMe__caption-text">Студент</h2>
      </div>
      <div className="aboutMe__info">
        <div className="aboutMe__text-container">
          <h3 className="aboutMe__header">Виталий</h3>
          <h4 className="aboutMe__subheader">Фронтенд-разработчик, 30 лет</h4>
          <p className="aboutMe__text">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <div className="aboutMe__links">
            <p className="aboutMe__link">Facebook</p>
            <p className="aboutMe__link">Github</p>
          </div>
        </div>
        <img className="aboutMe__photo" src={profilePic} alt="фото профиля" />
      </div>
    </section>
  );
}

export default AboutMe;
