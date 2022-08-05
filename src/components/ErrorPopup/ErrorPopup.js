import "./ErrorPopup.css"

function ErrorPopup(props) {
    return(
        <div className={props.isVisible ? "error__popup error__popup_visible" : "error__popup"}>
            <div className="popup__container">
                <h2 className="error__popup-text">Произошла ошибка на сервере!</h2>
                <button className="error__popup-button" type="button" onClick={props.onClose}>X</button>
            </div>
        </div>
    )
}

export default ErrorPopup
