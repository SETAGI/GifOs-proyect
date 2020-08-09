/*-------------------------- API REQUEST ---------------------------------*/

if (localStorage.getItem('themes') == 'sNight') {
	sailorNightMode();
}

if (localStorage.getItem('themes') == 'sDay') {
	sailorDayMode();
}

/* Vars and const are in const&varModule.js */

const showGifSuggestions = async (gifData) => {
	try {
		suggestGifContainer.innerHTML = '';
		// do it in grid mode
		for (let i = 0; i < 4; i++) {
			// container-creation.js
			await suggestionBoxesCreation(gifData, i);
		}
	} catch (error) {
		console.error('something was wrong', error);
	}
};

const showGifsTrendingAndSearch = async (random, gifData) => {
	try {
		trendGifContainer.innerHTML = '';
		for (let i = 0; i < 100; i++) {
			// container-creation.js
			await trendingBoxesCreation(random, gifData, i);
		}
	} catch (error) {
		console.error('something was wrong', error);
	}
};

const randomNumbers = async (gifArray) => {
	try {
		gifArray.data.forEach((value, index) => (randomArray[index] = index));
		randomArray = randomArray.sort(() => Math.random() - 0.5);
		await showGifsTrendingAndSearch(randomArray.reverse(), gifArray);
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

const callApi = async () => {
	try {
		let data = await getGifData('', URL2);
		await randomNumbers(data);
		await showGifSuggestions(data);
	} catch (error) {
		console.error('something was wrong', error);
	}
};

callApi();
