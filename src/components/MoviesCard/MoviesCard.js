import "./MoviesCard.css";
import { useLocation } from "react-router";

function MoviesCard(props) {
  const currentPath = useLocation();

  const isLiked =
    props.movie.id &&
    props.savedMovies.some((mov) => mov.movieId === props.movie.id);

  function setDuration(minutes) {
    const hours = Math.floor(minutes / 60);
    const min = minutes % 60;
    const result = hours > 0 ? `${hours}ч ${min}м` : `${min}м`;

    return result;
  }

  function handleMovieLike() {
    if (!isLiked) {
      props.onLike({
        country: props.movie.country,
        director: props.movie.director,
        duration: props.movie.duration,
        year: props.movie.year,
        description: props.movie.description,
        image: `https://api.nomoreparties.co/${props.movie.image.url}`,
        trailerLink: props.movie.trailerLink,
        thumbnail: `https://api.nomoreparties.co/${props.movie.image.formats.thumbnail.url}`,
        movieId: props.movie.id,
        nameRU: props.movie.nameRU,
        nameEN: props.movie.nameEN,
      });
    } else if (isLiked) {
      const movie = props.savedMovies.filter((mov) => mov.movieId === props.movie.id )
      props.onDelete(movie[0])
    }
  }

  function handleDelete() {
    props.onDelete(props.movie)
  }

  return (
    <li className="movies__card">
      <a href={props.movie.trailerLink} target="_blank">
        <img
          alt="постер"
          src={currentPath.pathname==="/movies"? `https://api.nomoreparties.co/${props.imageLink}` : props.imageLink}
          className="movies__card-image"
        />
      </a>

      <div className="movies__card-caption">
        <div className="movies__card-info">
          <h2 className="movies__card-name">{props.name}</h2>
          <p className="movies__card-duration">{setDuration(props.minutes)}</p>
        </div>
        {currentPath.pathname ==="/movies" ? <button
            onClick={handleMovieLike}
            type="button"
            className={
               isLiked
                      ? "movies__card-button movies__card-button_liked"
                      : "movies__card-button"
            }
        /> : <button className="movies__card-button movies__card-button_delete" onClick={handleDelete}/> }

      </div>
    </li>
  );
}

export default MoviesCard;
