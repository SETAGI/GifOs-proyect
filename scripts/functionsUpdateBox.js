function activeCameraBox() {
	document.getElementById('windowName').textContent = 'Un Chequeo Antes de Empezar';
	document.getElementById('recordVideo').className = 'gifCreation__video';
	document.getElementById('btn-capturar').className = 'buttonStyle btnStart';
	document.getElementById('uploadGifId').className = 'hidden';
	document.getElementById('alertId').className = 'hidden';
	document.getElementById('showGif').className = 'hidden';
	document.getElementById('btn-listo').className = 'hidden';
	document.getElementById('btn-repeat').className = 'hidden';
	document.getElementById('btn-upload').className = 'hidden';
	document.getElementById('timerId').className = 'hidden';
	document.getElementById('gifcreationId').className = 'gifCreation';
	document.getElementById('showGif-2').className = 'hidden';
	document.getElementById('buttons-containerId').className = 'buttons-container';
}

function recordingBoxActive() {
	document.getElementById('windowName').textContent = 'Capturando tu gif';
	document.getElementById('uploadGifId').className = 'hidden';
	document.getElementById('btn-capturar').className = 'hidden';
	document.getElementById('btn-listo').className = 'buttonStyle btnStop';
	document.getElementById('timerId').className = 'timer';
}

function stopRecordingBoxActive() {
	document.getElementById('windowName').textContent = 'Vista previa';
	document.getElementById('btn-listo').className = 'hidden';
	document.getElementById('recordVideo').className = 'hidden';
	document.getElementById('btn-repeat').className = 'button';
	document.getElementById('btn-upload').className = 'button';
	document.getElementById('showGif').className = 'gifCreation__video';
}

async function myGifsBoxesCreation(myGif) {
	let div1, a_gif, gif_element, h3;
	let myGifContainer = document.getElementById('myGifContainerId');

	div1 = document.createElement('div');
	div1.className = 'hover-trend-search sNight-style-gradient';
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
	h3.textContent = '#My#Gif';
	div1.appendChild(h3);
}

function deleteAllWindows() {
	document.getElementById('windowName').textContent = 'Gif Subido Con Éxito';
	document.getElementById('recordVideo').className = 'hidden';
	document.getElementById('btn-capturar').className = 'hidden';
	document.getElementById('uploadGifId').className = 'hidden';
	document.getElementById('alertId').className = 'hidden';
	document.getElementById('showGif').className = 'hidden';
	document.getElementById('btn-listo').className = 'hidden';
	document.getElementById('btn-repeat').className = 'hidden';
	document.getElementById('btn-upload').className = 'hidden';
	document.getElementById('timerId').className = 'hidden';
	document.getElementById('buttons-containerId').className = 'hidden';
	document.getElementById('showGif-2').className = 'gifCreation__uploaded';
}

function uploadGifbox() {
	document.getElementById('windowName').textContent = 'Subiendo Gif';
	document.getElementById('uploadGifId').className = 'gifCreation__video uploadingGif';
	document.getElementById('btn-listo').className = 'hidden';
	document.getElementById('recordVideo').className = 'hidden';
	document.getElementById('btn-repeat').className = 'hidden';
	document.getElementById('btn-upload').className = 'hidden';
	document.getElementById('showGif').className = 'hidden';
	document.getElementById('timerId').className = 'hidden';
}

/* CRONOMETER */
function empezarDetener() {
	if (timeout == 0) {
		inicio = vuelta = new Date().getTime();
		// Start the process
		funcionando();
	} else {
		// stop the cronometer
		clearTimeout(timeout);
		timeout = 0;
	}
}

function funcionando() {
	// Actual date
	let actual = new Date().getTime();
	// obtenemos la diferencia entre la fecha actual y la de inicio
	let diff = new Date(actual - inicio);
	// mostramos la diferencia entre la fecha actual y la inicial
	let result =
		LeadingZero(diff.getUTCHours()) + ':' + LeadingZero(diff.getUTCMinutes()) + ':' + LeadingZero(diff.getUTCSeconds());
	document.getElementById('crono').innerHTML = result;
	// Indicamos que se ejecute esta función nuevamente dentro de 1 segundo
	timeout = setTimeout('funcionando()', 1000);
}

/* Funcion que pone un 0 delante de un valor si es necesario */
function LeadingZero(Time) {
	return Time < 10 ? '0' + Time : +Time;
}

/* ----------------------------- Drop Down menu ------------------------------*/

function dropdownFunction() {
	document.getElementById('myDropdown').classList.toggle('show');
}

window.onclick = function (e) {
	let myDropdown = document.getElementById('myDropdown');

	if (!e.target.matches('.dropbtn')) {
		myDropdown.classList.remove('show');
	}
};
