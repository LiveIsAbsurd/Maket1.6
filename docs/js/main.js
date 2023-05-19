/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_main_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/main.sass */ "./sass/main.sass");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.html */ "./index.html");
/* harmony import */ var _swiperInit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./swiperInit */ "./js/swiperInit.js");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! normalize.css */ "../node_modules/normalize.css/normalize.css");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal */ "./js/modal.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _openMore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./openMore */ "./js/openMore.js");
/* harmony import */ var _openMore__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_openMore__WEBPACK_IMPORTED_MODULE_5__);







/***/ }),

/***/ "./js/modal.js":
/*!*********************!*\
  !*** ./js/modal.js ***!
  \*********************/
/***/ (() => {

var body = document.querySelector("body");
var sidebarContainer = document.querySelector(".sidebar-container");
var sidebar = sidebarContainer.querySelector(".sidebar");
var modalContainer = document.querySelector(".modal-container");
var modalFeedback = modalContainer.querySelector(".modal-feedback");
var modalCall = modalContainer.querySelector(".modal-call");
var modalFeedbackOpenButton = document.querySelectorAll(".button--icon-feedback");
var modalFeedbackCloseButton = modalFeedback.querySelector(".modal__close-button");
var modalCallOpenButton = document.querySelectorAll(".button--icon-call");
var modalCallCloseButton = modalCall.querySelector(".modal__close-button");
var sidebarOpenButton = document.querySelector(".button--icon-burger");
var sidebarCloseButton = sidebar.querySelector(".button--icon-close");
/* "Модалка обратная связь"*/

var buttonClickFeedback = function buttonClickFeedback(item) {
  item.addEventListener("click", function () {
    modalFeedback.classList.add("modal-feedback--open");
    sidebarContainer.classList.remove("sidebar-container--blur");
    modalContainer.classList.add("modal-container--blur");
    /**/

    sidebar.classList.remove("sidebar--open");
    modalFeedbackCloseButton.classList.add("modal__close-button--open");
    body.classList.add("body--overflowIsHidden");
  });
};

for (var i = 0; i < modalFeedbackOpenButton.length; i++) {
  buttonClickFeedback(modalFeedbackOpenButton[i]);
}

modalFeedbackCloseButton.addEventListener("click", function () {
  modalFeedback.classList.remove("modal-feedback--open");
  modalContainer.classList.remove("modal-container--blur");
  /**/

  modalFeedbackCloseButton.classList.remove("modal__close-button--open");
  body.classList.remove("body--overflowIsHidden");
});
modalContainer.addEventListener("click", function (evt) {
  if (!evt.target.closest(".modal-feedback") & !evt.target.closest(".modal-call")) {
    modalFeedback.classList.remove("modal-feedback--open");
    modalContainer.classList.remove("modal-container--blur");
    /**/

    modalFeedbackCloseButton.classList.remove("modal__close-button--open");
    body.classList.remove("body--overflowIsHidden");
  }
});
/*Модалка "Заказать звонок"*/

var buttonClickCall = function buttonClickCall(item) {
  item.addEventListener("click", function () {
    modalCall.classList.add("modal-call--open");
    sidebarContainer.classList.remove("sidebar-container--blur");
    modalContainer.classList.add("modal-container--blur");
    /**/

    sidebar.classList.remove("sidebar--open");
    modalCallCloseButton.classList.add("modal__close-button--open");
    body.classList.add("body--overflowIsHidden");
  });
};

for (var _i = 0; _i < modalCallOpenButton.length; _i++) {
  buttonClickCall(modalCallOpenButton[_i]);
}

modalCallCloseButton.addEventListener("click", function () {
  modalCall.classList.remove("modal-call--open");
  modalContainer.classList.remove("modal-container--blur");
  /**/

  modalCallCloseButton.classList.remove("modal__close-button--open");
  body.classList.remove("body--overflowIsHidden");
});
modalContainer.addEventListener("click", function (evt) {
  if (!evt.target.closest(".modal-call") & !evt.target.closest(".modal-feedback")) {
    modalCall.classList.remove("modal-call--open");
    modalContainer.classList.remove("modal-container--blur");
    /**/

    modalCallCloseButton.classList.remove("modal__close-button--open");
    body.classList.remove("body--overflowIsHidden");
  }
});
/*Сайдбар*/

sidebarOpenButton.addEventListener("click", function () {
  sidebarContainer.classList.add("sidebar-container--blur");
  sidebar.classList.add("sidebar--open");
  body.classList.add("body--overflowIsHidden");
});
sidebarCloseButton.addEventListener("click", function () {
  sidebarContainer.classList.remove("sidebar-container--blur");
  sidebar.classList.remove("sidebar--open");
  body.classList.remove("body--overflowIsHidden");
});
sidebarContainer.addEventListener("click", function (evt) {
  if (!evt.target.closest(".sidebar")) {
    sidebar.classList.remove("sidebar--open");
    sidebarContainer.classList.remove("sidebar-container--blur");
    modalFeedback.classList.remove("modal-feedback--open");
    modalFeedbackCloseButton.classList.remove("modal-feedback__close-button--open");
    body.classList.remove("body--overflowIsHidden");
  }
});

/***/ }),

