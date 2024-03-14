/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
//=======================================================Конвертер webp====================================================
function isWebp() {
    // Проверка поддержки webp
    function testWebP(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    // Добавление класса _webp или _no-webp для HTML
    testWebP(function (support) {
        let className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    });
}

isWebp();


/***/ }),
/* 2 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getMobMenu: () => (/* binding */ getMobMenu)
/* harmony export */ });
//   ===================================================Бургер меню=======================================================
function getMobMenu() {
    let burgerMenuBTN = document.querySelector('.burger-menu-wrap');
    let burgerMenu = document.querySelector('.burger-menu');
    let menu = document.querySelector('.nav_box-mob');
    let navLinks = document.querySelectorAll('.nav__link');
    let body = document.querySelector('body');

    burgerMenuBTN.addEventListener('click', actionMenu);

    function actionMenu() {
        //если меню открыто
        if (menu.className == "nav_box-mob active") {
            body.style.cssText = `overflow: auto`;
            menu.classList.remove('active')
            burgerMenu.classList.remove('active')
            //если меню закрыто
        } else {
            body.style.cssText = `overflow: hidden`;
            menu.classList.add('active')
            burgerMenu.classList.add('active')
        };
        //отключение мобильного меню при клике по элементу меню
        navLinks.forEach(el => {
            el.addEventListener("click", () => {
                menu.classList.remove('active');
                burgerMenu.classList.remove('active');
                body.style.cssText = `overflow: auto`;
            });
        });
    }
}
getMobMenu()


/***/ }),
/* 3 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPopup: () => (/* binding */ getPopup)
/* harmony export */ });
// ======================================================Попап===================================

function getPopup() {
    //Выход из попапа
    const exitBtn = document.querySelector(".popup-exit");
    //Кнопки вызова попапа
    const btn = document.querySelectorAll(".btn-popup");
    //Общий фон попапа
    const popupBg = document.querySelector(".popup-bg");
    //Оболочка попапа
    const body = document.querySelector("body");

    //Цикл по всем кнопкам вызывающим попап и вешаем событие
    for (const el of btn) {
        //Вешаем событие по клику
        el.addEventListener("click", addActiveClass)
    };

    exitBtn.addEventListener("click", removeActiveClass);

    function addActiveClass(ev) {
        ev.preventDefault();
        popupBg.classList.add("active");
        body.style.cssText = `overflow: hidden;`;
    }
    function removeActiveClass(ev) {
        ev.preventDefault();
        popupBg.classList.remove("active");
        body.style.cssText = `overflow: auto;`;
    }
}
getPopup()

/***/ })
/******/ 	]);
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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_isWebp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _components_burgerMenu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _components_pop_up_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);





})();

/******/ })()
;