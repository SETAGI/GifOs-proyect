let recorder;
let inicio = 0;
let timeout = 0;
let form = new FormData();
let myGifsArray = [];
let response;

/* Loading selected theme and my gifs */
localStorage.getItem('themes') == 'sNight' ? sNightMode() : sDayMode();

if (localStorage.getItem('myGifs')) {
	let data = JSON.parse(localStorage.getItem('myGifs'));
	data.forEach((element) => myGifsBoxesCreation(element, 'double'));
}
/* End */

async function activateCamera() {
	activeCameraBox();
	response = await showCamera();
	document.getElementById('video').srcObject = response;
}

document.getElementById('button_createGifs').addEventListener('click', activateCamera);

document.getElementById('start').onclick = async function () {
	recordingBoxActive();
	/* timer */
	empezarDetener();

	response = await showCamera();

	document.getElementById('video').srcObject = response;

	recorder = RecordRTC(response, {
		type: 'gif',
		quality: 10,
		width: 832,
		height: 390,
		frameRate: 5,
	});

	// recorder = RecordRTC(response, {
	// 	type: 'gif',
	// 	quality: 10,
	// 	width: 360,
	// 	hidden: 240,
	// 	// height: 390,
	// 	frameRate: 5,
	// });

	recorder.startRecording();
};

document.getElementById('btn-upload').addEventListener('click', async function () {
	uploadGifbox();

	form.append('file', await recorder.getBlob(), 'myGif.gif');

	let dataPOST = await getPOST();
	let gifId = await dataPOST.data.id;
	let gifData = await getGif(gifId);

	if (localStorage.getItem('myGifs')) {
		myGifsArray = JSON.parse(localStorage.getItem('myGifs'));
		myGifsArray.push(gifData.data.images.original.url);
	} else myGifsArray.push(gifData.data.images.original.url);

	document.querySelector('.gif-2').src = await gifData.data.images.original.url;

	gifData.data.images['480w_still'].width / gifData.data.images['480w_still'].height >= 1.4
		? await myGifsBoxesCreation(gifData.data.images.original.url, 'double')
		: await myGifsBoxesCreation(gifData.data.images.original.url, '');

	deleteAllWindows();

	document.getElementById('buttonCopyId').target = '_blanck';
	document.getElementById('buttonCopyId').href = await gifData.data.images.original.url;

	/* save the new gif in localstorage */
	localStorage.setItem('myGifs', JSON.stringify(myGifsArray));

	/* Reset form Data */
	form = new FormData();
});

document.getElementById('stop').onclick = async function () {
	turnOffCamera();
	/* timer */
	empezarDetener();

	stopRecordingBoxActive();

	recorder.stopRecording(function () {
		document.querySelector('.gif').src = URL.createObjectURL(recorder.getBlob());
		document.getElementById('btn-repeat').addEventListener('click', activateCamera);
	});
};
