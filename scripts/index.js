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

function handleClosePlace() {
  popupPlace.classList.remove("popup_opened");
  closeBtnPlace.removeEventListener("click", handleClosePlace);
}

butAdd.addEventListener("click", () => {
  formPlace.reset();
  popupPlace.classList.add("popup_opened");
  closeBtnPlace.addEventListener("click", handleClosePlace);
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
