import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import LoadMore from "../LoadMore/LoadMore";

function Movies() {
  return (
    <>
      <Header />
      <SearchForm />
      <MoviesCardList />
      <LoadMore />
      <Footer />
    </>
  );
}

export default Movies;
