let butEdit = document.querySelector(".profile__edit-btn");
let popupEdit = document.querySelector("#popup-edit");
let closeBtn = popupEdit.querySelector(".popup__button-close");
let nameInput = popupEdit.querySelector(".popup__input-name");
let jobInput = popupEdit.querySelector(".popup__input-about");
let profileName = document.querySelector(".profile__name");
let profileRole = document.querySelector(".profile__role");
let formEdit = document.querySelector(".popup__form");

butEdit.addEventListener("click", () => {
  nameInput.value = "";
  jobInput.value = "";
  popupEdit.classList.add("popup_opened");
});

closeBtn.addEventListener("click", () => {
  popupEdit.classList.remove("popup_opened");
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileRole.textContent = jobInput.value;

  popupEdit.classList.remove("popup_opened");
}
const saveButton = popupEdit.querySelector(".popup__button-save");

function checkInputValidity(inputElement) {
  const errorElement = document.querySelector(`#${inputElement.id}-validation`);
  if (!inputElement.validity.valid) {
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add("popup__input_error");
  } else {
    errorElement.textContent = "";
    inputElement.classList.remove("popup__input_error");
  }
}

function toggleButtonState(form) {
  const isFormValid = form.checkValidity();
  if (isFormValid) {
    saveButton.removeAttribute("disabled");
    saveButton.classList.remove("popup__button_disabled");
  } else {
    saveButton.setAttribute("disabled", true);
    saveButton.classList.add("popup__button_disabled");
  }
}

// Escucha los cambios de los campos
[nameInput, jobInput].forEach((input) => {
  input.addEventListener("input", () => {
    checkInputValidity(input);
    toggleButtonState(formEdit);
  });
});

// Estado inicial al abrir el popup
butEdit.addEventListener("click", () => {
  nameInput.value = "";
  jobInput.value = "";
  popupEdit.classList.add("popup_opened");
  toggleButtonState(formEdit); // Desactiva el botón al abrir
});

formEdit.addEventListener("submit", handleProfileFormSubmit);

// --- Popup de Agregar Lugar ---
let butAdd = document.querySelector(".profile__add-btn");
let popupPlace = document.querySelector("#popup-place");
let closeBtnPlace = popupPlace.querySelector(".popup__button-close");
let formPlace = popupPlace.querySelector(".popup__form");
let titleInput = formPlace.querySelector(".popup__input-title");
let linkInput = formPlace.querySelector(".popup__input-link");

function handleClosePlace() {
  popupPlace.classList.remove("popup_opened");
  closeBtnPlace.removeEventListener("click", handleClosePlace);
}

butAdd.addEventListener("click", () => {
  formPlace.reset();
  popupPlace.classList.add("popup_opened");
  closeBtnPlace.addEventListener("click", handleClosePlace);
});

const saveButtonPlace = popupPlace.querySelector(".popup__button-save");
const titleError = document.getElementById("title-validation");
const linkError = document.getElementById("link-validation");

function checkPlaceFormValidity() {
  const isTitleValid = titleInput.validity.valid;
  const isLinkValid = linkInput.validity.valid;

  titleError.textContent = isTitleValid ? "" : titleInput.validationMessage;
  linkError.textContent = isLinkValid ? "" : linkInput.validationMessage;

  if (isTitleValid && isLinkValid) {
    saveButtonPlace.disabled = false;
    saveButtonPlace.classList.remove("popup__button_disabled");
  } else {
    saveButtonPlace.disabled = true;
    saveButtonPlace.classList.add("popup__button_disabled");
  }
}

titleInput.addEventListener("input", checkPlaceFormValidity);
linkInput.addEventListener("input", checkPlaceFormValidity);

butAdd.addEventListener("click", () => {
  titleError.textContent = "";
  linkError.textContent = "";
  saveButtonPlace.disabled = true;
  saveButtonPlace.classList.add("popup__button_disabled");
});
// ---galeria de tarjetas---
const templateCard = document.querySelector("#template-card");
const sectionGallery = document.querySelector(".gallery__list");

const initialCards = [
  {
    name: "isla de Galápagos",
    link: "./images/islagalapagos.jpg",
  },
  {
    name: "Amazonas",
    link: "./images/Amazonia.jpg",
  },
  {
    name: "Isla Clipperton",
    link: "./images/isla_clipperton.jpg",
  },
  {
    name: "Golfo de California",
    link: "./images/golfo de california.jpg",
  },
  {
    name: "Antartida",
    link: "./images/antartida.jpg",
  },
  {
    name: "Arrecifes de coral",
    link: "./images/arrecifes de coral.jpg",
  },
];

const popupImage = document.querySelector(".popup_type_image");
const popupImageContent = popupImage.querySelector(".popup__image");
const popupImageCaption = popupImage.querySelector(".popup__caption");
const popupImageClose = popupImage.querySelector(".popup__close-btn");

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}
// Cerrar popups haciendo click en la superposición
document.querySelectorAll(".popup").forEach((popup) => {
  popup.addEventListener("click", (evt) => {
    if (evt.target === popup) {
      closePopup(popup);
    }
  });
});

// Cerrar popup con la tecla ESC
document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    const popupAbierto = document.querySelector(".popup.popup_opened");
    if (popupAbierto) {
      closePopup(popupAbierto);
    }
  }
});

popupImageClose.addEventListener("click", () => closePopup(popupImage));
function createCard(title, link) {
  const card = templateCard.content
    .querySelector(".gallery__item")
    .cloneNode(true);

  const image = card.querySelector(".gallery__image");
  const caption = card.querySelector(".gallery__title");
  const deleteBtn = card.querySelector(".gallery__delete-btn");
  const likeBtn = card.querySelector(".gallery__like-btn");

  image.src = link;
  image.alt = title;
  caption.textContent = title;

  deleteBtn.addEventListener("click", () => {
    card.remove();
  });

  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("gallery__like-btn_active");
  });

  image.addEventListener("click", () => {
    popupImageContent.src = link;
    popupImageContent.alt = title;
    popupImageCaption.textContent = title;
    openPopup(popupImage);
  });

  return card;
}

initialCards.forEach((item) => {
  const card = createCard(item.name, item.link);
  sectionGallery.append(card);
});

// --- agregar tarjetas ---

formPlace.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const title = titleInput.value;
  const link = linkInput.value;

  const newCard = createCard(title, link);

  const firstCard = sectionGallery.querySelector(".gallery__item");
  if (firstCard) {
    sectionGallery.replaceChild(newCard, firstCard);
  } else {
    sectionGallery.append(newCard);
  }

  popupPlace.classList.remove("popup_opened");
  formPlace.reset();
});
