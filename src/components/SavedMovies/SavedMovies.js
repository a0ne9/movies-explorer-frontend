import "./SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import SavedDevider from "../SavedDevider/SavedDevider";
import React from "react";
import Preloader from "../Preloader/Preloader";

function SavedMovies(props) {

  const [savedMovies, setSavedMovies] = React.useState([]);
  const [searchDone, setSearchDone] = React.useState(false);
  const [isSeeking, setIsSeeking] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const [checkboxStatus, setCheckboxStatus] = React.useState(false);
  const [searchStatus, setSearchStatus] = React.useState("");

  //console.log(localStorage);

  React.useEffect(()=> {
    setSavedMovies(props.savedMovies)
  }, [props.savedMovies])

  const handleSearch = (value, checkboxStatus) => {
    setInputValue(value);
    setCheckboxStatus(checkboxStatus);
    setIsSeeking(true);
    const res = filterMovies(props.savedMovies, value, checkboxStatus);
    setSavedMovies(res);
    setIsSeeking(false);
    setSearchDone(true);
  };

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

  return (
    <>
      <Header  loggedIn={props.loggedIn}/>
      <SearchForm onSearch={handleSearch} />
      {isSeeking ? (
        <Preloader />
      ) : props.savedMovies.length > 0 ? (
        <MoviesCardList
          movies={savedMovies}
          savedMovies={savedMovies}
          onLike={props.onLike}
          onDelete={props.onDelete}
        />
      ) : props.savedMovies.length === 0 && searchDone ? (
        <span className="movies__not-found">Ничего не найдено</span>
      ) : (
        <span className="movies__not-found">{searchStatus}</span>
      )}
      <SavedDevider />
      <Footer />
    </>
  );
}

export default SavedMovies;
