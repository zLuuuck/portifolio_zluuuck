/* Abre e fecha o menu lateral  */

const menuMobile = document.querySelector('.menu-mobile');
const body = document.querySelector('body');

menuMobile.addEventListener('click', () => {
    menuMobile.classList.contains("bi-list");
    if (menuMobile.classList.replace("bi-list", "bi-x"));
    else (menuMobile.classList.replace("bi-x", "bi-list"));
    body.classList.toggle("menu-nav-active");
});

/* Abre e fecha o menu lateral  */
/* Fecha menu lateral  */

const navItem = document.querySelectorAll('.nav-item')

navItem.forEach(item => {
    item.addEventListener("click", () => {
        if (body.classList.contains("menu-nav-active")){
            body.classList.remove("menu-nav-active");
            menuMobile.classList.replace("bi-x", "bi-list");
        }
    })
})


/* Fecha menu lateral  */