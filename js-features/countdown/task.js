'use strict';
let element = document.getElementById('timer');

let startTimer = 58;

let hh = 0;
let mm = 0;
let ss = 55;

function changeTimer() {
	if (startTimer == 0) {
		clearInterval(interval);
		alert('Вы победили в конкурсе!');
	}
	element.textContent = startTimer;
	startTimer--;
}

function changeHMSTimer() {
	if (ss == 0) {
		if (mm == 0) {
			if (hh == 0) {
				clearInterval(interval);
				alert('Вы победили в конкурсе!');
				document.location.assign('https://blankof.ru/wp-content/uploads/zayavlenie-v-svobodnoj-forme.doc');
				return;
			}
			hh--;
			mm = 60;
		}
		mm--;
		ss = 60;
	}

	ss--;
	element.textContent = `${hh < 10 ? '0' + hh : hh}:${mm < 10 ? '0' + mm : mm}:${ss < 10 ? '0' + ss : ss}`;
}

let interval
//interval= setInterval(changeTimer, 100);
interval = setInterval(changeHMSTimer, 100);