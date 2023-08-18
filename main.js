const body = document.querySelector('body');
const menuBtn = document.querySelector('#menu');
const mobListItems = document.querySelector('#listItems');
const modeLight = document.querySelector('#Group_134');
const modeDark = document.querySelector('#modeBtn svg:nth-of-type(1)');
const modeToggle = document.querySelector('#Group_99');
const modeBtn = document.querySelector('#colorMode');
const seeMoreBtn = document.querySelector('#seeMoreWork');
const seeMoreProjects = document.querySelectorAll('.seeMoreProjects');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('menuActive');
    mobListItems.classList.toggle('menuClosed');
    modeBtn.classList.toggle('menuClosed');

})

modeBtn.addEventListener('click', () => {
    modeToggle.classList.toggle('lightMode');
    modeToggle.classList.toggle('darkMode');
    modeLight.classList.toggle('lightOff');
    body.classList.toggle('modeLight');

})

seeMoreBtn.addEventListener('click', () => {
    seeMoreProjects.forEach((project) => {
        project.classList.toggle('seeLessProjects');
        
        if (project.classList.contains('seeLessProjects')) {
            seeMoreBtn.innerHTML = 'see more';
        } else {
            seeMoreBtn.innerHTML = 'see less';
        }
    })
})



