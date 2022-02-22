const nav = document.querySelector("body header nav");
const navToggle = document.querySelector(".mobNav-trigger");

const sectionActive = document.querySelector(".sectionActive");

const navHome = document.querySelector("body header nav ul li:nth-of-type(1) a");
const navOverMij = document.querySelector("body header nav ul li:nth-of-type(2) a");
const navMijnWerk = document.querySelector("body header nav ul li:nth-of-type(3) a");
const navContact = document.querySelector("body header nav ul li:nth-of-type(4) a");




navToggle.addEventListener("click", () => {
    nav.classList.toggle("mobClosed");
    navToggle.classList.toggle("mobNav-trigger-open");
});





/* 
==================================
==================================
==================================
==================================

OMZETTEN VAN windowPosition = window.scrollY 
NAAR Intersection Observer

==================================
*/


window.addEventListener("scroll", () => {
    let windowPosition = window.scrollY;
    // console.log(windowPosition);
    if (windowPosition >= 0 && windowPosition < 650) {
        navOverMij.classList.remove("sectionActive");
        navMijnWerk.classList.remove("sectionActive");
        navContact.classList.remove("sectionActive");

        navHome.classList.add("sectionActive");
    }
    else if (windowPosition > 650 && windowPosition < 1415) {
        navHome.classList.remove("sectionActive");
        navMijnWerk.classList.remove("sectionActive");
        navContact.classList.remove("sectionActive");

        navOverMij.classList.add("sectionActive");
    }
    else if (windowPosition > 1415 && windowPosition < 4155) {
        navHome.classList.remove("sectionActive");
        navOverMij.classList.remove("sectionActive");
        navContact.classList.remove("sectionActive");

        navMijnWerk.classList.add("sectionActive");
    }
    else if (windowPosition > 4155) {
        navHome.classList.remove("sectionActive");
        navOverMij.classList.remove("sectionActive");
        navMijnWerk.classList.remove("sectionActive");

        navContact.classList.add("sectionActive");
    }
})