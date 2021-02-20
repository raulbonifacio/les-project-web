import "./../images/favicon.ico";
import "./../images/favicon-16x16.png";
import "./../images/favicon-32x32.png";
import brMasks from "br-masks";
import axios from "axios";

import "bootstrap/dist/js/bootstrap.bundle";

function configureDateInputParserOnSubmit() {
	Array.from(document.forms).forEach(function (form) {
		for (const dateInput of form.querySelectorAll(".date-input")) {
			const dayInput = form.querySelector(
				`input[name=${dateInput.getAttribute("name")}Day]`
			);
			const monthInput = form.querySelector(
				`select[name=${dateInput.getAttribute("name")}Month]`
			);
			const yearInput = form.querySelector(
				`input[name=${dateInput.getAttribute("name")}Year]`
			);

			const date = new Date(dateInput.value);

			if (date != "Invalid Date") {
				dayInput.value = date.getDate();
				monthInput
					.querySelector(`option[value="${date.getMonth()}"]`)
					.setAttribute("selected", "true");
				yearInput.value = date.getFullYear();
			}

			form.addEventListener("submit", function () {
				const day = dayInput.value;
				const month = monthInput.querySelector(` :checked`).value;
				const year = yearInput.value;
				dateInput.value = new Date(year, month, day).toString();
			});
		}
	});
}

function configureAddressAutofillByCEP() {
	Array.from(document.querySelectorAll(".address-autofill")).forEach(
		autofillContainer => {
			const cepInput = autofillContainer.querySelector("input.cep");

			cepInput.addEventListener("blur", function () {
				const value = this.value.replace(/[^\d]/, "");
				if (value.length != 8) return;

				axios
					.get("https://viacep.com.br/ws/" + value + "/json")
					.then(function (response) {
						const data = response.data;
						[
							["address", "logradouro"],
							["abbreviation", "uf"],
							["neighbourhood", "bairro"],
							["city", "localidade"],
						].forEach(function ([targetClass, dataName]) {
							const target = autofillContainer.querySelector("." + targetClass);

							if (target) {
								target.value = data.erro ? "" : data[dataName];
							}
						});
					});
			});
		}
	);
}

function configureBrMasks() {
	["cep", "cpf", "phone"].forEach(function (mask) {
		const targets = Array.from(document.querySelectorAll("input." + mask));
		targets.forEach(function (target) {
			target.addEventListener("keydown", function (event) {
				if (event.keyCode == 8 || event.keyCode == 46) {
				} else {
					this.value = brMasks[mask](this.value.replace(/[^\d]/, ""));
				}
			});
		});
	});
}

function configureForwardAndBackButtons() {
	const forwardButton = document.querySelector("#forward-button");

	forwardButton &&
		forwardButton.addEventListener("click", function () {
			history.forward();
		});

	const backButton = document.querySelector("#back-button");

	backButton &&
		backButton.addEventListener("click", function () {
			history.back();
		});
}

function configurePathActivable() {
	Array.from(document.querySelectorAll(".path-activable"))
		.filter(activable =>
			window.location.pathname.startsWith(activable.getAttribute("href"))
		)
		.forEach(activable => activable.classList.add("active"));
}
document.addEventListener("DOMContentLoaded", function () {
	configureDateInputParserOnSubmit();
	configureForwardAndBackButtons();
	configurePathActivable();
	configureAddressAutofillByCEP();
	configureBrMasks();
});
