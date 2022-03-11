/*
    =========================================
    =========================================
    Portfolio Yara Prins
    Versie 1
    Student Communication & Multimedia Design
    Hogeschool van Amsterdam
    
    Made by
    © Yara Prins
      01-03-2022
    =========================================
    =========================================
*/


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

const imgGalleryFED = document.querySelector(".section3 div:nth-of-type(2) div.gallery-fed");
const imgGalleryHCI = document.querySelector(".section3 div:nth-of-type(3) div.gallery-hci");
const imgGalleryPT2 = document.querySelector(".section3 div:nth-of-type(4) div.gallery-pt2");
const imgGalleryVID = document.querySelector(".section3 div:nth-of-type(5) div.gallery-vid");
const imgGalleryPT1 = document.querySelector(".section3 div:nth-of-type(6) div.gallery-pt1");
const imgGalleryVRM2 = document.querySelector(".section3 div:nth-of-type(7) div.gallery-vrm2");

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


/*  
    ============================
    ============================
            AFB GALLERY
    ============================
    ============================
*/

let galleryImgFED_effect = document.querySelectorAll(".section3 div div.gallery-fed div .gallery-img");
let galleryImgHCI_effect = document.querySelectorAll(".section3 div div.gallery-hci div .gallery-img");
let galleryImgPT2_effect = document.querySelectorAll(".section3 div div.gallery-pt2 div .gallery-img");
let galleryImgVID_effect = document.querySelectorAll(".section3 div div.gallery-vid div .gallery-img");
let galleryImgPT1_effect = document.querySelectorAll(".section3 div div.gallery-pt1 div .gallery-img");
let galleryImgVRM2_effect = document.querySelectorAll(".section3 div div.gallery-vrm2 div .gallery-img");

let getLatestOpenedImgFED;
let getLatestOpenedImgHCI;
let getLatestOpenedImgPT2;
let getLatestOpenedImgVID;
let getLatestOpenedImgPT1;
let getLatestOpenedImgVRM2;

let windowWidth = window.innerWidth;


/*  
    ===========
        FED
    ===========
*/

if(galleryImgFED_effect) {
    galleryImgFED_effect.forEach(function(image, index) {
        image.onclick = function() {
            let getElementCss = window.getComputedStyle(image);
            let getFullImgUrl = getElementCss.getPropertyValue("background-image");
            let getImgUrlPos = getFullImgUrl.split("assets/img/thumbnails/fed/");
            let setNewImgUrl = getImgUrlPos[1].replace('")', '');

            getLatestOpenedImgFED = index + 1;

            let container = document.body;
            let newImgWindow = document.createElement("div");
            container.appendChild(newImgWindow);
            newImgWindow.setAttribute("class", "img-window");
            newImgWindow.setAttribute("onclick", "closeImgFED()");


            let newImg = document.createElement("img");
            newImgWindow.appendChild(newImg);
            newImg.setAttribute("src", "assets/img/fed/" + setNewImgUrl);
            newImg.setAttribute("id", "current-img");

            newImg.onload = function() {
                let imgWidth = this.width;
                let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 90;


                let newNextBtn = document.createElement("a");
                let btnNextText = document.createTextNode("Next");
                newNextBtn.appendChild(btnNextText);
                container.appendChild(newNextBtn);
                newNextBtn.setAttribute("class", "img-btn-next");
                newNextBtn.setAttribute("onclick", "changeImgFED(1)");
                newNextBtn.style.cssText = "right: "+ calcImgToEdge +"px;";
    
                let newPrevBtn = document.createElement("a");
                let btnPrevText = document.createTextNode("Prev");
                newPrevBtn.appendChild(btnPrevText);
                container.appendChild(newPrevBtn);
                newPrevBtn.setAttribute("class", "img-btn-prev");
                newPrevBtn.setAttribute("onclick", "changeImgFED(0)");
                newPrevBtn.style.cssText = "left: "+ calcImgToEdge +"px;";
            }

            

            // alert(getFullImgUrl);
        }
    });
}

function closeImgFED() {
    document.querySelector(".img-window").remove();
    document.querySelector(".img-btn-next").remove();
    document.querySelector(".img-btn-prev").remove();

}

