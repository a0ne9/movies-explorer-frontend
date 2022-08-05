import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import React from "react";
import {useLocation} from "react-router";


function MoviesCardList(props) {


  const currentPath = useLocation()
  return (
    <ul className="movies__card-list">
      {props.movies.map((movie) => (
        <MoviesCard
          name={movie.nameRU}
          imageLink={currentPath.pathname==="/movies"? movie.image.url : movie.image}
          minutes={movie.duration}
          isLiked={movie.isLiked}
          id={movie.id}
          key={movie.id}
          movie={movie}
          savedMovies={props.savedMovies}
          onLike={props.onLike}
          trailerLink = {movie.trailerLink}
          onDelete={props.onDelete}
        />
      ))}
    </ul>
  );
}

export default MoviesCardList;
