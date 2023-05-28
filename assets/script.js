/* *** Premiers pas sur le langage JavaScript *** */
/* *** Projet OpennClassRooms n°5 par Loïc M *** */
const slides = [
  {
    image: "./assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "./assets/images/slideshow/slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "./assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "./assets/images/slideshow/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
/* *** Mise à jour du code HTML via JavaScript *** */
const removeImg = document.querySelector(".banner-img");
removeImg.remove();
function createElements() {
  const divBannerSlides = document.createElement("div");
  divBannerSlides.setAttribute("id", "banner-slides");
  divBannerSlides.classList.add("banner-img");
  document.querySelector("#banner").appendChild(divBannerSlides);
  const arrowLeft = document.createElement("img");
  arrowLeft.setAttribute("id", "arrow_left");
  arrowLeft.classList.add("arrow");
  arrowLeft.classList.add("arrow_left");
  arrowLeft.src = "./assets/images/arrow_left.png";
  arrowLeft.setAttribute("alt", "arrow left");
  document.querySelector("#banner").appendChild(arrowLeft);
  const arrowRight = document.createElement("img");
  arrowRight.setAttribute("id", "arrow_right");
  arrowRight.classList.add("arrow");
  arrowRight.classList.add("arrow_right");
  arrowRight.src = "./assets/images/arrow_right.png";
  arrowRight.setAttribute("alt", "arrow right");
  document.querySelector("#banner").appendChild(arrowRight);
  document.querySelector("p").classList.add("tag-line-label");
}
createElements();
/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
function addSlideInBanner() {
  const bannerSlides = document.getElementById("banner-slides");
  slides.forEach(function (slide, index) {
    console.log(slide);
    const divImg = document.createElement("img");
    divImg.classList.add("banner-img");
    divImg.classList.add("picSlide"); /**/
    divImg.setAttribute("src", slide.image);
    divImg.setAttribute("alt", slide.tagLine);
    divImg.setAttribute("id", index);
    bannerSlides.appendChild(divImg);
  });
}
addSlideInBanner();
/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
function createSpansDot() {
  let slide;
  for (slide in slides) {
    const spanDot = document.createElement("span");
    spanDot.setAttribute("id", "current-" + slide);
    spanDot.classList.add("dot");
    document.querySelector(".dots").appendChild(spanDot);
    if (slide == 0) {
      spanDot.classList.add("dot_selected");
    }
  }
}
createSpansDot();
/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
/* *** Action addEventListener *** */
/* Arrows */
function clickArrowRight() {
  showSlides(slideIndex += 1);
  updateTagLine();
  console.log(updateTagLine);
}
let arrow_right = document.getElementById("arrow_right");
arrow_right.addEventListener("click", clickArrowRight);
function clickArrowLeft() {
  showSlides(slideIndex += -1);
  updateTagLine();
  console.log(updateTagLine);
}
let arrow_left = document.getElementById("arrow_left");
arrow_left.addEventListener("click", clickArrowLeft);
/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
/* TagLine */
function updateTagLine() {
  const labeltagLine = document.querySelector(".tag-line-label");
  let slideStart = 0;
  let tagLineUpgrade = slides[slideStart].tagLine;
  labeltagLine.innerHTML = tagLineUpgrade;
}
updateTagLine();
/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
/* Dots */
function clickDot1() {
  showSlides(slideIndex = 1);
}
let current1 = document.getElementById("current-0");
current1.addEventListener("click", clickDot1);
function clickDot2() {
  showSlides(slideIndex = 2);
}
let current2 = document.getElementById("current-1");
current2.addEventListener("click", clickDot2);
function clickDot3() {
  showSlides(slideIndex = 3);
}
let current3 = document.getElementById("current-2");
current3.addEventListener("click", clickDot3);
function clickDot4() {
  showSlides(slideIndex = 4);
}
let current4 = document.getElementById("current-3");
current4.addEventListener("click", clickDot4);
/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
/* Carousel */
let slideIndex = 1;
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("picSlide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" dot_selected", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " dot_selected";
  console.log(n);
}