function changeImgFED(changeDir) {
    document.querySelector("#current-img").remove();

    let getImgWindow = document.querySelector(".img-window");
    let newImg = document.createElement("img");
    getImgWindow.appendChild(newImg);

    let calcNewImg;
    if(changeDir === 1) {
        calcNewImg = getLatestOpenedImgFED + 1;
        if(calcNewImg > galleryImgFED_effect.length) {
            calcNewImg = 1;
        }
    }
    else if (changeDir === 0) {
        calcNewImg = getLatestOpenedImgFED - 1;
        if(calcNewImg < 1) {
            calcNewImg = galleryImgFED_effect.length;
        }
    }

    newImg.setAttribute("src", "assets/img/fed/img" + calcNewImg + ".png");
    newImg.setAttribute("id", "current-img");

    getLatestOpenedImgFED = calcNewImg;

    newImg.onload = function() {
        let imgWidth = this.width;
        let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 90;

        let nextBtn = document.querySelector(".img-btn-next");
        nextBtn.style.cssText = "right: "+ calcImgToEdge +"px;";

        let prevBtn = document.querySelector(".img-btn-prev");
        prevBtn.style.cssText = "left: "+ calcImgToEdge +"px;";
    }

}

/*  
    ===========
        HCI
    ===========
*/

if(galleryImgHCI_effect) {
    galleryImgHCI_effect.forEach(function(image, index) {
        image.onclick = function() {
            let getElementCss = window.getComputedStyle(image);
            let getFullImgUrl = getElementCss.getPropertyValue("background-image");
            let getImgUrlPos = getFullImgUrl.split("assets/img/thumbnails/hci/");
            let setNewImgUrl = getImgUrlPos[1].replace('")', '');

            getLatestOpenedImgHCI = index + 1;

            let container = document.body;
            let newImgWindow = document.createElement("div");
            container.appendChild(newImgWindow);
            newImgWindow.setAttribute("class", "img-window");
            newImgWindow.setAttribute("onclick", "closeImgHCI()");


            let newImg = document.createElement("img");
            newImgWindow.appendChild(newImg);
            newImg.setAttribute("src", "assets/img/hci/" + setNewImgUrl);
            newImg.setAttribute("id", "current-img");

            newImg.onload = function() {
                let imgWidth = this.width;
                let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 90;


                let newNextBtn = document.createElement("a");
                let btnNextText = document.createTextNode("Next");
                newNextBtn.appendChild(btnNextText);
                container.appendChild(newNextBtn);
                newNextBtn.setAttribute("class", "img-btn-next");
                newNextBtn.setAttribute("onclick", "changeImgHCI(1)");
                newNextBtn.style.cssText = "right: "+ calcImgToEdge +"px;";
    
                let newPrevBtn = document.createElement("a");
                let btnPrevText = document.createTextNode("Prev");
                newPrevBtn.appendChild(btnPrevText);
                container.appendChild(newPrevBtn);
                newPrevBtn.setAttribute("class", "img-btn-prev");
                newPrevBtn.setAttribute("onclick", "changeImgHCI(0)");
                newPrevBtn.style.cssText = "left: "+ calcImgToEdge +"px;";
            }

            

            // alert(getFullImgUrl);
        }
    });
}

function closeImgHCI() {
    document.querySelector(".img-window").remove();
    document.querySelector(".img-btn-next").remove();
    document.querySelector(".img-btn-prev").remove();

}

function changeImgHCI(changeDir) {
    document.querySelector("#current-img").remove();

    let getImgWindow = document.querySelector(".img-window");
    let newImg = document.createElement("img");
    getImgWindow.appendChild(newImg);

    let calcNewImg;
    if(changeDir === 1) {
        calcNewImg = getLatestOpenedImgHCI + 1;
        if(calcNewImg > galleryImgHCI_effect.length) {
            calcNewImg = 1;
        }
    }
    else if (changeDir === 0) {
        calcNewImg = getLatestOpenedImgHCI - 1;
        if(calcNewImg < 1) {
            calcNewImg = galleryImgHCI_effect.length;
        }
    }

    newImg.setAttribute("src", "assets/img/hci/img" + calcNewImg + ".png");
    newImg.setAttribute("id", "current-img");

    getLatestOpenedImgHCI = calcNewImg;

    newImg.onload = function() {
        let imgWidth = this.width;
        let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 90;

        let nextBtn = document.querySelector(".img-btn-next");
        nextBtn.style.cssText = "right: "+ calcImgToEdge +"px;";

        let prevBtn = document.querySelector(".img-btn-prev");
        prevBtn.style.cssText = "left: "+ calcImgToEdge +"px;";
    }

}

/*  
    ===========
        PT2
    ===========
*/

