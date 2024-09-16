const nameRegex = /^[a-zA-Z -]{2,50}$/;
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

function isQuantityValid() {
	const quantityValue = document.getElementById("quantity").value;
	return !isNaN(quantityValue) || quantityValue < 0 || quantityValue > 20;
}

function isBirthdateValid() {
	const date = new Date(document.getElementById("birthdate").value);

	if (!(date instanceof Date) || isNaN(date)) {
		return false;
	}

	const now = Date.now();
	const ONE_YEAR_IN_MILLISECONDS = 365.25 * 24 * 60 * 60 * 1000;
	const age = (now - date) / ONE_YEAR_IN_MILLISECONDS;

	return age >= 16; // Minimum d'âge des participants
}

function isLocationValid() {
	return Array.from(document.querySelectorAll(".checkbox-input[type=radio]")).some(radio => radio.checked);
}

function isCheckboxValid() {
	return document.getElementById("checkbox1").checked;
}

function checkRegex(inputId, regex) {
	return regex.test(document.getElementById(inputId).value);
}

function checkSubmit() {
	if (isCheckboxValid() && isLocationValid() && checkRegex("last", nameRegex) && checkRegex("first", nameRegex) && checkRegex("email", emailRegex) && isBirthdateValid() && isQuantityValid()) {
		const formHeight = document.getElementById("form").offsetHeight;
		document.getElementById("form").style.display = "none";

		const div = document.createElement("div");
		div.id = "confirmation";
		div.innerHTML = "<h2>Merci pour votre inscription</h2>";
		div.style.display = "flex";
		div.style.alignItems = "center";
		div.style.textAlign = "center";
		div.style.padding = "20px";
		div.style.height = formHeight + "px";

		document.getElementsByClassName("modal-body")[0].appendChild(div);

		const closeButton = document.createElement("button");
		closeButton.innerHTML = "Fermer";
		closeButton.classList.add("button");
		closeButton.classList.add("btn-close");
		closeButton.onclick = () => {
			closeModal();
			document.getElementById("form").reset();
			document.getElementById("form").style.display = "block";
			document.getElementById("confirmation").remove();
			closeButton.remove();
		};

		document.getElementsByClassName("modal-body")[0].appendChild(closeButton);
	}
}

document.getElementById("form").onsubmit = (e) => {
	e.preventDefault();
	checkSubmit();
};