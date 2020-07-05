const APIKey = 'BEPOh7DbTahJQlGhpBZAsDm9mzt6apvM',
	URL_UPLOAD = 'http://upload.giphy.com/v1/gifs';

function createFunction() {
	document.querySelector('.gifCreation').classList.toggle('showCamera');
	document.querySelector('.alert').classList.toggle('hiddenAlert');

	navigator.mediaDevices
		.getUserMedia({
			video: {
				width: { ideal: 832 },
				height: {
					ideal: 434,
				},
			},
			audio: false,
		})
		.then((stream) => {
			document.getElementById('video').srcObject = stream;
		});
}

let recorder;
let form = new FormData();

document.getElementById('start').onclick = function () {
	this.disabled = true;

	navigator.mediaDevices
		.getUserMedia({
			video: {
				width: { ideal: 832 },
				height: {
					ideal: 434,
				},
			},
			audio: false,
		})
		.then((stream) => {
			document.getElementById('video').srcObject = stream;

			recorder = RecordRTC(stream, {
				type: 'gif',

				width: 832,
				height: 434,
				frameRate: 1,
			});
			recorder.startRecording();

			document.getElementById('stop').disabled = false;
		});
};

document.getElementById('stop').onclick = function () {
	document.getElementById('video').srcObject = null;
	this.disabled = true;

	recorder.stopRecording(function (blob) {
		document.querySelector('.gif').src = URL.createObjectURL(recorder.getBlob());

		document.getElementById('start').disabled = false;
		console.log(document.querySelector('.gif').src);

		form.append('file', recorder.getBlob(), 'myGif.gif');
		console.log(form.get('file'));

		fetch(`${URL_UPLOAD}?api_key=${APIKey}&username=SETAGI`, { method: 'post', body: form })
			.then((response) => {
				console.log(response);
			})
			.catch(function (error) {
				console.error(error);
			});
	});
};
