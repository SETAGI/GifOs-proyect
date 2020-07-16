async function showCamera() {
	let response = navigator.mediaDevices.getUserMedia({
		video: {
			width: { ideal: 832 },
			height: {
				ideal: 434,
			},
		},
		audio: false,
	});

	let stream = await response;
	return stream;
}

async function getPOST() {
	let response = await fetch(`https://upload.giphy.com/v1/gifs?api_key=${APIKey}`, {
		method: 'POST',
		body: form,
	});
	let data = await response.json();

	return data;
}

async function getGif(id) {
	let response = await fetch(`http://api.giphy.com/v1/gifs/${id}?api_key=${APIKey}`);
	let data = await response.json();
	const gifURL = data.data.url;

	return gifURL;
}
