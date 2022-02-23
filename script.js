const nav = document.querySelector("body header nav");
const navToggle = document.querySelector(".mobNav-trigger");

const navList = document.querySelectorAll(".navMob li");


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








navToggle.addEventListener("click", () => {
    nav.classList.toggle("mobClosed");
    navToggle.classList.toggle("mobNav-trigger-open");
});