if(galleryImgPT2_effect) {
    galleryImgPT2_effect.forEach(function(image, index) {
        image.onclick = function() {
            let getElementCss = window.getComputedStyle(image);
            let getFullImgUrl = getElementCss.getPropertyValue("background-image");
            let getImgUrlPos = getFullImgUrl.split("assets/img/thumbnails/projectTeam2/");
            let setNewImgUrl = getImgUrlPos[1].replace('")', '');

            getLatestOpenedImgPT2 = index + 1;

            let container = document.body;
            let newImgWindow = document.createElement("div");
            container.appendChild(newImgWindow);
            newImgWindow.setAttribute("class", "img-window");
            newImgWindow.setAttribute("onclick", "closeImgPT2()");


            let newImg = document.createElement("img");
            newImgWindow.appendChild(newImg);
            newImg.setAttribute("src", "assets/img/projectTeam2/" + setNewImgUrl);
            newImg.setAttribute("id", "current-img");

            newImg.onload = function() {
                let imgWidth = this.width;
                let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 90;


                let newNextBtn = document.createElement("a");
                let btnNextText = document.createTextNode("Next");
                newNextBtn.appendChild(btnNextText);
                container.appendChild(newNextBtn);
                newNextBtn.setAttribute("class", "img-btn-next");
                newNextBtn.setAttribute("onclick", "changeImgPT2(1)");
                newNextBtn.style.cssText = "right: "+ calcImgToEdge +"px;";
    
                let newPrevBtn = document.createElement("a");
                let btnPrevText = document.createTextNode("Prev");
                newPrevBtn.appendChild(btnPrevText);
                container.appendChild(newPrevBtn);
                newPrevBtn.setAttribute("class", "img-btn-prev");
                newPrevBtn.setAttribute("onclick", "changeImgPT2(0)");
                newPrevBtn.style.cssText = "left: "+ calcImgToEdge +"px;";
            }

            

            // alert(getFullImgUrl);
        }
    });
}

function closeImgPT2() {
    document.querySelector(".img-window").remove();
    document.querySelector(".img-btn-next").remove();
    document.querySelector(".img-btn-prev").remove();

}

function changeImgPT2(changeDir) {
    document.querySelector("#current-img").remove();

    let getImgWindow = document.querySelector(".img-window");
    let newImg = document.createElement("img");
    getImgWindow.appendChild(newImg);

    let calcNewImg;
    if(changeDir === 1) {
        calcNewImg = getLatestOpenedImgPT2 + 1;
        if(calcNewImg > galleryImgPT2_effect.length) {
            calcNewImg = 1;
        }
    }
    else if (changeDir === 0) {
        calcNewImg = getLatestOpenedImgPT2 - 1;
        if(calcNewImg < 1) {
            calcNewImg = galleryImgPT2_effect.length;
        }
    }

    newImg.setAttribute("src", "assets/img/projectTeam2/img" + calcNewImg + ".png");
    newImg.setAttribute("id", "current-img");

    getLatestOpenedImgPT2 = calcNewImg;

    newImg.onload = function() {
        let imgWidth = this.width;
        let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 90;

        let nextBtn = document.querySelector(".img-btn-next");
        nextBtn.style.cssText = "right: "+ calcImgToEdge +"px;";

        let prevBtn = document.querySelector(".img-btn-prev");
        prevBtn.style.cssText = "left: "+ calcImgToEdge +"px;";
    }

}

/*  
    ===========
        VID
    ===========
*/

if(galleryImgVID_effect) {
    galleryImgVID_effect.forEach(function(image, index) {
        image.onclick = function() {
            let getElementCss = window.getComputedStyle(image);
            let getFullImgUrl = getElementCss.getPropertyValue("background-image");
            let getImgUrlPos = getFullImgUrl.split("assets/img/thumbnails/vid/");
            let setNewImgUrl = getImgUrlPos[1].replace('")', '');

            getLatestOpenedImgVID = index + 1;

            let container = document.body;
            let newImgWindow = document.createElement("div");
            container.appendChild(newImgWindow);
            newImgWindow.setAttribute("class", "img-window");
            newImgWindow.setAttribute("onclick", "closeImgVID()");


            let newImg = document.createElement("img");
            newImgWindow.appendChild(newImg);
            newImg.setAttribute("src", "assets/img/vid/" + setNewImgUrl);
            newImg.setAttribute("id", "current-img");

            newImg.onload = function() {
                let imgWidth = this.width;
                let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 90;


                let newNextBtn = document.createElement("a");
                let btnNextText = document.createTextNode("Next");
                newNextBtn.appendChild(btnNextText);
                container.appendChild(newNextBtn);
                newNextBtn.setAttribute("class", "img-btn-next");
                newNextBtn.setAttribute("onclick", "changeImgVID(1)");
                newNextBtn.style.cssText = "right: "+ calcImgToEdge +"px;";
    
                let newPrevBtn = document.createElement("a");
                let btnPrevText = document.createTextNode("Prev");
                newPrevBtn.appendChild(btnPrevText);
                container.appendChild(newPrevBtn);
                newPrevBtn.setAttribute("class", "img-btn-prev");
                newPrevBtn.setAttribute("onclick", "changeImgVID(0)");
                newPrevBtn.style.cssText = "left: "+ calcImgToEdge +"px;";
            }

            

            // alert(getFullImgUrl);
        }
    });
}

