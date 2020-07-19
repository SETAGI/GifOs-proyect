function buttonEvent() {
	document.getElementById('btn').disabled = true;

	// changing search button style
	if (document.getElementById('btn').classList.contains('searchBtn-sNight')) {
		document.getElementById('btn').className = 'searchBtn-sNight searcherbutton';
		document.querySelector('#btn img').src = './assets/Combined_Shape.svg';
	}

	if (!document.getElementById('btn').classList.contains('searchBtn-sNight')) {
		document.getElementById('btn').className = 'searcherbutton';
		document.querySelector('#btn img').src = '/assets/lupa_inactive.svg';
	}

	let keyword = document.getElementById('searcher').value;

	if (keyword) document.getElementById('searchName').textContent = keyword;
	else document.getElementById('searchName').textContent = '¡Please enter a keyword!';

	document.getElementById('searcher').value = '';

	/* get the gifs related with the value in the input */
	if (keyword == '') getGifData('please', URL).then((response) => randomNumbers(response));
	else getGifData(keyword, URL).then((response) => randomNumbers(response));
}

function inputEvent() {
	document.getElementById('btn').disabled = false;

	// changing search button style
	if (document.getElementById('btn').classList.contains('searchBtn-sNight')) {
		document.getElementById('btn').className = 'searchBtn-sNight searcherbutton searchBtn-sNight-pushed';
		document.querySelector('#btn img').src = '/assets/lupa_light.svg';
	}

	if (!document.getElementById('btn').classList.contains('searchBtn-sNight')) {
		document.querySelector('#btn').className = 'searcherbutton pushed_button';
		document.querySelector('#btn img').src = '/assets/lupa.svg';
	}
}
