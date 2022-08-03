import "./App.css";
import { Routes, Route, useNavigate } from "react-router";
import Main from "../Main/Main";
import React from "react";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
import api from "../../utils/MainApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [likedMovies, setLikedMovies] = React.useState([]);
  const [requestStatus, setRequestStatus] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("")
  const [requestSending, setRequestSending] = React.useState(false);

  const navigate = useNavigate();

  React.useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      api
        .getUser()
        .then((res) => {
          setLoggedIn(true);
          setCurrentUser(res);
          //navigate("/movies");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  React.useEffect(() => {
    api
      .getMovies()
      .then((movies) => {
        setLikedMovies(
          movies.filter((movie) => movie.owner === currentUser._id)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleCardLike(movie) {
    api
      .saveMovie(movie)
      .then((savedMovie) => {
        setLikedMovies((savedMovies) => [savedMovie, ...savedMovies]);
      })
      .catch((err) => {
        console.log(`произошла ошибка ${err.message}`);
      });
  }

  function handleCardDislike(movie) {
    api
      .deleteMovies(movie)
      .then((res) => {
        setLikedMovies((movies) =>
          movies.filter((mov) => mov._id !== movie._id)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleRegistrationSubmit({ name, password, email }) {
    setRequestSending(true);
    api
      .register({ name, email, password })
      .then((res) => {
        if (res) {
          setRequestSending(false);
          setCurrentUser(res);
          navigate("/signin");
        }
      })
      .catch((err) => {
        console.log(err);
        setRequestSending(false);
        setErrorMessage("Ошибка на сервере, попробуйте позже");
      });
  }

  function handleLoginSubmit({ password, email }) {
    setRequestSending(true)
    api
      .login({ email, password })
      .then((res) => {
        if (res) {
          localStorage.setItem("jwt", res.token);
          setRequestSending(false)
          setLoggedIn(true);
          navigate("/movies");
        }
      })
      .catch((err) => {
        setErrorMessage("Ошибка на сервере, попробуйте позже");
        setRequestSending(false)
        console.log(err);
      });
  }

  function handleUpdateUser(name, email) {
    setRequestStatus("Отправка данных");
    api
      .updateUser({ name, email })
      .then((res) => {
        setCurrentUser(res.data);
        setRequestStatus("Данные профиля обновлены");
      })
      .catch((err) => {
        console.log(err);
        setRequestStatus("Произошла ошибка на сервере");
      });
  }

  function handleLogout() {
    localStorage.clear();
    setLoggedIn(false);
    navigate("/");
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route
          path="/signup"
          element={
            <Register
              onSubmit={handleRegistrationSubmit}
              requestStatus={errorMessage}
              requestSending={requestSending}
            />
          }
        />
        <Route
          path="/signin"
          element={
            <Login
              onSubmit={handleLoginSubmit}
              requestStatus={errorMessage}
              requestSending={requestSending}
            />
          }
        />
        <Route path="/" element={<Main />} />
        <Route element={<ProtectedRoute isLoggedIn={loggedIn} />}>
          <Route
            path="movies"
            element={
              <Movies
                savedMovies={likedMovies}
                onLike={handleCardLike}
                onDelete={handleCardDislike}
              />
            }
          />
        </Route>
        <Route element={<ProtectedRoute isLoggedIn={loggedIn} />}>
          <Route
            path="/saved-movies"
            element={
              <SavedMovies
                savedMovies={likedMovies}
                onDelete={handleCardDislike}
              />
            }
          />
        </Route>
        <Route element={<ProtectedRoute isLoggedIn={loggedIn} />}>
          <Route
            path="/profile"
            element={
              <Profile
                onSubmit={handleUpdateUser}
                onLogout={handleLogout}
                requestStatus={requestStatus}
              />
            }
          />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;
