/*-------------------------- API REQUEST ---------------------------------*/

const APIKey = 'BEPOh7DbTahJQlGhpBZAsDm9mzt6apvM',
	URL = 'http://api.giphy.com/v1/gifs/search?',
	URL2 = 'http://api.giphy.com/v1/gifs/trending?',
	gifs = document.querySelectorAll('.content');

let randomArray = new Array();

const showGifs = async (random, gifdata) => {
	for (let i of gifs.keys()) {
		gifs[i].querySelector('.gif').src = await gifdata.data[random[i]].images
			.fixed_height_downsampled.webp;
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