function closeImgVID() {
    document.querySelector(".img-window").remove();
    document.querySelector(".img-btn-next").remove();
    document.querySelector(".img-btn-prev").remove();

}

function changeImgVID(changeDir) {
    document.querySelector("#current-img").remove();

    let getImgWindow = document.querySelector(".img-window");
    let newImg = document.createElement("img");
    getImgWindow.appendChild(newImg);

    let calcNewImg;
    if(changeDir === 1) {
        calcNewImg = getLatestOpenedImgVID + 1;
        if(calcNewImg > galleryImgVID_effect.length) {
            calcNewImg = 1;
        }
    }
    else if (changeDir === 0) {
        calcNewImg = getLatestOpenedImgVID - 1;
        if(calcNewImg < 1) {
            calcNewImg = galleryImgVID_effect.length;
        }
    }

    newImg.setAttribute("src", "assets/img/vid/img" + calcNewImg + ".png");
    newImg.setAttribute("id", "current-img");

    getLatestOpenedImgVID = calcNewImg;

    newImg.onload = function() {
        let imgWidth = this.width;
        let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 90;

        let nextBtn = document.querySelector(".img-btn-next");
        nextBtn.style.cssText = "right: "+ calcImgToEdge +"px;";

        let prevBtn = document.querySelector(".img-btn-prev");
        prevBtn.style.cssText = "left: "+ calcImgToEdge +"px;";
    }

}

/*  
    ===========
        PT1
    ===========
*/

if(galleryImgPT1_effect) {
    galleryImgPT1_effect.forEach(function(image, index) {
        image.onclick = function() {
            let getElementCss = window.getComputedStyle(image);
            let getFullImgUrl = getElementCss.getPropertyValue("background-image");
            let getImgUrlPos = getFullImgUrl.split("assets/img/thumbnails/projectTeam1/");
            let setNewImgUrl = getImgUrlPos[1].replace('")', '');

            getLatestOpenedImgPT1 = index + 1;

            let container = document.body;
            let newImgWindow = document.createElement("div");
            container.appendChild(newImgWindow);
            newImgWindow.setAttribute("class", "img-window");
            newImgWindow.setAttribute("onclick", "closeImgPT1()");


            let newImg = document.createElement("img");
            newImgWindow.appendChild(newImg);
            newImg.setAttribute("src", "assets/img/projectTeam1/" + setNewImgUrl);
            newImg.setAttribute("id", "current-img");

            newImg.onload = function() {
                let imgWidth = this.width;
                let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 90;


                let newNextBtn = document.createElement("a");
                let btnNextText = document.createTextNode("Next");
                newNextBtn.appendChild(btnNextText);
                container.appendChild(newNextBtn);
                newNextBtn.setAttribute("class", "img-btn-next");
                newNextBtn.setAttribute("onclick", "changeImgPT1(1)");
                newNextBtn.style.cssText = "right: "+ calcImgToEdge +"px;";
    
                let newPrevBtn = document.createElement("a");
                let btnPrevText = document.createTextNode("Prev");
                newPrevBtn.appendChild(btnPrevText);
                container.appendChild(newPrevBtn);
                newPrevBtn.setAttribute("class", "img-btn-prev");
                newPrevBtn.setAttribute("onclick", "changeImgPT1(0)");
                newPrevBtn.style.cssText = "left: "+ calcImgToEdge +"px;";
            }

            

            // alert(getFullImgUrl);
        }
    });
}

function closeImgPT1() {
    document.querySelector(".img-window").remove();
    document.querySelector(".img-btn-next").remove();
    document.querySelector(".img-btn-prev").remove();

}

