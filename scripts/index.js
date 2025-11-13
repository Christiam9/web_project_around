import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import { openPopup, closePopup, setOverlayAndEscClose } from "./utils.js";

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

// --- Popup Editar Perfil ---
const butEdit = document.querySelector(".profile__edit-btn");
const popupEdit = document.querySelector("#popup-edit");
const closeBtn = popupEdit.querySelector(".popup__button-close");
const nameInput = popupEdit.querySelector(".popup__input-name");
const jobInput = popupEdit.querySelector(".popup__input-about");
const profileName = document.querySelector(".profile__name");
const profileRole = document.querySelector(".profile__role");
const formEdit = popupEdit.querySelector(".popup__form");

butEdit.addEventListener("click", () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileRole.textContent;
  openPopup(popupEdit);
});

closeBtn.addEventListener("click", () => closePopup(popupEdit));

formEdit.addEventListener("submit", (evt) => {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileRole.textContent = jobInput.value;
  closePopup(popupEdit);
});

// --- Popup Agregar Lugar ---
const butAdd = document.querySelector(".profile__add-btn");
const popupPlace = document.querySelector("#popup-place");
const closeBtnPlace = popupPlace.querySelector(".popup__button-close");
const formPlace = popupPlace.querySelector(".popup__form");
const titleInput = formPlace.querySelector(".popup__input-title");
const linkInput = formPlace.querySelector(".popup__input-link");

butAdd.addEventListener("click", () => {
  formPlace.reset();
  openPopup(popupPlace);
});

closeBtnPlace.addEventListener("click", () => closePopup(popupPlace));

// --- Popup de Imagen ---
const popupImage = document.querySelector(".popup_type_image");
const popupImageContent = popupImage.querySelector(".popup__image");
const popupImageCaption = popupImage.querySelector(".popup__caption");
const popupImageClose = popupImage.querySelector(".popup__close-btn");

popupImageClose.addEventListener("click", () => closePopup(popupImage));

// --- Renderizar tarjetas ---
const sectionGallery = document.querySelector(".gallery__list");
const templateSelector = "#template-card";

const initialCards = [
  { name: "Isla de Galápagos", link: "./images/islagalapagos.jpg" },
  { name: "Amazonas", link: "./images/Amazonia.jpg" },
  { name: "Isla Clipperton", link: "./images/isla_clipperton.jpg" },
  { name: "Golfo de California", link: "./images/golfo de california.jpg" },
  { name: "Antártida", link: "./images/antartida.jpg" },
  { name: "Arrecifes de coral", link: "./images/arrecifes de coral.jpg" },
];

function handleImageClick(name, link) {
  popupImageContent.src = link;
  popupImageContent.alt = name;
  popupImageCaption.textContent = name;
  openPopup(popupImage);
}

// Agregar tarjetas iniciales
initialCards.forEach((item) => {
  const card = new Card(item, templateSelector, handleImageClick);
  const cardElement = card.generateCard();
  sectionGallery.append(cardElement);
});

// --- Agregar nuevas tarjetas ---
formPlace.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const data = {
    name: titleInput.value,
    link: linkInput.value,
  };

  const card = new Card(data, templateSelector, handleImageClick);
  const cardElement = card.generateCard();
  sectionGallery.prepend(cardElement);

  closePopup(popupPlace);
  formPlace.reset();
});

// --- Activar cierre con overlay y tecla ESC ---
setOverlayAndEscClose();
