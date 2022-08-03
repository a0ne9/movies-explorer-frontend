import "./Movies.css";
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import LoadMore from "../LoadMore/LoadMore";
import { moviesApi } from "../../utils/MoviesApi";

function Movies(props) {
  const screenWidth = window.innerWidth;
  const [maxCards, setMaxCards] = React.useState(0);
  const [moreCards, setMoreCards] = React.useState(0);
  const [searchedMovies, setSearchedMovies] = React.useState([]);
  const [renderingMovies, setRenderingMovies] = React.useState([]);
  const [searchDone, setSearchDone] = React.useState(false);
  const [isSeeking, setIsSeeking] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const [checkboxStatus, setCheckboxStatus] = React.useState(false);
  const [searchStatus, setSearchStatus] = React.useState("");
  const [loadButtonVisible, setLoadButtonVisible] = React.useState(false);

  //localStorage.clear()
  // console.log(localStorage);

  React.useEffect(() => {
    if (localStorage.getItem("foundMovies")) {
      const defaultMovies = JSON.parse(localStorage.getItem("foundMovies"));
      setSearchedMovies(defaultMovies);
    }
  }, []);

  React.useEffect(() => {
    if (searchedMovies.length > maxCards) {
      setLoadButtonVisible(true);
    } else {
      setLoadButtonVisible(false);
    }
    setRenderingMovies(searchedMovies.slice(0, maxCards));
  }, [searchedMovies, inputValue, checkboxStatus]);

  React.useEffect(() => {
    if (screenWidth > 1200) {
      setMaxCards(12);
      setMoreCards(4);
    } else if (screenWidth < 1200 && screenWidth > 750) {
      setMaxCards(8);
      setMoreCards(2);
    } else if (screenWidth < 750) {
      setMaxCards(5);
      setMoreCards(1);
    }
  }, [screenWidth, maxCards]);

  function handleMoreButtonClick() {
    if (renderingMovies.length < searchedMovies.length) {
      setRenderingMovies((state) =>
        searchedMovies.slice(0, state.length + moreCards)
      );
    } else setLoadButtonVisible(false);
  }

  function filterMovies(movies, value, checkboxStatus) {
    let filteredMovies = movies;
    let result;

    if (checkboxStatus) {
      filteredMovies = filteredMovies.filter((movie) => movie.duration <= 40);
    }

    result = filteredMovies.filter((movie) => {
      return movie.nameRU.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    });
    return result;
  }

  const handleSearch = (value, checkboxStatus) => {
    localStorage.setItem("inputValue", value);
    setInputValue(value);
    setCheckboxStatus(checkboxStatus);
    setIsSeeking(true);
    moviesApi
      .getMovies()
      .then((data) => {
        const res = filterMovies(data, value, checkboxStatus);
        setSearchedMovies(res);
        localStorage.setItem("foundMovies", JSON.stringify(res));
      })
      .catch(() => {
        setSearchStatus(
          "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз."
        );
      })
      .finally(() => {
        setIsSeeking(false);
        setSearchDone(true);
      });
  };

  return (
    <>
      <Header />
      <SearchForm onSearch={handleSearch} />
      {isSeeking ? (
        <Preloader />
      ) : renderingMovies.length > 0 ? (
        <MoviesCardList
          movies={renderingMovies}
          savedMovies={props.savedMovies}
          onLike={props.onLike}
          onDelete={props.onDelete}
        />
      ) : renderingMovies.length === 0 && searchDone ? (
        <span className="movies__not-found">Ничего не найдено</span>
      ) : (
        <span className="movies__not-found">{searchStatus}</span>
      )}

      <LoadMore
        isButtonVisible={loadButtonVisible}
        handleClick={handleMoreButtonClick}
      />
      <Footer />
    </>
  );
}

export default Movies;
