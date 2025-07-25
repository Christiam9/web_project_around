let butEdit = document.querySelector(".profile__edit-btn");
let popup = document.querySelector(".popup");
let closeBtn = document.querySelector(".popup__button-close");

let nameInput = document.querySelector(".popup__input-name");
let jobInput = document.querySelector(".popup__input-about");

let profileName = document.querySelector(".profile__name");
let profileRole = document.querySelector(".profile__role");

let formElement = document.querySelector(".popup__container");

butEdit.addEventListener("click", () => {
  nameInput.value = "";
  jobInput.value = "";
  popup.classList.add("popup_opened");
});

closeBtn.addEventListener("click", () => {
  popup.classList.remove("popup_opened");
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileRole.textContent = jobInput.value;

  popup.classList.remove("popup_opened");
}

formElement.addEventListener("submit", handleProfileFormSubmit);
