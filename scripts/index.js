let butEdit = document.querySelector(".profile__edit_btn");
let popup = document.querySelector(".popup");
let closeBtn = document.querySelector(".popup__button_close");

let nameInput = document.querySelector(".popup__input_name");
let jobInput = document.querySelector(".popup__input_about");

let profileName = document.querySelector(".profile__name");
let profileRole = document.querySelector(".profile__role");

let formElement = document.querySelector(".popup__container");

butEdit.addEventListener("click", () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileRole.textContent;
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
