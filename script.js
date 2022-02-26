/*  
    ==================
    ==================
            NAV
    ==================
    ==================
*/

const nav = document.querySelector("body header nav");
const navToggle = document.querySelector(".mobNav-trigger");
const navList = document.querySelectorAll(".navMob li");

navToggle.addEventListener("click", () => {
    nav.classList.toggle("mobClosed");
    navToggle.classList.toggle("mobNav-trigger-open");
});


/*  
    =====================================
    =====================================
            INTERSECTION OBSERVER
    =====================================
    =====================================
*/

const sections = document.querySelectorAll ("section");
const options = {
    threshold: "0.1",
};

const observer = new IntersectionObserver(entries => {
    entries.forEach((e) => {
        if (e.isIntersecting) {

            nav.classList.add("active");
            console.log(e.target.id);

            navList.forEach(link => {

                link.classList.remove("active");

                if (e.target.id === link.dataset.nav) {
                    link.classList.add("active");
                }
            })
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

/*  
    ================================
    ================================
            BUTTON MEER AFB
    ================================
    ================================
*/

const buttonMeerAfbFED = document.querySelector(".buttonMeerAfb-fed");
const buttonMeerAfbHCI = document.querySelector(".buttonMeerAfb-hci");
const buttonMeerAfbPT2 = document.querySelector(".buttonMeerAfb-pt2");
const buttonMeerAfbVID = document.querySelector(".buttonMeerAfb-vid");
const buttonMeerAfbPT1 = document.querySelector(".buttonMeerAfb-pt1");
const buttonMeerAfbVRM2 = document.querySelector(".buttonMeerAfb-vrm2");



const imgGalleryFED = document.querySelector(".section3 div:nth-of-type(2) div:nth-of-type(3)");
const imgGalleryHCI = document.querySelector(".section3 div:nth-of-type(3) div:nth-of-type(3)");
const imgGalleryPT2 = document.querySelector(".section3 div:nth-of-type(4) div:nth-of-type(3)");
const imgGalleryVID = document.querySelector(".section3 div:nth-of-type(5) div:nth-of-type(3)");
const imgGalleryPT1 = document.querySelector(".section3 div:nth-of-type(6) div:nth-of-type(3)");
const imgGalleryVRM2 = document.querySelector(".section3 div:nth-of-type(7) div:nth-of-type(3)");


buttonMeerAfbFED.addEventListener("click", () => {
    imgGalleryFED.classList.toggle(".meerAfb-fed");
});

buttonMeerAfbHCI.addEventListener("click", () => {
    imgGalleryHCI.classList.toggle(".meerAfb-hci");
});

buttonMeerAfbPT2.addEventListener("click", () => {
    imgGalleryPT2.classList.toggle(".meerAfb-pt2");
});

buttonMeerAfbVID.addEventListener("click", () => {
    imgGalleryVID.classList.toggle(".meerAfb-vid");
});

buttonMeerAfbPT1.addEventListener("click", () => {
    imgGalleryPT1.classList.toggle(".meerAfb-pt1");
});

buttonMeerAfbVRM2.addEventListener("click", () => {
    imgGalleryVRM2.classList.toggle(".meerAfb-vrm2");
});
