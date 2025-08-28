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

formEdit.addEventListener("submit", handleProfileFormSubmit);

// --- Popup de Agregar Lugar ---
let butAdd = document.querySelector(".profile__add-btn");
let popupPlace = document.querySelector("#popup-place");
let closeBtnPlace = popupPlace.querySelector(".popup__button-close");
let formPlace = popupPlace.querySelector(".popup__form");
let titleInput = formPlace.querySelector(".popup__input-title");
let linkInput = formPlace.querySelector(".popup__input-link");

butAdd.addEventListener("click", () => {
  formPlace.reset();
  popupPlace.classList.add("popup_opened");
});

closeBtnPlace.addEventListener("click", () => {
  popupPlace.classList.remove("popup_opened");
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

function createCard(title, link) {
  const card = templateCard.content
    .querySelector(".gallery__item")
    .cloneNode(true);

  const image = card.querySelector(".gallery__image");
  const caption = card.querySelector(".gallery__title");

  image.src = link;
  image.alt = title;
  caption.textContent = title;

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
