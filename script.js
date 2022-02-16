const nav = document.querySelector("body header nav");
const sectionActive = document.querySelector(".sectionActive");

const navHome = document.querySelector("body header nav ul li:nth-of-type(1) a");
const navOverMij = document.querySelector("body header nav ul li:nth-of-type(2) a");
const navMijnWerk = document.querySelector("body header nav ul li:nth-of-type(3) a");
const navContact = document.querySelector("body header nav ul li:nth-of-type(4) a");

const svg_home = document.querySelector("body header nav ul li:nth-of-type(1) a svg:nth-of-type(1)");
const svg_overMij = document.querySelector("body header nav ul li:nth-of-type(2) a svg:nth-of-type(1)");
const svg_mijnWerk = document.querySelector("body header nav ul li:nth-of-type(3) a svg:nth-of-type(1)");
const svg_contact = document.querySelector("body header nav ul li:nth-of-type(4) a svg:nth-of-type(1)");

const svgDice_home = document.querySelector("body header nav ul li:nth-of-type(1) a svg:nth-of-type(2)");
const svgDice_overMij = document.querySelector("body header nav ul li:nth-of-type(2) a svg:nth-of-type(2)");
const svgDice_mijnWerk = document.querySelector("body header nav ul li:nth-of-type(3) a svg:nth-of-type(2)");
const svgDice_contact = document.querySelector("body header nav ul li:nth-of-type(4) a svg:nth-of-type(2)");

// Home

navHome.addEventListener("mouseover", () => {
    svg_home.style.opacity = "1";
    svgDice_home.style.opacity = "1";
});

navHome.addEventListener("mouseleave", () => {
    svg_home.style.opacity = "0";
    svgDice_home.style.opacity = "0";
});

// Over Mij

navOverMij.addEventListener("mouseover", () => {
    svg_overMij.style.opacity = "1";
    svgDice_overMij.style.opacity = "1";
});

navOverMij.addEventListener("mouseleave", () => {
    svg_overMij.style.opacity = "0";
    svgDice_overMij.style.opacity = "0";
});

// Mijn Werk

navMijnWerk.addEventListener("mouseover", () => {
    svg_mijnWerk.style.opacity = "1";
    svgDice_mijnWerk.style.opacity = "1";
});

navMijnWerk.addEventListener("mouseleave", () => {
    svg_mijnWerk.style.opacity = "0";
    svgDice_mijnWerk.style.opacity = "0";
});

// Contact

navContact.addEventListener("mouseover", () => {
    svg_contact.style.opacity = "1";
    svgDice_contact.style.opacity = "1";
});

navContact.addEventListener("mouseleave", () => {
    svg_contact.style.opacity = "0";
    svgDice_contact.style.opacity = "0";
});


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