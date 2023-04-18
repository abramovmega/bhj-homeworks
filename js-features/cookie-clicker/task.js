'use strict';

let elementSpan = document.getElementById('clicker__counter');
let elementImg = document.getElementById('cookie');
let sumClick = 0;

function cliker() {	
	elementImg.width = elementImg.width == 200 ? 250 : 200;
	elementSpan.textContent = ++sumClick;
}

elementImg.onclick = cliker;

