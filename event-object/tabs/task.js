"use strict";

let tabs = Array.from(document.querySelectorAll(".tab"));
let content = Array.from(document.querySelectorAll(".tab__content"));

function searchActive(element, index, array) {
	if (element.classList.contains("tab_active")) {
		return element;
	};

	if (element.classList.contains("tab__content_active")) {
		return element;
	};
};

for (let i = 0; i < tabs.length; i++) {
	tabs[i].addEventListener("click", event => {
		let activeContentIndex = content.findIndex(searchActive);
		let activeTabsIndex = tabs.findIndex(searchActive);

		tabs[activeTabsIndex].classList.remove("tab_active");
		tabs[i].classList.add("tab_active");

		activeTabsIndex = tabs.findIndex(searchActive);

		content[activeContentIndex].classList.remove("tab__content_active");
		content[activeTabsIndex].classList.add("tab__content_active");
	});
};