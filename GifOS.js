/* When the user clicks on the button, toggle between hiding and showing the dropdown content */
function myFunction() {
	document.querySelector('.nav__list').classList.toggle('show');
}

/*-------------------------- API REQUEST ---------------------------------*/

const APIKey = 'BEPOh7DbTahJQlGhpBZAsDm9mzt6apvM';

// const URL = 'https://api.giphy.com/v1/gifs/search?q=gay?q=&limit=50';
const URL = 'http://api.giphy.com/v1/gifs/search?q=simpsons';
// const URL = 'http://api.giphy.com/v1/gifs/trending?';
const gifs = document.querySelectorAll('.content');

let randomArray = [];

const showGifs = async (randomArray, fetchResponse) => {
	fetchResponse.data.forEach(async (value, indice) => {
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
const getGifData = async () => {
	const answer = await fetch(URL + '&api_key=' + APIKey + '&limit=100');
	let data = await answer.json();
	return data;
};

getGifData().then((response) => randomNumbers(response));