/***/ "./js/openMore.js":
/*!************************!*\
  !*** ./js/openMore.js ***!
  \************************/
/***/ (() => {

var textBlock = document.querySelector(".text-block");
var textBlockText = document.querySelector(".text-block__text");
var textBlockButton = textBlock.querySelector(".text-block__button");
var brandListContainer = document.querySelector(".brand");
var brandList = brandListContainer.querySelector(".brand-list");
var brandListButton = brandListContainer.querySelector(".brand-list__button");
var repairListContainer = document.querySelector(".repair");
var repairList = repairListContainer.querySelector(".repair-list");
var repairListButton = repairListContainer.querySelector(".repair-list__button");
textBlockButton.addEventListener("click", function () {
  textBlockText.classList.toggle("text-block__text--open");
  textBlockButton.classList.toggle("open-more-button--open");

  if (textBlockButton.classList.contains("open-more-button--open")) {
    textBlockButton.textContent = "Скрыть";
  } else {
    textBlockButton.textContent = "Читать далее";
  }
});
brandListButton.addEventListener("click", function () {
  brandList.classList.toggle("brand-list--open");
  brandListButton.classList.toggle("open-more-button--open");

  if (brandListButton.classList.contains("open-more-button--open")) {
    brandListButton.textContent = "Скрыть";
  } else {
    brandListButton.textContent = "Показать все";
  }
});
repairListButton.addEventListener("click", function () {
  repairList.classList.toggle("repair-list--open");
  repairListButton.classList.toggle("open-more-button--open");

  if (repairListButton.classList.contains("open-more-button--open")) {
    repairListButton.textContent = "Скрыть";
  } else {
    repairListButton.textContent = "Показать все";
  }
});

/***/ }),

/***/ "./js/swiperInit.js":
/*!**************************!*\
  !*** ./js/swiperInit.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "../node_modules/swiper/swiper.esm.js");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/css */ "../node_modules/swiper/swiper.min.css");
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css/pagination */ "../node_modules/swiper/modules/pagination/pagination.min.css");




