export default class Card {
  constructor(data, templateSelector, handleImageClick) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleImageClick = handleImageClick;
  }

  // Clona el template de la tarjeta
  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".gallery__item")
      .cloneNode(true);
    return cardElement;
  }

  // Maneja el evento de eliminar
  _handleDelete() {
    this._element.remove();
    this._element = null;
  }

  // Maneja el evento de like
  _handleLike() {
    this._likeButton.classList.toggle("gallery__like-btn_active");
  }

  // Asigna los event listeners
  _setEventListeners() {
    this._deleteButton.addEventListener("click", () => this._handleDelete());
    this._likeButton.addEventListener("click", () => this._handleLike());
    this._imageElement.addEventListener("click", () =>
      this._handleImageClick(this._name, this._link)
    );
  }

  // Genera la tarjeta completa
  generateCard() {
    this._element = this._getTemplate();
    this._imageElement = this._element.querySelector(".gallery__image");
    this._titleElement = this._element.querySelector(".gallery__title");
    this._deleteButton = this._element.querySelector(".gallery__delete-btn");
    this._likeButton = this._element.querySelector(".gallery__like-btn");

    this._imageElement.src = this._link;
    this._imageElement.alt = this._name;
    this._titleElement.textContent = this._name;

    this._setEventListeners();

    return this._element;
  }
}
