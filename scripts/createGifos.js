let recorder;
let inicio = 0;
let timeout = 0;
let form = new FormData();
let myGifsArray = [];

if (localStorage.getItem('myGifs')) {
	let local = localStorage.getItem('myGifs');
	let data = JSON.parse(local);

	data.forEach((element) => {
		myGifsBoxesCreation(element);
	});
}

document.getElementById('exitButtonId').addEventListener('click', function () {
	document.getElementById('alertId').className = 'hidden';
});

document.getElementById('button_deleteGifs').addEventListener('click', function () {
	localStorage.removeItem('myGifs');
});

document.getElementById('cancelButtonId').addEventListener('click', function () {
	document.getElementById('alertId').className = 'hidden';
});

document.getElementById('gifcreationId').className = 'hidden';

async function activateCamera() {
	// functionsUpdateBox.js
	activeCameraBox();
	let response = await showCamera();
	document.getElementById('video').srcObject = response;
}

document.getElementById('start').onclick = async function () {
	// functionsUpdateBox.js
	recordingBoxActive();
	empezarDetener();

	let response = await showCamera();

	document.getElementById('video').srcObject = response;

	recorder = RecordRTC(response, {
		type: 'gif',
		quality: 10,
		width: 832,
		height: 390,
		frameRate: 5,
	});

	recorder.startRecording();
	document.getElementById('stop').disabled = false;
};

document.getElementById('btn-upload').addEventListener('click', async function () {
	uploadGifbox();

	form.append('file', await recorder.getBlob(), 'myGif.gif');
	let dataPOST = await getPOST();
	console.log(dataPOST);
	let gifId = await dataPOST.data.id;
	let urlGif = await getGif(gifId);

	if (localStorage.getItem('myGifs')) {
		let local = localStorage.getItem('myGifs');
		let data = JSON.parse(local);
		myGifsArray = data;
		myGifsArray.push(urlGif);
	} else {
		myGifsArray.push(urlGif);
	}

	document.querySelector('.gif-2').src = await urlGif;
	await myGifsBoxesCreation(urlGif);

	deleteAllWindows();

	document.getElementById('buttonCopyId').target = 'blanck';
	document.getElementById('buttonCopyId').href = await urlGif;

	document.getElementById('buttonDownloadId').addEventListener('click', function () {
		download(URL.createObjectURL(recorder.getBlob()));
	});

	document.getElementById('buttonListoId').addEventListener('click', function () {
		document.getElementById('gifcreationId').className = 'hidden';
	});

	document.getElementById('button_createGifs').addEventListener('click', activeCameraBox);
	localStorage.setItem('myGifs', JSON.stringify(myGifsArray));
	let local = localStorage.getItem('myGifs');
	console.log(JSON.parse(local));
	form = new FormData();
});

document.getElementById('stop').onclick = function () {
	empezarDetener();
	// functionsUpdateBox.js
	stopRecordingBoxActive();

	recorder.stopRecording(function () {
		document.querySelector('.gif').src = URL.createObjectURL(recorder.getBlob());
		document.getElementById('btn-repeat').addEventListener('click', activateCamera);
	});
};

/*--------------- SAVE GIF -------------------*/
function download(blob) {
	let link = document.createElement('a');
	link.href = blob;
	link.setAttribute('download', 'gif_recorded');
	document.body.appendChild(link);

	link.click();
	link.remove();
}
