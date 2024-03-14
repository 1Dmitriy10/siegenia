// ======================================================Попап===================================

export function getPopup() {
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