import "./Footer.css";

function Footer() {
  return (
    <div className="footer__container">
      <div className="footer__caption">
        <p className="footer__caption-text">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
      </div>
      <div className="footer__bottom-container">
        <p className="footer__copyright">© 2022</p>
        <div className="footer__socials">
          <p className="footer__socials-text">Яндекс.Практикум</p>
          <p className="footer__socials-text">Github</p>
          <p className="footer__socials-text">Facebook</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
