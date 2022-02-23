const nav = document.querySelector("body header nav");
const navToggle = document.querySelector(".mobNav-trigger");


const sections = document.querySelectorAll ("section");
const options = {
    threshold: "0.6",

};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
        if (e.isIntersecting) {
            console.log(e.target.id);


        }
    });
}, options);

sections.forEach((section) => {
    observer.observe(section);
});








navToggle.addEventListener("click", () => {
    nav.classList.toggle("mobClosed");
    navToggle.classList.toggle("mobNav-trigger-open");
});