function changeImgPT1(changeDir) {
    document.querySelector("#current-img").remove();

    let getImgWindow = document.querySelector(".img-window");
    let newImg = document.createElement("img");
    getImgWindow.appendChild(newImg);

    let calcNewImg;
    if(changeDir === 1) {
        calcNewImg = getLatestOpenedImgPT1 + 1;
        if(calcNewImg > galleryImgPT1_effect.length) {
            calcNewImg = 1;
        }
    }
    else if (changeDir === 0) {
        calcNewImg = getLatestOpenedImgPT1 - 1;
        if(calcNewImg < 1) {
            calcNewImg = galleryImgPT1_effect.length;
        }
    }

    newImg.setAttribute("src", "assets/img/projectTeam1/img" + calcNewImg + ".png");
    newImg.setAttribute("id", "current-img");

    getLatestOpenedImgPT1 = calcNewImg;

    newImg.onload = function() {
        let imgWidth = this.width;
        let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 90;

        let nextBtn = document.querySelector(".img-btn-next");
        nextBtn.style.cssText = "right: "+ calcImgToEdge +"px;";

        let prevBtn = document.querySelector(".img-btn-prev");
        prevBtn.style.cssText = "left: "+ calcImgToEdge +"px;";
    }

}

/*  
    ===========
        VRM2
    ===========
*/

if(galleryImgVRM2_effect) {
    galleryImgVRM2_effect.forEach(function(image, index) {
        image.onclick = function() {
            let getElementCss = window.getComputedStyle(image);
            let getFullImgUrl = getElementCss.getPropertyValue("background-image");
            let getImgUrlPos = getFullImgUrl.split("/img/thumbnails/vormgeving2/");
            let setNewImgUrl = getImgUrlPos[1].replace('")', '');

            getLatestOpenedImgVRM2 = index + 1;

            let container = document.body;
            let newImgWindow = document.createElement("div");
            container.appendChild(newImgWindow);
            newImgWindow.setAttribute("class", "img-window");
            newImgWindow.setAttribute("onclick", "closeImgVRM2()");


            let newImg = document.createElement("img");
            newImgWindow.appendChild(newImg);
            newImg.setAttribute("src", "assets/img/vormgeving2/" + setNewImgUrl);
            newImg.setAttribute("id", "current-img");

            newImg.onload = function() {
                let imgWidth = this.width;
                let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 90;


                let newNextBtn = document.createElement("a");
                let btnNextText = document.createTextNode("Next");
                newNextBtn.appendChild(btnNextText);
                container.appendChild(newNextBtn);
                newNextBtn.setAttribute("class", "img-btn-next");
                newNextBtn.setAttribute("onclick", "changeImgVRM2(1)");
                newNextBtn.style.cssText = "right: "+ calcImgToEdge +"px;";
    
                let newPrevBtn = document.createElement("a");
                let btnPrevText = document.createTextNode("Prev");
                newPrevBtn.appendChild(btnPrevText);
                container.appendChild(newPrevBtn);
                newPrevBtn.setAttribute("class", "img-btn-prev");
                newPrevBtn.setAttribute("onclick", "changeImgVRM2(0)");
                newPrevBtn.style.cssText = "left: "+ calcImgToEdge +"px;";
            }

            

            // alert(getFullImgUrl);
        }
    });
}

function closeImgVRM2() {
    document.querySelector(".img-window").remove();
    document.querySelector(".img-btn-next").remove();
    document.querySelector(".img-btn-prev").remove();

}

function changeImgVRM2(changeDir) {
    document.querySelector("#current-img").remove();

    let getImgWindow = document.querySelector(".img-window");
    let newImg = document.createElement("img");
    getImgWindow.appendChild(newImg);

    let calcNewImg;
    if(changeDir === 1) {
        calcNewImg = getLatestOpenedImgVRM2 + 1;
        if(calcNewImg > galleryImgVRM2_effect.length) {
            calcNewImg = 1;
        }
    }
    else if (changeDir === 0) {
        calcNewImg = getLatestOpenedImgVRM2 - 1;
        if(calcNewImg < 1) {
            calcNewImg = galleryImgVRM2_effect.length;
        }
    }

    newImg.setAttribute("src", "assets/img/vormgeving2/img" + calcNewImg + ".png");
    newImg.setAttribute("id", "current-img");

    getLatestOpenedImgVRM2 = calcNewImg;

    newImg.onload = function() {
        let imgWidth = this.width;
        let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 90;

        let nextBtn = document.querySelector(".img-btn-next");
        nextBtn.style.cssText = "right: "+ calcImgToEdge +"px;";

        let prevBtn = document.querySelector(".img-btn-prev");
        prevBtn.style.cssText = "left: "+ calcImgToEdge +"px;";
    }

}