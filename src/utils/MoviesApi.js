class MoviesApi {
    constructor({ baseUrl, headers }) {
        this.baseURL = baseUrl;
        this.headers = headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }

    getMovies() {
        return fetch(this.baseURL, {
            headers: this.headers,
        })
            .then(this._checkResponse)
            .then((res) => {
                return res;
            });
    }
}

export const moviesApi = new MoviesApi({
    baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
    headers: {
        "Content-Type": "application/json",
    },
});
