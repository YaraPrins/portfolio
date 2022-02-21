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

// ============================================
// ============================================
// ============================================
// ============================================
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//      verander mouseover|mouseleave in jS
//      naar :hover opacity 1 in CSS
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// ============================================
// ============================================
// ============================================
// ============================================
// ============================================


const mediaQuery = window.matchMedia("(max-width: 800px)")

function desktopNav(e) {

    if (e.matches) {
        svg_home.style.opacity = "1";
        svgDice_home.style.opacity = "1";
        svg_overMij.style.opacity = "1";
        svgDice_overMij.style.opacity = "1";
        svg_mijnWerk.style.opacity = "1";
        svgDice_mijnWerk.style.opacity = "1";
        svg_contact.style.opacity = "1";
        svgDice_contact.style.opacity = "1";


        navHome.removeEventListener("mouseover", mouseOverHome);
    
        navHome.removeEventListener("mouseleave", mouseLeaveHome);
    
        // Over Mij
        navOverMij.removeEventListener("mouseover", mouseOverOverMij);
    
        navOverMij.removeEventListener("mouseleave",  mouseLeaveOverMij);
    
        // Mijn Werk
        navMijnWerk.removeEventListener("mouseover", mouseOverMijnWerk);
    
        navMijnWerk.removeEventListener("mouseleave", mouseLeaveMijnWerk);
    
        // Contact
        navContact.removeEventListener("mouseover", mouseOverContact);
    
        navContact.removeEventListener("mouseleave", mouseLeaveContact);


    
    } 
    
    else if (!e.matches)  {
         // Home

         svg_home.style.opacity = "0";
         svgDice_home.style.opacity = "0";
         svg_overMij.style.opacity = "0";
         svgDice_overMij.style.opacity = "0";
         svg_mijnWerk.style.opacity = "0";
         svgDice_mijnWerk.style.opacity = "0";
         svg_contact.style.opacity = "0";
         svgDice_contact.style.opacity = "0";
 
 
         function mouseOverHome () {
             svg_home.style.opacity = "1";
             svgDice_home.style.opacity = "1";
         };
         function mouseLeaveHome () {
             svg_home.style.opacity = "0";
             svgDice_home.style.opacity = "0";
         };
 
         function mouseOverOverMij () {
             svg_overMij.style.opacity = "1";
             svgDice_overMij.style.opacity = "1";
         };
         function mouseLeaveOverMij () {
             svg_overMij.style.opacity = "0";
             svgDice_overMij.style.opacity = "0";
         };
 
         function mouseOverMijnWerk () {
             svg_mijnWerk.style.opacity = "1";
             svgDice_mijnWerk.style.opacity = "1";
         };
         function mouseLeaveMijnWerk () {
             svg_mijnWerk.style.opacity = "0";
             svgDice_mijnWerk.style.opacity = "0";
         };
 
         function mouseOverContact () {
             svg_contact.style.opacity = "1";
             svgDice_contact.style.opacity = "1";
         };
         function mouseLeaveContact () {
             svg_contact.style.opacity = "0";
             svgDice_contact.style.opacity = "0";
         };
 
         navHome.addEventListener("mouseover", mouseOverHome);
     
         navHome.addEventListener("mouseleave", mouseLeaveHome);
     
         // Over Mij
         navOverMij.addEventListener("mouseover", mouseOverOverMij);
     
         navOverMij.addEventListener("mouseleave",  mouseLeaveOverMij);
     
         // Mijn Werk
         navMijnWerk.addEventListener("mouseover", mouseOverMijnWerk);
     
         navMijnWerk.addEventListener("mouseleave", mouseLeaveMijnWerk);
     
         // Contact
         navContact.addEventListener("mouseover", mouseOverContact);
     
         navContact.addEventListener("mouseleave", mouseLeaveContact);
    }
}

desktopNav(mediaQuery)

mediaQuery.addEventListener("change", desktopNav);




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