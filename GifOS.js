/* When the user clicks on the button, toggle between hiding and showing the dropdown content */
function myFunction() {
	document.querySelector('.nav__list').classList.toggle('show');
}

/*-------------------------- API REQUEST ---------------------------------*/

const APIKey = 'BEPOh7DbTahJQlGhpBZAsDm9mzt6apvM',
	URL = 'http://api.giphy.com/v1/gifs/search?',
	URL2 = 'http://api.giphy.com/v1/gifs/trending?',
	gifs = document.querySelectorAll('.content');

let randomArray = new Array();

const showGifs = async (random, gifdata) => {
	for (let i of gifs.keys()) {
		gifs[i].querySelector('.gif').src = await gifdata.data[random[i]].images.fixed_height_downsampled.webp;
		gifs[i].href = await gifdata.data[random[i]].images.fixed_height_downsampled.webp;
	}
};

/* Random array generation */
const randomNumbers = (gifArray) => {
	gifArray.data.forEach((value, index) => (randomArray[index] = index));
	randomArray = randomArray.sort(() => Math.random() - 0.5);
	showGifs(randomArray, gifArray);
};

/* API request */
const getGifData = async (keyword, URL) => {
	const answer = await fetch(URL + keyword + '&api_key=' + APIKey + '&limit=50');
	let data = await answer.json();
	console.log(data);
	return data;
};

getGifData('', URL2).then((response) => randomNumbers(response));

/* Event Listener - Search Button */
document.getElementById('btn').addEventListener('click', function (e) {
	e.preventDefault();
	document.getElementById('btn').style.color = '#b4b4b4';
	document.querySelector('#btn img').src = '/assets/lupa_inactive.svg';
	let keyword = document.getElementById('searcher').value;
	document.getElementById('searcher').value = '';
	getGifData('q=' + keyword, URL).then((response) => randomNumbers(response));
});

document.getElementById('searcher').addEventListener('click', function (e) {
	e.preventDefault();
	document.getElementById('btn').style.color = '#000';
	document.querySelector('#btn img').src = '/assets/lupa.svg';
});
