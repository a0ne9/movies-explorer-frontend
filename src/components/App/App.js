import "./App.css";
import { Routes, Route, useNavigate, useLocation } from "react-router";
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
import ErrorPopup from "../ErrorPopup/ErrorPopup";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [likedMovies, setLikedMovies] = React.useState([]);
  const [requestStatus, setRequestStatus] = React.useState("");
  const [requestSending, setRequestSending] = React.useState(false);
  const [popupVisible, setPopupVisible] = React.useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    handleCheckToken();
  }, []);

  React.useEffect(() => {
    if (location.pathname === "/signin" || location.pathname === "/signup") {
      navigate("/");
    }
    if (loggedIn) {
      api
        .getUser()
        .then((res) => {
          setCurrentUser(res);
          console.log(currentUser);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn]);

  React.useEffect(() => {
    if (loggedIn) {
      api
        .getMovies()
        .then((movies) => {
          console.log(currentUser);
          console.log("reqmov", movies);
          console.log(
            "filteredmov",
            movies.filter((movie) => movie.owner === currentUser._id)
          );
          setLikedMovies(
            movies.filter((movie) => movie.owner === currentUser._id)
          );
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn, currentUser]);

  function handleCheckToken() {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      api
        .checkToken(jwt)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            navigate(location.pathname);
          }
        })
        .catch((err) => {
          console.log(err);
          navigate("/");
        });
    }
  }

  function handleCardLike(movie) {
    api
      .saveMovie(movie)
      .then((savedMovie) => {
        setLikedMovies((savedMovies) => [savedMovie, ...savedMovies]);
      })
      .catch((err) => {
        console.log(`произошла ошибка ${err.message}`);
        openPopup();
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
        setRequestStatus("Произошла ошибка");
        openPopup();
      });
  }

  function handleRegistrationSubmit({ name, password, email }) {
    setRequestStatus("Отправка данных");
    setRequestSending(true);
    api
      .register({ name, email, password })
      .then((res) => {
        if (res) {
          handleLoginSubmit({ password, email });
          setRequestSending(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setRequestSending(false);
        setRequestStatus("Ошибка на сервере, попробуйте позже");
      });
  }

  function handleLoginSubmit({ password, email }) {
    setRequestStatus("Отправка данных");
    setRequestSending(true);
    api
      .login({ email, password })
      .then((res) => {
        if (res) {
          localStorage.setItem("jwt", res.token);
          setRequestSending(false);
          setLoggedIn(true);
          navigate("/movies");
        }
      })
      .catch((err) => {
        setRequestStatus("Ошибка на сервере, попробуйте позже");
        setRequestSending(false);
        console.log(err);
      });
  }

  function handleUpdateUser(name, email) {
    setRequestSending(true);
    api
      .updateUser({ name, email })
      .then((res) => {
        setCurrentUser(res.data);
        console.log(res);
        setRequestSending(false);
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

  function openPopup() {
    setPopupVisible(true);
  }

  function closePopup() {
    setPopupVisible(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route
          path="/signup"
          element={
            <Register
              onSubmit={handleRegistrationSubmit}
              requestStatus={requestStatus}
              requestSending={requestSending}
            />
          }
        />
        <Route
          path="/signin"
          element={
            <Login
              onSubmit={handleLoginSubmit}
              requestStatus={requestStatus}
              requestSending={requestSending}
            />
          }
        />
        <Route path="/" element={<Main loggedIn={loggedIn} />} />
        <Route element={<ProtectedRoute isLoggedIn={loggedIn} />}>
          <Route
            path="movies"
            element={
              <Movies
                loggedIn={loggedIn}
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
                loggedIn={loggedIn}
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
                loggedIn={loggedIn}
                onSubmit={handleUpdateUser}
                onLogout={handleLogout}
                requestSending={requestSending}
                requestStatus={requestStatus}
              />
            }
          />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <ErrorPopup isVisible={popupVisible} onClose={closePopup} />
    </CurrentUserContext.Provider>
  );
}

export default App;
