class MainApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  get _headers() {
    return {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    };
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res.status);
    }
  }

  register = ({ name, email, password }) => {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    }).then(this._checkResponse);
  };

  login = ({ email, password }) => {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then(this._checkResponse);
  };

  checkToken = (token) => {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then(this._checkResponse);
  };

  getUser() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  updateUser({ name, email }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name,
        email,
      }),
    }).then(this._checkResponse);
  }

  getMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  saveMovie({
    country,
    director,
    duration,
    year,
    description,
    image,
    nameEN,
    nameRU,
    thumbnail,
    trailerLink,
    movieId,
  }) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image,
        nameEN,
        nameRU,
        thumbnail,
        trailerLink,
        movieId,
      }),
    }).then(this._checkResponse);
  }

  deleteMovies(movie) {
    return fetch(`${this._baseUrl}/movies/${movie._id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }
}

const api = new MainApi({
  baseUrl: "https://api.moviesexplorer.nomoredomains.xyz",
});

export default api;