if (window.innerWidth < 500) {
  var swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".swiper", {
    modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination],
    slidesPerView: 2,
    spaceBetween: 190,
    pagination: {
      el: ".swiper-pagination"
    }
  });
}

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/cps_logo.svg */ "./assets/cps_logo.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/application_icon.svg */ "./assets/application_icon.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/status_icon.svg */ "./assets/status_icon.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/lenovo.png */ "./img/lenovo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/brend_icon.svg */ "./assets/brend_icon.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/bosh.png */ "./img/bosh.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./img/samsung.png */ "./img/samsung.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./img//bosh.png */ "./img/bosh.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var code = "<!DOCTYPE html>\n<html lang=\"ru\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Макет 1.3</title>\n</head>\n<body class=\"body\">\n\n    <div class=\"modal-container\">\n        <div class=\"modal modal-feedback\">\n            <button class=\"button button--icon-close modal__close-button\"></button>\n            <h2 class=\"modal__header\">Обратная связь</h2>\n\n            <form action=\"#\" id=\"feedback\">\n                <input form=\"feedback\" name=\"name\" type=\"text\" placeholder=\"Имя\">\n                <input form=\"feedback\" name=\"phone\" type=\"text\" placeholder=\"Телефон\">\n                <input form=\"feedback\" name=\"mail\" type=\"text\" placeholder=\"Электронная почта\">\n                <input form=\"feedback\" name=\"message\" type=\"text\" placeholder=\"Сообщение\">\n            </form>\n            <p>Нажимая “отправить”, вы даете согласие на <a>обработку персональных данных</a> и соглашаетесь с нашей <a>политикой конфиденциальности</a></p>\n            <button form=\"feedback\" type=\"submit\" class=\"send-button modal__send-button\"><span>Отправить</span></button>\n        </div>\n\n        <div class=\"modal modal-call\">\n            <button class=\"button button--icon-close modal__close-button\"></button>\n            <h2 class=\"modal__header\">Заказать звонок</h2>\n\n            <form action=\"#\" id=\"call\">\n                <input form=\"call\" name=\"phone\" type=\"text\" placeholder=\"Телефон\">\n            </form>\n            <p>Нажимая “отправить”, вы даете согласие на <a>обработку персональных данных</a> и соглашаетесь с нашей <a>политикой конфиденциальности</a></p>\n            <button form=\"call\" type=\"submit\" class=\"send-button modal__send-button\"><span>Отправить</span></button>\n        </div>\n\n    </div>\n\n    <div class=\"sidebar-container\">\n        <div class=\"sidebar\">\n            <header class=\"sidebar-header\">\n                <div class=\"sidebar-header__right\">\n                    <button class=\"button button--icon-close\"></button>\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"Лого CPS\" class=\"header--logo\">\n                </div>\n            \n                <button class=\"button button--icon-search\"></button>\n            </header>\n            \n            \n            <nav>\n                <ul class=\"sidebar-main-menu\">\n                    <li><a href=\"#\">Ремонт техники</a></li>\n                    <li class=\"sidebar-main-menu--active\"><a href=\"#\">Услуги и сервисы</a></li>\n                    <li><a href=\"#\">Корпоративным клиентам</a></li>\n                    <li><a href=\"#\">Продавцам техники</a></li>\n                    <li><a href=\"#\">Партнёрам</a></li>\n                    <li><a href=\"#\">Производителям</a></li>\n                    <li><a href=\"#\">Наши сервисные центры</a></li>\n                    <li><a href=\"#\">Контакты</a></li>\n                </ul>\n            </nav>\n            \n            \n            <div class=\"sidebar-footer\">\n                <button class=\"button button--icon-call\"></button>\n                <button class=\"button button--icon-feedback\"></button>\n                <button class=\"button button--icon-contacts\"></button>\n            \n                <a href=\"#\" class=\"sidebar-footer__mail\">mail@cps.com</a>\n                <a href=\"#\" class=\"sidebar-footer__phone\">8 800 890 8900</a>\n            \n                <div class=\"sidebar-footer__lang-choice\">\n                    <a href=\"#\" class=\"sidebar-footer__lang-choice--active\">RU</a>\n                    <a href=\"#\">EN</a>\n                    <a href=\"#\">CH</a>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <header class=\"header\">\n        <div class=\"header__left\">\n            <button class=\"button button--icon-burger\"></button>\n\n            <img class=\"header__left--logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"Логотип SPC\">\n        </div>\n\n        <div class=\"header__right\">\n            <button class=\"button button--icon-call button--display-isHidden\"></button>\n            <button class=\"button button--icon-feedback button--display-isHidden\"></button>\n            <button class=\"button button--icon-contacts button--display-isHidden\"></button>\n            \n            <button class=\"button button--icon-application\"></button>\n            <button class=\"button button--icon-status\"></button>\n        </div>\n    </header>\n\n    <main class=\"main\">\n        <section>\n        <div class=\"main-header\">\n            <div  class=\"main-header__text\"><h1>Услуги и сервисы</h1></div>\n            <div class=\"main-button-container\">\n                <button>\n                    Оставить заявку\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" class=\"button\">\n                </button>\n                <button>\n                    Статус ремонта\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" class=\"button\">\n                </button>\n            </div>\n        </div>\n        <nav>\n            <ul class=\"menu\">\n                <li class=\"menu__item menu__item--active-border\"><a href=\"#\">Ремонтируемые устройства</a></li>\n                <li class=\"menu__item\"><a href=\"#\">Дополнительные услуги</a></li>\n                <li class=\"menu__item\"><a href=\"#\">Цены на услуги</a></li>\n                <li class=\"menu__item\"><a href=\"#\">Адреса сервисных центров</a></li>\n                <li class=\"menu__item\"><a href=\"#\">Специальные цены</a></li>\n                <li class=\"menu__item\"><a href=\"#\">Отзывы</a></li>\n            </ul>\n            <div class=\"menu__gradient list-gradient\"></div>\n        </nav>\n        \n        <div class=\"text-block\">\n            <div class=\"text-block__contaner\">\n                <div class=\"text-block__text\">\n                    <p class=\"text-block__paragraph\">\n                        Мы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.\n                    </p>\n                    <p class=\"text-block__paragraph\">\n                        Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.\n                    </p>\n                    <p class=\"text-block__paragraph\">Lorem ipsum dolor sit amet consectetur adipisicing elit. In vitae nam ipsa suscipit sunt voluptas, ratione dignissimos! Rerum, cum. Nostrum aliquam, deserunt nulla harum sint repellendus omnis autem blanditiis nobis!\n                    Reiciendis id at voluptatibus repellat iste in consequatur praesentium delectus saepe autem corporis incidunt eos, animi nemo molestiae repudiandae veritatis laboriosam officia eveniet modi perferendis dignissimos cum. Culpa, ad porro.\n                    Consectetur, quo accusamus. Iusto iure quod deleniti saepe voluptate rem adipisci ea rerum. Quo excepturi reprehenderit, tempora quos fuga numquam, recusandae totam est quisquam voluptates cumque porro explicabo voluptatum velit.\n                    Modi voluptatibus velit perspiciatis atque autem ducimus hic in veritatis nostrum quidem eum quo, fugiat commodi illum, voluptatem asperiores magnam ipsa expedita. Sit, minus! Ullam aliquam ex est quia consequuntur.\n                    Voluptatem commodi, ducimus tempora veniam illum eum sequi tenetur asperiores ad. Velit tempora hic ea explicabo cupiditate! Modi, hic! Autem nemo nesciunt deleniti quos molestiae adipisci obcaecati doloremque, vitae tempore?</p>\n                </div>\n\n                <button class=\"text-block__button open-more-button\">Читать далее</button>\n            </div>\n            <div class=\"text-block__image\"></div>\n        </div>\n        </section>\n\n        <section>\n        <div class=\"list-header\">\n            <h2 class=\"list-header__text\">Ремонт техники различных брендов</h2>\n        </div>\n        \n        <div class=\"swiper list-container brand\">\n        \n            <ul class=\"swiper-wrapper brand-list list--close\">\n    \n                <li class=\"swiper-slide brand-list__item\">\n                    <a href=\"#\">\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"\">\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\">\n                    </a>\n                </li>\n                <li class=\"swiper-slide brand-list__item\">\n                    <a href=\"#\">\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"\">\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\">\n                    </a>\n                </li>\n                <li class=\"swiper-slide brand-list__item\">\n                    <a href=\"#\">\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"\">\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\">\n                    </a>\n                </li>\n                <li class=\"swiper-slide brand-list__item\">\n                    <a href=\"#\">\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"\">\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\">\n                    </a>\n                </li>\n                <li class=\"swiper-slide brand-list__item\">\n                    <a href=\"#\">\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"\">\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\">\n                    </a>\n                </li>\n                <li class=\"swiper-slide brand-list__item\">\n                    <a href=\"#\">\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"\">\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\">\n                    </a>\n                </li>\n                <li class=\"swiper-slide brand-list__item\">\n                    <a href=\"#\">\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"\">\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\">\n                    </a>\n                </li>\n                <li class=\"swiper-slide brand-list__item\">\n                    <a href=\"#\">\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"\">\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\">\n                    </a>\n                </li>\n                <li class=\"swiper-slide brand-list__item\">\n                    <a href=\"#\">\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"\">\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\">\n                    </a>\n                </li>\n                <li class=\"swiper-slide brand-list__item\">\n                    <a href=\"#\">\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"\">\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\">\n                    </a>\n                </li>\n                <li class=\"swiper-slide brand-list__item\">\n                    <a href=\"#\">\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"\">\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\">\n                    </a>\n                </li>\n\n                <li class=\"swiper-slide\"></li>\n    \n            </ul>\n            <div class=\"brand-list__gradient list-gradient\"></div>\n            <button class=\"brand-list__button open-more-button open-more-button--hidden\">Показать все</button>\n            <div class=\"swiper-pagination\"></div>\n        </div>\n        \n        </section>\n\n        <section>\n            <div class=\"list-header\">\n                <h2 class=\"list-header__text\">Ремонт различных видов техники</h2>\n            </div>\n\n            <div class=\"swiper list-container repair\">\n        \n                <ul class=\"swiper-wrapper repair-list list--close\">\n        \n                    <li class=\"swiper-slide repair-list__item\">\n                        <a href=\"#\">\n                            <span>Ремонт ноутбуков</span>\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\">\n                        </a>\n                    </li>\n                    <li class=\"swiper-slide repair-list__item\">\n                        <a href=\"#\">\n                            <span>Ремонт планшетов</span>\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\">\n                        </a>\n                    </li>\n                    <li class=\"swiper-slide repair-list__item\">\n                        <a href=\"#\">\n                            <span>Ремонт ПК</span>\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\">\n                        </a>\n                    </li>\n                    <li class=\"swiper-slide repair-list__item\">\n                        <a href=\"#\">\n                            <span>Ремонт мониторов</span>\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\">\n                        </a>\n                    </li>\n\n                    <li class=\"swiper-slide\"></li>\n        \n                </ul>\n                <div class=\"repair-list__gradient list-gradient\"></div>\n                <button class=\"repair-list__button open-more-button open-more-button--hidden\">Показать все</button>\n                <div class=\"swiper-pagination\"></div>\n            </div>\n        </section>\n\n        <section>\n            <div class=\"list-header\">\n                <h2 class=\"list-header__text\">Цены на услуги</h2>\n            </div>\n\n            \n\n            <div class=\"swiper list-container\">\n                <ul class=\"services-header\">\n                    <li>Ремонтные услуги</li>\n                    <li>Цена</li>\n                    <li>Срок</li>\n                </ul>\n        \n                <ul class=\"swiper-wrapper services-list list--close\">\n        \n                    <li class=\"swiper-slide services-list__item\">\n                        <div class=\"services-list__container\">\n                            <div>\n                                <div class=\"services-list__header\">Ремонтные услуги</div>\n                                Диагностика\n                            </div>\n                            <div>\n                                <div class=\"services-list__header\">Цена</div>\n                                Бесплатно\n                            </div>\n                            <div>\n                                <div class=\"services-list__header\">Срок</div>\n                                30 мин\n                            </div>\n                            <button class=\"services-list__button send-button\">\n                                <span>Заказать</span>\n                            </button>\n                        </div>\n                    </li>\n                    <li class=\"swiper-slide services-list__item\">\n                        <div class=\"services-list__container\">\n                            <div>\n                                <div class=\"services-list__header\">Ремонтные услуги</div>\n                                Замена дисплея\n                            </div>\n                            <div>\n                                <div class=\"services-list__header\">Цена</div>\n                                1000 ₽\n                            </div>\n                            <div>\n                                <div class=\"services-list__header\">Срок</div>\n                                30-120 мин\n                            </div>\n                            <button class=\"services-list__button send-button\">\n                                <span>Заказать</span>\n                            </button>\n                        </div>\n                    </li>\n                    <li class=\"swiper-slide services-list__item\">\n                        <div class=\"services-list__container\">\n                            <div>\n                                <div class=\"services-list__header\">Ремонтные услуги</div>\n                                Тестирование с выдачей технического заключения\n                            </div>\n                            <div>\n                                <div class=\"services-list__header\">Цена</div>\n                                Бесплатно\n                            </div>\n                            <div>\n                                <div class=\"services-list__header\">Срок</div>\n                                30-120 мин\n                            </div>\n                            <button class=\"services-list__button send-button\">\n                                <span>Заказать</span>\n                            </button>\n                        </div>\n                    </li>\n                    <li class=\"swiper-slide services-list__item\">\n                        <div class=\"services-list__container\">\n                            <div>\n                                <div class=\"services-list__header\">Ремонтные услуги</div>\n                                Тестирование с выдачей технического заключения\n                            </div>\n                            <div>\n                                <div class=\"services-list__header\">Цена</div>\n                                Бесплатно\n                            </div>\n                            <div>\n                                <div class=\"services-list__header\">Срок</div>\n                                30-120 мин\n                            </div>\n                            <button class=\"services-list__button send-button\">\n                                <span>Заказать</span>\n                            </button>\n                        </div>\n                    </li>\n                    <li class=\"swiper-slide services-list__item\">\n                        <div class=\"services-list__container\">\n                            <div>\n                                <div class=\"services-list__header\">Ремонтные услуги</div>\n                                Тестирование с выдачей технического заключения\n                            </div>\n                            <div>\n                                <div class=\"services-list__header\">Цена</div>\n                                Бесплатно\n                            </div>\n                            <div>\n                                <div class=\"services-list__header\">Срок</div>\n                                30-120 мин\n                            </div>\n                            <button class=\"services-list__button send-button\">\n                                <span>Заказать</span>\n                            </button>\n                        </div>\n                    </li>\n\n                    <li class=\"swiper-slide\"></li>\n        \n                </ul>\n                <div class=\"services-list__gradient list-gradient\"></div>\n                <div class=\"swiper-pagination\"></div>\n\n                <p class=\"services-text\">Все цены указаны с учетом НДС. Стоимость ремонта указана на единичную услугу. Для получения коммерческого предложения на постоянное обслуживание, оставьте заявку.\n                <a href=\"#\">Получить комерческое предложение</a>\n                </p>\n                \n            </div>\n\n        </section>\n    </main>\n\n    <footer class=\"footer\">\n        <div>\n            <p class=\"footer__copyright\">© 2019 CPS</p>\n            <p class=\"footer__creator\">Разработано командой Apesong </p>\n        </div>\n\n        <a href=\"#\" class=\"footer__confid\">Политика конфиденциальности</a>\n\n        <p class=\"footer__offer\">Информация, размещенная на данной странице, не является публичной офертой</p>\n        \n    </footer>\n</body>\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./sass/main.sass":
/*!************************!*\
  !*** ./sass/main.sass ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/application_icon.svg":
/*!*************************************!*\
  !*** ./assets/application_icon.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/application_icon.svg";

/***/ }),

/***/ "./assets/brend_icon.svg":
/*!*******************************!*\
  !*** ./assets/brend_icon.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/brend_icon.svg";

/***/ }),

/***/ "./assets/cps_logo.svg":
/*!*****************************!*\
  !*** ./assets/cps_logo.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/cps_logo.svg";

/***/ }),

/***/ "./assets/status_icon.svg":
/*!********************************!*\
  !*** ./assets/status_icon.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/status_icon.svg";

/***/ }),

/***/ "./img/bosh.png":
/*!**********************!*\
  !*** ./img/bosh.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/bosh.png";

/***/ }),

/***/ "./img/lenovo.png":
/*!************************!*\
  !*** ./img/lenovo.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/lenovo.png";

/***/ }),

/***/ "./img/samsung.png":
/*!*************************!*\
  !*** ./img/samsung.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/samsung.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_html-loader_dist_runtime_getUrl_js-node_modules_normalize_css_normalize_-ebf99d"], () => (__webpack_require__("./js/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map