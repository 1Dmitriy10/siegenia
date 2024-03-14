//   ===================================================Бургер меню=======================================================
export function getMobMenu() {
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
