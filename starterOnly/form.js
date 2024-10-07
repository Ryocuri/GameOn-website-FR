const nameRegex = /^[a-zA-Z -]{2,50}$/;
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

function displayError(inputId, message) {
	if (inputId !== "location") {
		document.getElementById(inputId).style.border = "2px solid red";
	}

	const error = document.getElementById(inputId + "Error");

	error.innerHTML = message;
	error.classList.add("error-display");

}

function isQuantityValid() {
	const quantityValue = document.getElementById("quantity").value;
	if (isNaN(quantityValue) || quantityValue === "" || quantityValue < 0 || quantityValue > 20) {
		displayError("quantity", "Veuillez entrer un nombre entier entre 0 et 20.");
		return false;
	}
	return true;
}

function isBirthdateValid() {
	const date = new Date(document.getElementById("birthdate").value);
	if (!(date instanceof Date) || isNaN(date)) {
		displayError("birthdate", "Veuillez entrer une date valide.");
		return false;
	}

	const age = (Date.now() - date) / (365.25 * 24 * 60 * 60 * 1000);

	if (age < 16) {
		displayError("birthdate", "Vous devez avoir au moins 16 ans pour participer.");
	}

	return age >= 16; // Minimum d'âge des participants
}

function isLocationValid() {
	if (!Array.from(document.querySelectorAll(".checkbox-input[type=radio]")).some(radio => radio.checked)) {
		displayError("location", "Veuillez choisir une ville.");
		return false;
	}
	return true;
}

function isCheckboxValid() {
	if (!document.getElementById("checkbox1").checked) {
		displayError("checkbox1", "Vous devez accepter les conditions d'utilisation.");
		return false;
	}
	return true;
}

function checkRegex(inputId, regex) {
	if (!regex.test(document.getElementById(inputId).value)) {
		displayError(inputId, "Veuillez entrer un(e) " + inputId + " valide.");
		return false;
	}
	return true;
}

function checkSubmit() {
	document.querySelectorAll(".error-display").forEach((error) => error.classList.remove("error-display"));
	document.querySelectorAll(".text-control").forEach((border) => border.style.border = "none");
	isCheckboxValid()
	isLocationValid()
	checkRegex("lastname", nameRegex)
	checkRegex("firstname", nameRegex)
	checkRegex("email", emailRegex)
	isBirthdateValid()
	isQuantityValid()

	if (!document.querySelectorAll(".error-display").length) {
		const formHeight = document.getElementById("form").offsetHeight;
		document.getElementById("form").style.display = "none";

		const div = document.createElement("div");
		div.id = "confirmation";
		div.innerHTML = "<h2>Merci pour votre inscription</h2>";
		div.style.height = formHeight + "px";

		document.getElementsByClassName("modal-body")[0].appendChild(div);

		const closeButton = document.createElement("button");
		closeButton.innerHTML = "Fermer";
		closeButton.classList.add("button");
		closeButton.classList.add("btn-close");
		closeButton.onclick = () => {
			closeModal();
		};

		document.getElementsByClassName("modal-body")[0].appendChild(closeButton);
	}
}

document.getElementById("form").onsubmit = (e) => {
	e.preventDefault();
	checkSubmit();
};