export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", TouchList._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === "escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._popup
      .querySelector(".popup__button-close, .popup__close-btn")
      ?.addEventListener("click", () => this.close());

    this._popup.addEventListener("click", (evt) => {
      if (evt.target === this._popup) {
        this.close();
      }
    });
  }
}
