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
  const banner = document.querySelector("#banner");
  const divBannerSlides = document.createElement("div");
  divBannerSlides.setAttribute("id", "banner-slides");
  divBannerSlides.classList.add("banner-img");
  banner.appendChild(divBannerSlides);
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

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
function addSlideInBanner() {
  const bannerSlides = document.getElementById("banner-slides");
  slides.forEach(function (slide, index) {    
    const divImg = document.createElement("img");
    divImg.setAttribute("id", index);
    divImg.classList.add("banner-img");
    divImg.classList.add("picSlide");
    divImg.setAttribute("src", slide.image);
    divImg.setAttribute("alt", slide.tagLine);
    bannerSlides.appendChild(divImg);
    if (index != 0) {
      divImg.style.display = "none";
    }
    console.log(slide);
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
/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */

/* *** Action addEventListener *** */
let slideIndex = 0;
let tagLineIndex = 0;
const updateTagLine = document.querySelector(".taglinelabel");

/* Arrows */
/* Arrow Right */
function clickArrowRight() {
  showSlides();
  upGradeTagLine(tagLineIndex += 1);
  console.log(clickArrowRight);
}
const arrow_right = document.getElementById("arrow_right");
arrow_right.addEventListener("click", clickArrowRight);
/* Arrow Left */
function clickArrowLeft() {
  showSlides(slideIndex += -1);
  upGradeTagLine(tagLineIndex += -1);
  console.log(clickArrowLeft);
}
const arrow_left = document.getElementById("arrow_left");
arrow_left.addEventListener("click", clickArrowLeft);

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
/* Carousel */
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("picSlide");
  let dots = document.getElementsByClassName("dot");
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 0;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" dot_selected", "");
  }
  console.log(slideIndex);
  slides[slideIndex -1].style.display = "block";
  dots[slideIndex -1].className += " dot_selected";
 
  console.log(showSlides);
}

function upGradeTagLine() {
  let i;
  let tagLine = document.getElementsByClassName("taglinelabel");
  for (i = 0; i < tagLine.length; i++) {
    tagLine[i].innerHTML = slides[tagLineIndex].tagLine;
  }
  slides[tagLineIndex -1].innerHTML = slides[tagLineIndex].tagLine;  
  console.log(upGradeTagLine);
}

/* *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** */
/* Dots */
function clickDot1() {
  showSlides(slideIndex = 1);
  updateTagLine.innerHTML = slides[0].tagLine;
}
const current1 = document.getElementById("current-0");
current1.addEventListener("click", clickDot1);

function clickDot2() {
  showSlides(slideIndex = 2);
  updateTagLine.innerHTML = slides[1].tagLine;
}
const current2 = document.getElementById("current-1");
current2.addEventListener("click", clickDot2);

function clickDot3() {
  showSlides(slideIndex = 3);
  updateTagLine.innerHTML = slides[2].tagLine;
}
const current3 = document.getElementById("current-2");
current3.addEventListener("click", clickDot3);

function clickDot4() {
  showSlides(slideIndex = 4);
  updateTagLine.innerHTML = slides[3].tagLine;
}
const current4 = document.getElementById("current-3");
current4.addEventListener("click", clickDot4);