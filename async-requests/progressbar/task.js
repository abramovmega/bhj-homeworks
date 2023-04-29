'use strict';
let form = document.getElementById('form');
let elProgress = document.getElementById('progress');


document.addEventListener('submit', function (event) {
    event.preventDefault();
	let xhr = new XMLHttpRequest();
	let formData = new FormData(form);


	xhr.upload.onprogress = function(event) {
		elProgress.value = (event.loaded / event.total).toFixed(2);
	};
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
	xhr.send(formData);
	

});