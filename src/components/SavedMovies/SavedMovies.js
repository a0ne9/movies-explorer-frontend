import "./SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import SavedDevider from "../SavedDevider/SavedDevider";

function SavedMovies() {
  return (
    <>
      <Header />
      <SearchForm />
      <MoviesCardList />
      <SavedDevider />
      <Footer />
    </>
  );
}

export default SavedMovies
