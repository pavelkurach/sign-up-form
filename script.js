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

firstName.addEventListener("input", () => {
	pattern = /^[a-zA-Z\s]+$/g;
	msg = "";
	if (firstName.value == "") {
		msg = "Please, enter your name";
	} else if (!pattern.test(firstName.value)) {
		msg = "Please, enter a valid name";
	}
	firstNameError.innerText = msg;
	firstName.setCustomValidity(msg);
});

lastName.addEventListener("input", () => {
	pattern = /^[a-zA-Z\s]+$/g;
	msg = "";
	if (lastName.value == "") {
		msg = "Please, enter your last name";
	} else if (!pattern.test(lastName.value)) {
		msg = "Please, enter a valid last name";
	}
	lastNameError.innerText = msg;
	lastName.setCustomValidity(msg);
});
