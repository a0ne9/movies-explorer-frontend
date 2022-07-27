import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

import  {Movies}  from "../../utils/Movies";

function MoviesCardList() {
  return (
    <ul className="movies__card-list">
      {Movies.map((movie) => (
        <MoviesCard
          imageLink={movie.link}
          isLiked={movie.isLiked}
          id={movie.id}
          key={movie.id}
        />
      ))}
    </ul>
  );
}

export default MoviesCardList;
