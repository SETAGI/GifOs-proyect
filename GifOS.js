/* When the user clicks on the button, toggle between hiding and showing the dropdown content */
function myFunction() {
	document.querySelector('.nav__list').classList.toggle('show');
}

/*-------------------------- API REQUEST ---------------------------------*/

const APIKey = 'BEPOh7DbTahJQlGhpBZAsDm9mzt6apvM',
	// URL = 'http://api.giphy.com/v1/gifs/search?q=pokemon',
	URL = 'http://api.giphy.com/v1/gifs/search?',
	URL2 = 'http://api.giphy.com/v1/gifs/trending?',
	gifs = document.querySelectorAll('.content');

let randomArray = [];

const showGifs = async (randomArray, fetchResponse) => {
	fetchResponse.data.forEach(async (value, indice) => {
		if (document.querySelector('.gif')) {
			document.querySelector('.gif').remove();
		}
		let element = document.createElement('img');

		element.src = await fetchResponse.data[randomArray[indice]].images.original.url;
		element.className = 'gif';

		if (gifs.length > indice) {
			gifs[indice].appendChild(element);
		}
	});
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
	return data;
};

getGifData('', URL2).then((response) => randomNumbers(response));

document.getElementById('btn').addEventListener('click', function () {
	let keyword = document.getElementById('search').value;
	getGifData('q=' + keyword, URL).then((response) => randomNumbers(response));
});
