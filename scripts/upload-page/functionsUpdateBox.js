/* Onload Page */
document.getElementById('gifcreationId').classList.add('hidden');
/* END */

/* Event Listeners */
document.querySelector('.sailorDay').addEventListener('click', sDayMode);

document.querySelector('.sailorNight').addEventListener('click', sNightMode);

document.getElementById('exitButtonId').addEventListener('click', function () {
	document.getElementById('alertId').classList.add('hidden');
});

document.getElementById('button_deleteGifs').addEventListener('click', function () {
	localStorage.removeItem('myGifs');
});

document.getElementById('cancelButtonId').addEventListener('click', function () {
	document.getElementById('alertId').classList.add('hidden');
});

document.getElementById('exitButton').addEventListener('click', async function () {
	document.getElementById('gifcreationId').classList.add('hidden');
	turnOffCamera();
});

document.getElementById('buttonListoId').addEventListener('click', function () {
	document.getElementById('gifcreationId').classList.add('hidden');
});

document.getElementById('exitButton').addEventListener('click', function () {
	document.getElementById('gifcreationId').classList.add('hidden');
});

// document.getElementById('button_createGifs').addEventListener('click', activeCameraBox);

/* Download gif */
document.getElementById('buttonDownloadId').addEventListener('click', function () {
	let link = document.createElement('a');
	link.href = URL.createObjectURL(recorder.getBlob());
	link.setAttribute('download', 'gif_recorded');
	document.body.appendChild(link);
	link.click();
	link.remove();
});

/* Main functions */

async function myGifsBoxesCreation(myGif, size) {
	let div1, a_gif, gif_element, h3;

	let myGifContainer = document.getElementById('myGifContainerId');

	div1 = document.createElement('div');
	if (size == 'double') {
		div1.className = 'hover-trend-search sNight-style-gradient column-double';
	} else {
		div1.className = 'hover-trend-search sNight-style-gradient';
	}

	myGifContainer.appendChild(div1);

	a_gif = document.createElement('a');
	a_gif.target = 'blanck';
	a_gif.href = await myGif;
	a_gif.className = 'content';
	div1.appendChild(a_gif);

	gif_element = document.createElement('img');
	gif_element.src = await myGif;
	gif_element.className = 'gif';
	a_gif.appendChild(gif_element);

	h3 = document.createElement('h3');
	h3.className = 'hash-trend-search';
	h3.textContent = `. #My #Gif`;
	div1.appendChild(h3);
}

/* CRONOMETER */
function empezarDetener() {
	if (timeout == 0) {
		inicio = vuelta = new Date().getTime();
		funcionando();
	} else {
		clearTimeout(timeout);
		timeout = 0;
	}
}

function funcionando() {
	let actual = new Date().getTime();
	let diff = new Date(actual - inicio);
	let result =
		LeadingZero(diff.getUTCHours()) + ':' + LeadingZero(diff.getUTCMinutes()) + ':' + LeadingZero(diff.getUTCSeconds());
	document.getElementById('crono').innerHTML = result;
	timeout = setTimeout('funcionando()', 1000);
}

function LeadingZero(Time) {
	return Time < 10 ? '0' + Time : +Time;
}

async function turnOffCamera() {
	window.localStream = await response;
	localStream.getVideoTracks()[0].stop();
}

/* Drop Down menu */

function dropdownFunction() {
	document.getElementById('myDropdown').classList.toggle('show');
}

window.onclick = function (e) {
	let myDropdown = document.getElementById('myDropdown');

	if (!e.target.matches('.dropbtn')) {
		myDropdown.classList.remove('show');
	}
};

function activeCameraBox() {
	document.getElementById('windowName').textContent = 'Un Chequeo Antes de Empezar';
	document.getElementById('recordVideo').classList.remove('hidden');
	document.getElementById('btn-capturar').classList.remove('hidden');
	document.getElementById('buttons-containerId').classList.remove('hidden');
	document.getElementById('gifcreationId').classList.remove('hidden');

	document.getElementById('uploadGifId').classList.add('hidden');
	document.getElementById('alertId').classList.add('hidden');
	document.getElementById('showGif').classList.add('hidden');
	document.getElementById('btn-listo').classList.add('hidden');
	document.getElementById('btn-repeat').classList.add('hidden');
	document.getElementById('btn-upload').classList.add('hidden');
	document.getElementById('timerId').classList.add('hidden');
	document.getElementById('showGif-2').classList.add('hidden');
}

function recordingBoxActive() {
	document.getElementById('windowName').textContent = 'Capturando tu gif';
	document.getElementById('btn-listo').classList.remove('hidden');
	document.getElementById('timerId').classList.remove('hidden');

	document.getElementById('uploadGifId').classList.add('hidden');
	document.getElementById('btn-capturar').classList.add('hidden');
}

function stopRecordingBoxActive() {
	document.getElementById('windowName').textContent = 'Vista previa';
	document.getElementById('btn-repeat').classList.remove('hidden');
	document.getElementById('btn-upload').classList.remove('hidden');
	document.getElementById('showGif').classList.remove('hidden');

	document.getElementById('btn-listo').classList.add('hidden');
	document.getElementById('recordVideo').classList.add('hidden');
}

