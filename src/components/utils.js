function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

function setOverlayAndEscClose() {
  // Cerrar popups al hacer clic en el fondo
  document.querySelectorAll(".popup").forEach((popup) => {
    popup.addEventListener("click", (evt) => {
      if (evt.target === popup) {
        closePopup(popup);
      }
    });
  });

  // Cerrar popups con tecla ESC
  document.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      const openedPopup = document.querySelector(".popup_opened");
      if (openedPopup) {
        closePopup(openedPopup);
      }
    }
  });
}

export { openPopup, closePopup, setOverlayAndEscClose };
