/* *** Premiers pas sur le langage JavaScript - Projet OpennClassRooms n°5 par Loïc M *** */
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
function createElements(){
  const banner = document.querySelector("#banner");
  const arrowLeft = document.createElement("img");
  arrowLeft.setAttribute("id", "arrow_left");
  arrowLeft.classList.add("arrow");
  arrowLeft.classList.add("arrow_left");
  arrowLeft.setAttribute("src", "./assets/images/arrow_left.png");
  arrowLeft.setAttribute("alt", "arrow left");
  banner.appendChild(arrowLeft);
  const arrowRight = document.createElement("img");
  arrowRight.setAttribute("id", "arrow_right");
  arrowRight.classList.add("arrow");
  arrowRight.classList.add("arrow_right");
  arrowRight.setAttribute("src", "./assets/images/arrow_right.png");
  arrowRight.setAttribute("alt", "arrow right");
  banner.appendChild(arrowRight);
  document.querySelector("p").classList.add("taglinelabel");
}
createElements();
/* *** Création des dots *** */
let slide;
function createSpansDot(){
  for (slide in slides) {
    const spanDot = document.createElement("span");
    spanDot.setAttribute("id", slide);
    spanDot.classList.add("dot");
    document.querySelector(".dots").appendChild(spanDot);
    if (slide == 0) {
      spanDot.classList.add("dot_selected");
    }
  }
}
createSpansDot();
/* *** Action addEventListener *** */
function clickArrowRight(){/* Arrow Right */
  showSlides(slideIndex += 1);
  console.log(clickArrowRight);
}
const arrow_right = document.getElementById("arrow_right");
arrow_right.addEventListener("click", clickArrowRight);
function clickArrowLeft(){/* Arrow Left */
  showSlides(slideIndex += -1);
  console.log(clickArrowLeft);
}
const arrow_left = document.getElementById("arrow_left");
arrow_left.addEventListener("click", clickArrowLeft);
/* *** Carousel *** */
const showSlide = document.querySelector(".banner-img");
const contentTagLine = document.querySelector(".taglinelabel");
let slideIndex = 0;
function showSlides() {/* fonction de Carousel */
  const nSlides = slides.length;/* Variable taille du tableau slides */
  if (slideIndex > nSlides - 1) {slideIndex = 0;}/* Boucle carousel positive */
  if (slideIndex < 0) {slideIndex = nSlides - 1;}/* Boucle carousel négative */
  let updateBanner = slides[slideIndex].image;/* Mise à jour banner */
  showSlide.setAttribute("src", updateBanner);/* Mise à jour banner */
  let updateTagLine = slides[slideIndex].tagLine;/* Mise à jour tagLine */
  contentTagLine.innerHTML = updateTagLine;/* Mise à jour tagLine */
  const allDots = document.querySelectorAll(".dot");/* Mise à jour du dot en focus */
  let focusDot = document.querySelector(".dot_selected");/* Mise à jour du dot en focus */
  focusDot.classList.remove("dot_selected");/* Mise à jour du dot en focus */
  allDots[slideIndex].classList.add("dot_selected");/* Mise à jour du dot en focus */
}