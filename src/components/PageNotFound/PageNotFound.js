import "./PageNotFound.css"

function PageNotFound() {
    return(
        <section className="pageNotFound__container">
            <h2 className="pageNotFound__title">404</h2>
            <p className="pageNotFound__caption">Страница не найдена</p>
            <button type="button" className="pageNotFound__button">Назад</button>
        </section>
    )
}

export default PageNotFound
