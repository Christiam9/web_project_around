import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import { setOverlayAndEscClose } from "./utils.js";
import UserInfo from "./UserInfo.js";

// --- Configuración de validación ---
const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-save",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
};

// --- Inicializar validadores ---
const forms = Array.from(document.querySelectorAll(".popup__form"));
forms.forEach((form) => {
  const validator = new FormValidator(validationConfig, form);
  validator.enableValidation();
});

// --- Elementos principales ---
const sectionGallery = document.querySelector(".gallery__list");
const templateSelector = "#template-card";

// --- Instancias ---
const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  jobSelector: ".profile__role",
});

// --- Popup editar perfil ---
const editProfilePopup = new PopupWithForm("#popup-edit", (formData) => {
  userInfo.setUserInfo(formData);
});

editProfilePopup.setEventListeners();

const butEdit = document.querySelector(".profile__edit-btn");

butEdit.addEventListener("click", () => {
  const userData = userInfo.getUserInfo();
  editProfilePopup.setInputValues(userData);
  editProfilePopup.open();
});

// --- Popup Agregar Lugar ---
const addPlacePopup = new PopupWithForm("#popup-place", (formData) => {
  const card = new Card(
    {
      name: formData.title,
      link: formData.link,
    },
    templateSelector,
    handleImageClick
  );

  const cardElement = card.generateCard();
  sectionGallery.prepend(cardElement);
});

addPlacePopup.setEventListeners();

// --- Botones que abren popups ---
const butAdd = document.querySelector(".profile__add-btn");

butAdd.addEventListener("click", () => {
  addPlacePopup.open();
});

// --- Popup de Imagen ---
const imagePopup = new PopupWithImage(".popup_type_image");
imagePopup.setEventListeners();

function handleImageClick(name, link) {
  imagePopup.open({ name, link });
}

const initialCards = [
  { name: "Isla de Galápagos", link: "./images/islagalapagos.jpg" },
  { name: "Amazonas", link: "./images/Amazonia.jpg" },
  { name: "Isla Clipperton", link: "./images/isla_clipperton.jpg" },
  { name: "Golfo de California", link: "./images/golfo de california.jpg" },
  { name: "Antártida", link: "./images/antartida.jpg" },
  { name: "Arrecifes de coral", link: "./images/arrecifes de coral.jpg" },
];

// Agregar tarjetas iniciales
initialCards.forEach((item) => {
  const card = new Card(item, templateSelector, handleImageClick);
  const cardElement = card.generateCard();
  sectionGallery.append(cardElement);
});

// --- Activar cierre con overlay y tecla ESC ---
setOverlayAndEscClose();
