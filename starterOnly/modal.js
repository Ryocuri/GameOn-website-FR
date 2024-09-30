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
	enableScroll();
	modalbg.style.display = "none";

	document.querySelectorAll(".error-message").forEach((error) => error.style.display = "none");
	document.querySelectorAll(".text-control").forEach((border) => border.style.border = "none");
	document.getElementById("form").reset();
	document.getElementById("form").style.display = "flex";
	document.getElementById("confirmation").remove();
	document.getElementsByClassName("btn-close")[0].remove();

}

function disableScroll() {
	document.body.style.width = '100%';
	document.body.style.overflowY = 'hidden';
}

function enableScroll() {
	document.body.style.overflowY = '';
}