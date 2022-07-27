import "./MoviesCard.css";
import { useLocation } from "react-router";

function MoviesCard(props) {
  const currentPath = useLocation();
  return (
    <li className="movies__card">
      <img alt="постер" src={props.imageLink} className="movies__card-image"/>
      <div className="movies__card-caption">
        <div className="movies__card-info">
          <h2 className="movies__card-name">33 слова о дизайне</h2>
          <p className="movies__card-duration">1ч42м</p>
        </div>
        <button
          className={
            currentPath.pathname === "/saved-movies"
              ? "movies__card-button_delete"
              : props.isLiked
              ? "movies__card-button movies__card-button_liked"
              : "movies__card-button"
          }
        />
      </div>
    </li>
  );
}

export default MoviesCard;
