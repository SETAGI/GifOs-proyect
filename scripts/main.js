/*-------------------------- API REQUEST ---------------------------------*/

const APIKey = 'BEPOh7DbTahJQlGhpBZAsDm9mzt6apvM',
	URL = 'http://api.giphy.com/v1/gifs/search?q=',
	URL2 = 'http://api.giphy.com/v1/gifs/trending?';

let suggestGifContainer = document.getElementById('suggestions-gifsID'),
	trendGifContainer = document.getElementById('trendsGifsId');
let div1, div2, content_suggestions, h3, a_closeBtn, closeBtn, a_gif, gif_element, seeMoreBtn;
let randomArray = new Array();

const showGifSuggestions = async (gifdata) => {
	try {
		suggestGifContainer.innerHTML = '';
		for (let i = 0; i < 4; i++) {
			await suggestionBoxesCreation(gifdata, i);
		}
	} catch (error) {
		console.error('something was wrong', error);
	}
};

const showGifsTrendingAndSearch = async (random, gifdata) => {
	try {
		trendGifContainer.innerHTML = '';
		for (let i = 0; i < 20; i++) {
			await trendingBoxesCreation(random, gifdata, i);
		}
	} catch (error) {
		console.error('something was wrong', error);
	}
};

const randomNumbers = async (gifArray) => {
	try {
		gifArray.data.forEach((value, index) => (randomArray[index] = index));
		randomArray1 = randomArray.sort(() => Math.random() - 0.6);
		await showGifsTrendingAndSearch(randomArray1.reverse(), gifArray);
	} catch (error) {
		console.error('something was wrong', error);
	}
};

/* API request */
const getGifData = async (keyword, URL) => {
	try {
		const answer = await fetch(URL + keyword + '&api_key=' + APIKey + '&limit=100');
		let data = await answer.json();
		return data;
	} catch (error) {
		console.error('something was wrong', error);
	}
};

getGifData('', URL2).then((response) => randomNumbers(response));
getGifData('', URL2).then((response) => showGifSuggestions(response));
