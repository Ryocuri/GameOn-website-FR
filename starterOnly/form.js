function checkFirstName() {
	const firstname = document.getElementById("first");
	const firstnameValue = firstname.value;
	const firstnameError = document.getElementById("firstnameError");
	const firstnameRegex = /^[a-zA-Z -]{2,50}$/;

	if (!firstnameRegex.test(firstnameValue)) {
		firstname.style.borderColor = "red";
		firstnameError.style.display = "block";
	} else {
		firstname.style.borderColor = "green";
		firstnameError.style.display = "none";
	}
}

function checkLastName() {
	const lastname = document.getElementById("last");
	const lastnameValue = lastname.value;
	const lastnameError = document.getElementById("lastnameError");
	const lastnameRegex = /^[a-zA-Z-]{2,50}$/;

	if (!lastnameRegex.test(lastnameValue)) {
		lastname.style.borderColor = "red";
		lastnameError.style.display = "block";
	} else {
		lastname.style.borderColor = "green";
		lastnameError.style.display = "none";
	}

}

function checkEmail() {
	const email = document.getElementById("email");
	const emailValue = email.value;
	const emailError = document.getElementById("emailError");
	const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	if (!emailRegex.test(emailValue)) {
		email.style.borderColor = "red";
		emailError.style.display = "block";
	} else {
		email.style.borderColor = "green";
		emailError.style.display = "none";
	}
}

function checkBirthdate() {
	const birthdate = document.getElementById("birthdate");
	const birthdateValue = birthdate.value;
	const birthdateError = document.getElementById("birthdateError");
	const birthdateRegex = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[012])\/\d{4}$/;
	if (!birthdateRegex.test(birthdateValue)) {
		birthdate.style.borderColor = "red";
		birthdateError.style.display = "block";
	} else {
		birthdate.style.borderColor = "green";
		birthdateError.style.display = "none";
	}
}

function checkQuantity() {
	const quantity = document.getElementById("quantity");
	const quantityValue = quantity.value;
	const quantityError = document.getElementById("quantityError");
	if (isNaN(quantityValue) || quantityValue < 0 || quantityValue > 20) {
		quantity.style.borderColor = "red";
		quantityError.style.display = "block";
	} else {
		quantity.style.borderColor = "green";
		quantityError.style.display = "none";
	}
}

function checkLocation() {
	const location = document.querySelectorAll(".checkbox-input[type=radio]");
	const locationError = document.getElementById("locationError");
	let locationChecked = false;
	location.forEach((loc) => {
		if (loc.checked) {
			locationChecked = true;
		}
	});
	if (!locationChecked) {
		locationError.style.display = "block";
	} else {
		locationError.style.display = "none";
	}
}

function checkCheckbox() {
	const checkbox = document.getElementById("checkbox1");
	const checkboxError = document.getElementById("checkboxError");
	if (!checkbox.checked) {
		checkboxError.style.display = "block";
	} else {
		checkboxError.style.display = "none";
	}
}

function checkSubmit() {
	const name = document.getElementById("first");
	const email = document.getElementById("email");
	const birthdate = document.getElementById("birthdate");
	const quantity = document.getElementById("quantity");
	const location = document.querySelectorAll(".checkbox-input");
	const checkbox = document.getElementById("checkbox1");
	checkFirstName();
	checkLastName();
	checkEmail();
	checkBirthdate();
	checkQuantity();
	checkLocation();
	checkCheckbox();
	let formValid = true;
	if (name.style.borderColor === "red" || email.style.borderColor === "red" || birthdate.style.borderColor === "red" || quantity.style.borderColor === "red") {
		formValid = false;
	}
	let locationChecked = false;
	location.forEach((loc) => {
		if (loc.checked) {
			locationChecked = true;
		}
	});
	if (!locationChecked) {
		formValid = false;
	}
	if (!checkbox.checked) {
		formValid = false;
	}
	if (formValid) {
		document.getElementById("form").submit();
	}
}