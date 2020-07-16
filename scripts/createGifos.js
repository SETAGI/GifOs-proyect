const APIKey = 'BEPOh7DbTahJQlGhpBZAsDm9mzt6apvM',
	URL_UPLOAD = 'http://upload.giphy.com/v1/gifs';

let recorder,
	form = new FormData();

document.getElementById('gifcreationId').className = 'hidden';

async function activateCamera() {
	/* always the person reject the gif, the box text need to change */

	document.getElementById('windowName').textContent = 'Un Chequeo Antes de Empezar';
	document.getElementById('recordVideo').className = 'gifCreation__video';
	document.getElementById('btn-capturar').className = 'buttonStyle btnStart';
	document.querySelector('.alert').classList.toggle('hidden');
	document.getElementById('showGif').className = 'hidden';
	document.getElementById('btn-listo').className = 'hidden';
	document.getElementById('btn-repeat').className = 'hidden';
	document.getElementById('btn-upload').className = 'hidden';
	document.getElementById('gifcreationId').className = 'gifCreation';

	let response = await showCamera();
	document.getElementById('video').srcObject = response;
}

document.getElementById('start').onclick = async function () {
	document.getElementById('btn-capturar').className = 'hidden';
	document.getElementById('btn-listo').className = 'buttonStyle btnStop';
	document.getElementById('windowName').textContent = 'Capturando tu gif';

	let response = await showCamera();

	document.getElementById('video').srcObject = response;

	recorder = RecordRTC(response, {
		type: 'gif',
		quality: 10,
		width: 832,
		height: 434,
		frameRate: 5,
	});
	recorder.startRecording();
	document.getElementById('stop').disabled = false;
};

document.getElementById('stop').onclick = function () {
	document.getElementById('btn-listo').className = 'hidden';
	document.getElementById('recordVideo').className = 'hidden';
	document.getElementById('btn-repeat').className = 'button';
	document.getElementById('btn-upload').className = 'button';
	document.getElementById('windowName').textContent = 'Vista previa';
	document.getElementById('showGif').className = 'gifCreation__video';

	recorder.stopRecording(async function (blob) {
		document.querySelector('.gif').src = URL.createObjectURL(recorder.getBlob()); //this gif i put when i delete the recorder camera

		document.getElementById('btn-repeat').addEventListener('click', activateCamera);

		document.getElementById('btn-upload').addEventListener('click', async () => {
			form.append('file', recorder.getBlob(), 'myGif.gif');
			const dataPOST = await getPOST();
			let gifId = dataPOST.data.id;
			const urlGif = await getGif(gifId);
			console.log(urlGif);
		});
	});
};
