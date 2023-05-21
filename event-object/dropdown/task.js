"use strict";

let list = document.querySelector(".dropdown__list");
let dropdownItems = document.querySelectorAll(".dropdown__item");

document.querySelector(".dropdown").onclick = function() {
	list.classList.toggle("dropdown__list_active");
};

for (let i = 0; i < dropdownItems.length; i++) {
	dropdownItems[i].onclick = function() {
		document.querySelector(".dropdown__value").innerHTML = this.querySelector(".dropdown__link").innerHTML;

		return false;
	};
};