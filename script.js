const firstName = document.getElementById("first-name");
const firstNameError = document.querySelector("#first-name ~ .error");
const lastName = document.getElementById("last-name");
const lastNameError = document.querySelector("#last-name ~ .error");
const email = document.getElementById("email");
const emailError = document.querySelector("#email ~ .error");
const number = document.getElementById("number");
const numberError = document.querySelector("#number ~ .error");
const password = document.getElementById("password");
const passwordError = document.querySelector("#password ~ .error");
const confirmPassword = document.getElementById("confirm-password");
const confirmPasswordError = document.querySelector(
	"#confirm-password ~ .error",
);

function checkPattern(inputObject, errorObject, name, pattern) {
	inputObject.setAttribute("class", "input-entered");
	msg = "";
	if (inputObject.value == "") {
		msg = `Please, enter your ${name}`;
	} else if (!pattern.test(inputObject.value)) {
		msg = `Please, enter a valid ${name}`;
	}
	errorObject.innerText = msg;
	inputObject.setCustomValidity(msg);
}

firstName.addEventListener("input", () => {
	pattern = /^[a-zA-Z\s]+$/g;
	checkPattern(firstName, firstNameError, "name", pattern);
});

lastName.addEventListener("input", () => {
	pattern = /^[a-zA-Z\s]+$/g;
	checkPattern(lastName, lastNameError, "last name", pattern);
});

email.addEventListener("input", () => {
	pattern =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	checkPattern(email, emailError, "email", pattern);
});

number.addEventListener("input", () => {
	pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
	checkPattern(number, numberError, "phone number", pattern);
});

password.addEventListener("input", () => {
	password.setAttribute("class", "input-entered");
	pattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
	msg = "";
	if (password.value == "") {
		msg = "Please, enter your password";
	} else if (!pattern.test(password.value)) {
		msg =
			"Password must contain at least 8 characters, with at least one symbol, upper and lower case letters and a number";
	}
	passwordError.innerText = msg;
	password.setCustomValidity(msg);
});

confirmPassword.addEventListener("input", () => {
	confirmPassword.setAttribute("class", "input-entered");
	msg = "";
	if (password.value != confirmPassword.value) {
		msg = "Passwords do not match";
	}
	confirmPasswordError.innerText = msg;
	confirmPassword.setCustomValidity(msg);
});
