/*==================== Elements du DOM ====================*/
/*--- menu ---*/
const btnToogleMenu = document.getElementById("btnToogleMenu");
const menu = document.getElementById("menu");
const logo = document.getElementById("logo");
const linkSection2 = document.getElementById("linkSection2");
const linkSection3 = document.getElementById("linkSection3");
const linkSection4 = document.getElementById("linkSection4");
const navBar = document.getElementById("navBar");
/*--- boutons ---*/
const btnScrollToTop = document.getElementById("btnScrollToTop");
/*--- sections ---*/
const section1 = document.getElementById("top");
const section2 = document.getElementById("section2");
const section3 = document.getElementById("section3");
const section4 = document.getElementById("section4");

/*==================== Gestion du menu en mode smartphone ====================*/
let menuOpen = false;

/*--- Comportement au click sur le bouton Menu ---*/
btnToogleMenu.addEventListener("click", function () {
    if (menuOpen){
        menu.classList.remove("menu-open");
        menuOpen = false;
    }else {
        menu.classList.add("menu-open");
        menuOpen = true;
    }
});

/*--- Gestion de fermeture du menu lors du clic sur un lien ---*/
menu.addEventListener("click", function () {
    menu.classList.remove("menu-open");
    menuOpen = false;
});

logo.addEventListener("click", function () {
    menu.classList.remove("menu-open");
    menuOpen = false;
});


/*==================== Gestion du bouton scroll to top et navBar au scroll ====================*/

window.addEventListener("scroll", function () {
    if(window.scrollY > 100){
        btnScrollToTop.style.opacity = "0.7";
        navBar.style.height = "var(--navbar-height)";
        navBar.style.backgroundColor = "var(--color-bg-navbar)";
    }else {
        btnScrollToTop.style.opacity = "0";
        navBar.style.height = "var(--navbar-height-start)";
        navBar.style.backgroundColor = "var(--color-bg-navbar-star)";
    }
});


/*==================== Gestion des elements actif du menu ====================*/

window.addEventListener("scroll", () => {
    declancheurActive(section2, linkSection2);
    declancheurActive(section3,linkSection3);
    declancheurActive(section4,linkSection4);
});

function declancheurActive (elementObs, elementMod) {
    let valeurScroll = window.scrollY;
    let distanceTop = elementObs.offsetTop;
    let hauteurSection = elementObs.clientHeight;

    if (valeurScroll >= (distanceTop - (hauteurSection /2)) && valeurScroll < (distanceTop + (hauteurSection / 2))){
        elementMod.classList.add("active");
    }else {
        elementMod.classList.remove("active");
    }
};