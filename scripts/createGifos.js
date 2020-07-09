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

let gif_grabado;

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
		.then(function (stream) {
			document.getElementById('video').srcObject = stream;

			recorder = RecordRTC(stream, {
				type: 'gif',
				quality: 10,
				width: 832,
				height: 434,
				hidden: 240,
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
		// recorder.camera.stop();
		document.getElementById('start').disabled = false;

		let form = new FormData();
		form.append('file', recorder.getBlob(), 'myGif.gif');

		document.querySelector('.gif').src = URL.createObjectURL(recorder.getBlob());
		gif_grabado = URL.createObjectURL(recorder.getBlob());

		fetch('https://upload.giphy.com/v1/gifs?api_key=BEPOh7DbTahJQlGhpBZAsDm9mzt6apvM', {
			method: 'POST',
			body: form,
		})
			.then((response) => {
				console.log(response);
				return response.json();
			})
			.then((data) => {
				console.log('string data', data);
				let gifId = data.data.id;
				getGifDetails(gifId);
			})
			.catch(function (error) {
				console.error(error);
			});

		// console.log(form.get('file'));
		//JQhP1sBxi7d1SKpBsMlFDJYPGUobpcpK
		// fetch({
		// 	type: 'POST',
		// 	url: 'http://upload.giphy.com/v1/gifs?api_key=JQhP1sBxi7d1SKpBsMlFDJYPGUobpcpK',
		// 	data: {
		// 		username: 'SETAGI',
		// 		api_key: APIKey,
		// 		// file: YOUR_FILE,
		// 		source_image_url: gif_grabado,
		// 		tags: 'YOUR_TAGS',
		// 	},
		// 	success: 'YOUR_SUCCESS_HANDLER',
		// 	error: 'YOUR_ERROR_HANDLER',
		// })
		// 	.then((response) => console.log(response))
		// 	.catch((error) => console.error(error));
	});
};

function getGifDetails(id) {
	fetch(`http://api.giphy.com/v1/gifs/${id}?api_key=BEPOh7DbTahJQlGhpBZAsDm9mzt6apvM`)
		.then((response) => response.json())
		.then((data) => {
			const gifURL = data.data.url;
			console.log('gifdetails', gifURL);
		});
}
