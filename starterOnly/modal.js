function editNav() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
	modalbg.style.display = "flex";
	disableScroll();
}

// close modal form
function closeModal() {
	modalbg.style.display = "none";

	document.getElementById("form").reset();
	document.getElementById("form").style.display = "flex";
	document.getElementById("confirmation").remove();
	document.getElementsByClassName("btn-close")[0].remove();

	enableScroll();
}

function disableScroll() {
	// Obtenir la position de défilement actuelle
	const scrollY = window.scrollY;

	// Ajouter des styles pour empêcher le défilement
	document.body.style.position = 'fixed';
	document.body.style.top = `-${scrollY}px`;
	document.body.style.width = '100%';
	document.body.style.overflowY = 'none';
}

function enableScroll() {
	// Récupérer la position de défilement
	const scrollY = document.body.style.top;
	document.body.style.position = '';
	document.body.style.top = '';
	document.body.style.width = '';
	document.body.style.overflowY = '';
	window.scrollTo(0, parseInt(scrollY || '0') * -1);
}