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
            MEER AFB BUTTON
    ================================
    ================================
*/

const buttonMeerAfbFED = document.querySelector(".buttonMeerAfb-fed");
const buttonMeerAfbHCI = document.querySelector(".buttonMeerAfb-hci");
const buttonMeerAfbPT2 = document.querySelector(".buttonMeerAfb-pt2");
const buttonMeerAfbVID = document.querySelector(".buttonMeerAfb-vid");
const buttonMeerAfbPT1 = document.querySelector(".buttonMeerAfb-pt1");
const buttonMeerAfbVRM2 = document.querySelector(".buttonMeerAfb-vrm2");

const imgGalleryFED = document.querySelector(".section3 div:nth-of-type(2) div:nth-of-type(2)");
const imgGalleryHCI = document.querySelector(".section3 div:nth-of-type(3) div:nth-of-type(2)");
const imgGalleryPT2 = document.querySelector(".section3 div:nth-of-type(4) div:nth-of-type(2)");
const imgGalleryVID = document.querySelector(".section3 div:nth-of-type(5) div:nth-of-type(2)");
const imgGalleryPT1 = document.querySelector(".section3 div:nth-of-type(6) div:nth-of-type(2)");
const imgGalleryVRM2 = document.querySelector(".section3 div:nth-of-type(7) div:nth-of-type(2)");

buttonMeerAfbFED.addEventListener("click", () => {
    if (imgGalleryFED.style.display === "none") {
        imgGalleryFED.style.display = "block";
    } else {
        imgGalleryFED.style.display = "none";
    }
});


buttonMeerAfbHCI.addEventListener("click", () => {
    if (imgGalleryHCI.style.display === "none") {
        imgGalleryHCI.style.display = "block";
    } else {
        imgGalleryHCI.style.display = "none";
    }
});

buttonMeerAfbPT2.addEventListener("click", () => {
    if (imgGalleryPT2.style.display === "none") {
        imgGalleryPT2.style.display = "block";
    } else {
        imgGalleryPT2.style.display = "none";
    }
});

buttonMeerAfbVID.addEventListener("click", () => {
    if (imgGalleryVID.style.display === "none") {
        imgGalleryVID.style.display = "block";
    } else {
        imgGalleryVID.style.display = "none";
    }
});

buttonMeerAfbPT1.addEventListener("click", () => {
    if (imgGalleryPT1.style.display === "none") {
        imgGalleryPT1.style.display = "block";
    } else {
        imgGalleryPT1.style.display = "none";
    }
});

buttonMeerAfbVRM2.addEventListener("click", () => {
    if (imgGalleryVRM2.style.display === "none") {
        imgGalleryVRM2.style.display = "block";
    } else {
        imgGalleryVRM2.style.display = "none";
    }
});
