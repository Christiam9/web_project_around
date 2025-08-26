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
let formPlace = document.querySelector(".popup__form");

butAdd.addEventListener("click", () => {
  popupPlace.classList.add("popup_opened");
});

closeBtnPlace.addEventListener("click", () => {
  popupPlace.classList.remove("popup_opened");
});
