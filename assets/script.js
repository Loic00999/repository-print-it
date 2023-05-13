	/**
	 * Premiers pas sur le langage JavaScript
	 * Projet OpennClassRooms n°5 par Loïc M
	 */
/**
 * Étape 2 : Ajoutez des Event Listeners sur les flèches
 */
	//Clic flèche gauche bouton souris gauche
function clickArrowLeft(arrow_left){
	alert("Click Left");
	console.log(arrow_left);
}
let arrow_left = document.getElementById("arrow_left");
arrow_left.addEventListener("click", clickArrowLeft);
	//Clic flèche gauche bouton souris droit
function clickArrowLeftLeftClick(arrow_left){
	alert("Click Left Left-Click");
	console.log(arrow_left);
}
arrow_left = document.getElementById("arrow_left");
arrow_left.addEventListener("contextmenu", clickArrowLeftLeftClick);
	//Clic flèche droite bouton souris gauche
function clickArrowRight(arrow_right){
	alert("Click Right");
	console.log(arrow_right);
}
let arrow_right = document.getElementById("arrow_right");
arrow_right.addEventListener("click", clickArrowRight);
	//Clic flèche droite bouton souris droit
function clickArrowRightRightClick(arrow_right){
	alert("Click Right Right-Click");
	console.log(arrow_right);
}
arrow_right = document.getElementById("arrow_right");
arrow_right.addEventListener("contextmenu", clickArrowRightRightClick);
/**
 * Étape 3 : Ajoutez des bullet points au slider
 */

/**
 * Étape 4 : Modifiez le slide au clic sur le bouton
 */

/**
 * Étape 5 : Mettez en place le défilement infini sur le carrousel
 */
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]