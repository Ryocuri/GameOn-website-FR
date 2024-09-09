function isFirstNameValid() {
	const lastnameRegex = /^[a-zA-Z -]{2,50}$/;
	return checkRegex("first", lastnameRegex, "firstnameError");
}

function isLastNameValid() {
	const lastnameRegex = /^[a-zA-Z -]{2,50}$/;
	return checkRegex("last", lastnameRegex, "lastnameError");
}

function isEmailValid() {
	const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
	return checkRegex("email", emailRegex, "emailError");
}

function isBirthdateValid() {
	const birthdateRegex = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[012])\/\d{4}$/;
	return checkRegex("birthdate", birthdateRegex, "birthdateError");
}

function isQuantityValid() {
	const quantityValue = document.getElementById("quantity").value;
	const checker = isNaN(quantityValue) || quantityValue < 0 || quantityValue > 20;
	document.getElementById("quantityError").style.display = checker ? "block" : "none";
	return checker;
}

function isLocationValid() {
	document.querySelectorAll(".checkbox-input[type=radio]").forEach((loc) => {
		document.getElementById("locationError").style.display = loc.checked ? "none" : "block";
		return !!loc.checked;
	});
}

function isCheckboxValid() {
	document.getElementById("checkboxError").style.display = document.getElementById("checkbox1").checked ? "none" : "block";
	return document.getElementById("checkbox1").checked;
}

function checkRegex(inputId, regex, errorId) {
	const inputValue = document.getElementById(inputId).value;
	const checker = regex.test(inputValue);
	document.getElementById(errorId).style.display = checker ? "block" : "none";
	return checker;
}

function checkSubmit() {
	if (isCheckboxValid() && isLocationValid() && isLastNameValid() && isFirstNameValid() && isEmailValid() && isBirthdateValid() && isQuantityValid()) {
		document.getElementById("form").submit();
	}
}