function deleteAllWindows() {
	document.getElementById('windowName').textContent = 'Gif Subido Con Éxito';
	document.getElementById('showGif-2').classList.remove('hidden');

	document.getElementById('recordVideo').classList.add('hidden');
	document.getElementById('btn-capturar').classList.add('hidden');
	document.getElementById('uploadGifId').classList.add('hidden');
	document.getElementById('alertId').classList.add('hidden');
	document.getElementById('showGif').classList.add('hidden');
	document.getElementById('btn-listo').classList.add('hidden');
	document.getElementById('btn-repeat').classList.add('hidden');
	document.getElementById('btn-upload').classList.add('hidden');
	document.getElementById('timerId').classList.add('hidden');
	document.getElementById('buttons-containerId').classList.add('hidden');
}

function uploadGifbox() {
	document.getElementById('windowName').textContent = 'Subiendo Gif';
	document.getElementById('uploadGifId').classList.remove('hidden');

	document.getElementById('btn-listo').classList.add('hidden');
	document.getElementById('recordVideo').classList.add('hidden');
	document.getElementById('btn-repeat').classList.add('hidden');
	document.getElementById('btn-upload').classList.add('hidden');
	document.getElementById('showGif').classList.add('hidden');
	document.getElementById('timerId').classList.add('hidden');
}

/*-------------------- Event listeners for themes ----------------------------*/
function sNightMode() {
	document.getElementById('myGifsId').classList.add('trends-sNight');

	document.getElementById('alertId').classList.add('alert-sNight');
	document.getElementById('gifcreationId').classList.add('gifCreation-sNight');
	document.getElementById('showGif-2').classList.add('gifCreation-sNight');
	document.getElementById('nameWIndowId').classList.add('change_color_gradient');
	document.getElementById('namewindowGifCreation').classList.add('change_color_gradient');
	document.getElementById('bodyId').classList.add('change_color_body');
	document.getElementById('welcomeBar').classList.add('change_color_gradient');
	document.querySelector('.header__logo').src = './assets/gifOF_logo_dark.png';
	// changing buttons style
	document.getElementById('btn-repeat').classList.add('button_sailorNight');
	document.getElementById('btn-upload').classList.add('button_sailorNight');
	document.getElementById('buttonListoId').classList.add('button_sailorNight');
	document.getElementById('start').classList.add('button_sailorNight');
	document.getElementById('captureImg').classList.add('button_sailorNight');
	document.querySelector('.btnStart__camera img').src = './assets/camera_light.svg';
	document.getElementById('cancelButtonId').classList.add('button_sailorNight');
	document.getElementById('startButtonId').classList.add('button_sailorNight');
	document.getElementById('button_deleteGifs').classList.add('button_sailorNight');
	document.getElementById('button_createGifs').classList.add('button_sailorNight');
	document.getElementById('dualButton').classList.add('dualBtn_sailorNight');
	document.getElementById('change_color').classList.add('nav__btn--sailorNight');
	/* changing nav buttons */
	document.getElementById('myDropdown').classList.add('nav__list-sailorNight');

	localStorage.setItem('themes', 'sNight');
}

function sDayMode() {
	document.getElementById('myGifsId').classList.remove('trends-sNight');
	document.getElementById('alertId').classList.remove('alert-sNight');
	document.getElementById('gifcreationId').classList.remove('gifCreation-sNight');
	document.getElementById('showGif-2').classList.remove('gifCreation-sNight');
	document.getElementById('nameWIndowId').classList.remove('change_color_gradient');
	document.getElementById('namewindowGifCreation').classList.remove('change_color_gradient');
	document.getElementById('bodyId').classList.remove('change_color_body');
	document.getElementById('welcomeBar').classList.remove('change_color_gradient');
	document.querySelector('.header__logo').src = './assets/gifOF_logo.png';
	// changing buttons style
	document.getElementById('btn-repeat').classList.remove('button_sailorNight');
	document.getElementById('btn-upload').classList.remove('button_sailorNight');
	document.getElementById('buttonListoId').classList.remove('button_sailorNight');
	document.getElementById('start').classList.remove('button_sailorNight');
	document.getElementById('captureImg').classList.remove('button_sailorNight');
	document.querySelector('.btnStart__camera img').src = './assets/camera.svg';
	document.getElementById('cancelButtonId').classList.remove('button_sailorNight');
	document.getElementById('startButtonId').classList.remove('button_sailorNight');
	document.getElementById('button_deleteGifs').classList.remove('button_sailorNight');
	document.getElementById('button_createGifs').classList.remove('button_sailorNight');
	document.getElementById('dualButton').classList.remove('dualBtn_sailorNight');
	document.getElementById('change_color').classList.remove('nav__btn--sailorNight');
	/* changing search button style */
	document.getElementById('myDropdown').classList.remove('nav__list-sailorNight');

	localStorage.setItem('themes', 'sDay');
}
