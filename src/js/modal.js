let sidebarContainer = document.querySelector(".sidebar-container");
let sidebar = sidebarContainer.querySelector(".sidebar");
let modalContainer = document.querySelector(".modal-container");
let modalFeedback = modalContainer.querySelector(".modal-feedback");
let modalCall = modalContainer.querySelector(".modal-call");
let modalFeedbackOpenButton = document.querySelectorAll(
  ".button--icon-feedback"
);
let modalFeedbackCloseButton = modalFeedback.querySelector(
  ".modal__close-button"
);
let modalCallOpenButton = document.querySelectorAll(".button--icon-call");
let modalCallCloseButton = modalCall.querySelector(".modal__close-button");
let sidebarOpenButton = document.querySelector(".button--icon-burger");
let sidebarCloseButton = sidebar.querySelector(".button--icon-close");

/* "Модалка обратная связь"*/
let buttonClickFeedback = function (item) {
  item.addEventListener("click", function () {
    modalFeedback.classList.add("modal-feedback--open");
    sidebarContainer.classList.remove("sidebar-container--blur");
    modalContainer.classList.add("modal-container--blur"); /**/
    sidebar.classList.remove("sidebar--open");
    modalFeedbackCloseButton.classList.add(
      "modal-feedback__close-button--open"
    );
  });
};

for (let i = 0; i < modalFeedbackOpenButton.length; i++) {
  buttonClickFeedback(modalFeedbackOpenButton[i]);
}

modalFeedbackCloseButton.addEventListener("click", function () {
  modalFeedback.classList.remove("modal-feedback--open");
  modalContainer.classList.remove("modal-container--blur"); /**/
  modalFeedbackCloseButton.classList.remove(
    "modal-feedback__close-button--open"
  );
});

modalContainer.addEventListener("click", function (evt) {
  if (
    !evt.target.closest(".modal-feedback") & !evt.target.closest(".modal-call")
  ) {
    modalFeedback.classList.remove("modal-feedback--open");
    modalContainer.classList.remove("modal-container--blur"); /**/
    modalFeedbackCloseButton.classList.remove(
      "modal-feedback__close-button--open"
    );
  }
});

/*Модалка "Заказать звонок"*/
let buttonClickCall = function (item) {
  item.addEventListener("click", function () {
    modalCall.classList.add("modal-call--open");
    sidebarContainer.classList.remove("sidebar-container--blur");
    modalContainer.classList.add("modal-container--blur"); /**/
    sidebar.classList.remove("sidebar--open");
    modalCallCloseButton.classList.add("modal-call__close-button--open");
  });
};

for (let i = 0; i < modalCallOpenButton.length; i++) {
  buttonClickCall(modalCallOpenButton[i]);
}

modalCallCloseButton.addEventListener("click", function () {
  modalCall.classList.remove("modal-call--open");
  modalContainer.classList.remove("modal-container--blur"); /**/
  modalCallCloseButton.classList.remove("modal-call__close-button--open");
});

modalContainer.addEventListener("click", function (evt) {
  if (
    !evt.target.closest(".modal-call") & !evt.target.closest(".modal-feedback")
  ) {
    modalCall.classList.remove("modal-call--open");
    modalContainer.classList.remove("modal-container--blur"); /**/
    modalCallCloseButton.classList.remove("modal-call__close-button--open");
  }
});

/*Сайдбар*/
sidebarOpenButton.addEventListener("click", function () {
  sidebarContainer.classList.add("sidebar-container--blur");
  sidebar.classList.add("sidebar--open");
});

sidebarCloseButton.addEventListener("click", function () {
  sidebarContainer.classList.remove("sidebar-container--blur");
  sidebar.classList.remove("sidebar--open");
});

sidebarContainer.addEventListener("click", function (evt) {
  if (!evt.target.closest(".sidebar")) {
    sidebar.classList.remove("sidebar--open");
    sidebarContainer.classList.remove("sidebar-container--blur");
    modalFeedback.classList.remove("modal-feedback--open");
    modalFeedbackCloseButton.classList.remove(
      "modal-feedback__close-button--open"
    );
  }
});
