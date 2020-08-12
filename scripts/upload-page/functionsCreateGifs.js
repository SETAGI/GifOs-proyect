const APIKey = 'BEPOh7DbTahJQlGhpBZAsDm9mzt6apvM';
const URL_UPLOAD = 'http://upload.giphy.com/v1/gifs';

async function showCamera() {
	let response = navigator.mediaDevices.getUserMedia({
		video: {
			width: { ideal: 832 },
			height: {
				ideal: 390,
			},
		},
		audio: false,
	});

	let stream = await response;

	return stream;
}

async function getPOST() {
	let response = await fetch(`${URL_UPLOAD}?api_key=${APIKey}`, {
		method: 'POST',
		body: form,
	});
	let data = await response.json();

	return data;
}

async function getGif(id) {
	let response = await fetch(`http://api.giphy.com/v1/gifs/${id}?api_key=${APIKey}`);
	let giData = await response.json();

	return giData;
}
