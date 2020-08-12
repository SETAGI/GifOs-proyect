/*-------------------- Event listeners for themes ----------------------------*/
const sailorDayMode = () => {
	// sailorDayTheme();
	document.getElementById('welcomeBar').classList.remove('change_color_gradient');
	document.getElementById('containerId').classList.remove('change_color_body');
	document.getElementById('search').classList.remove('search_container');
	document.querySelector('.header__logo').src = './assets/gifOF_logo.png';
	// changing buttons style
	document.getElementById('borderSBottomSNightId').classList.remove('borderBottom');
	document.getElementById('borderSBottomSDayId').classList.add('borderBottom');
	document.getElementById('button_createGifs').classList.remove('button_sailorNight');
	document.getElementById('dualButton').classList.remove('dualBtn_sailorNight');
	document.getElementById('change_color').classList.remove('nav__btn--sailorNight');
	/* changing search button style */
	document.getElementById('btn').classList.remove('searchBtn-sNight');
	document.querySelector('#btn img').src = './assets/lupa_inactive.svg';
	/*changing box of suggestion section subtitle */
	document.getElementById('suggestionsId').classList.remove('suggestions-sNight');
	/*changing box of trends section subtitle */
	document.getElementById('trendsId').classList.remove('trends-sNight');
	/* changing nav buttons */
	document.getElementById('myDropdown').classList.remove('nav__list-sailorNight');
	/* changing hashtag names gradient */
	document.getElementById('suggestions-gifsID').classList.remove('hashtag-color-gradient');
	/* changing hashtag trending names */
	document.getElementById('trendsGifsId').classList.remove('sNightTrending-color-gradient');

	localStorage.setItem('themes', 'sDay');
};

document.querySelector('.sailorDay').addEventListener('click', sailorDayMode);

const sailorNightMode = () => {
	// sailorNightTheme();
	document.getElementById('welcomeBar').classList.add('change_color_gradient');
	document.getElementById('containerId').classList.add('change_color_body');
	document.getElementById('search').classList.add('search_container');
	document.querySelector('.header__logo').src = './assets/gifOF_logo_dark.png';
	// changing buttons style
	document.getElementById('borderSBottomSNightId').classList.add('borderBottom');
	document.getElementById('borderSBottomSDayId').classList.remove('borderBottom');
	document.getElementById('button_createGifs').classList.add('button_sailorNight');
	document.getElementById('dualButton').classList.add('dualBtn_sailorNight');
	document.getElementById('change_color').classList.add('nav__btn--sailorNight');
	/* changing search button style */
	document.getElementById('btn').classList.add('searchBtn-sNight');
	document.querySelector('#btn img').src = './assets/Combined_Shape.svg';
	/*changing box of suggestion subtitle section*/
	document.getElementById('suggestionsId').classList.add('suggestions-sNight');
	/*changing box of trends section subtitle */
	document.getElementById('trendsId').classList.add('trends-sNight');
	/* changing nav buttons */
	document.getElementById('myDropdown').classList.add('nav__list-sailorNight');
	/* changing hashtag names gradient */
	document.getElementById('suggestions-gifsID').classList.add('hashtag-color-gradient');
	/* changing hashtag trending names */
	document.getElementById('trendsGifsId').classList.add('sNightTrending-color-gradient');

	localStorage.setItem('themes', 'sNight');
};

document.querySelector('.sailorNight').addEventListener('click', sailorNightMode);

/*------------ Event Listener - Search Button --------------*/
document.getElementById('btn').addEventListener('click', function () {
	// buttonEvent();
	document.getElementById('btn').disabled = true;
	// changing search button style
	if (document.getElementById('btn').classList.contains('searchBtn-sNight')) {
		document.getElementById('btn').className = 'searchBtn-sNight searcherbutton';
		document.querySelector('#btn img').src = './assets/Combined_Shape.svg';
	}
	/* organizar todos estos classnames */
	if (!document.getElementById('btn').classList.contains('searchBtn-sNight')) {
		document.getElementById('btn').className = 'searcherbutton';
		document.querySelector('#btn img').src = '/assets/lupa_inactive.svg';
	}

	let keyword = document.getElementById('searcher').value;
	searchButtonsCreation(keyword);

	if (keyword) document.getElementById('searchName').textContent = keyword;
	else document.getElementById('searchName').textContent = '¡Please enter a keyword!';

	document.getElementById('searcher').value = '';

	/* get gifs related with the value in the input */
	if (keyword == '') getGifData('please', URL).then((response) => randomNumbers(response));
	else getGifData(keyword, URL).then((response) => randomNumbers(response));
});

/*------------------ Catch the input value------------------- */
const applyDebounce = debounce(helpButtonsCreation, 480);
document.getElementById('searcher').addEventListener('input', async function (e) {
	// changing search button style
	document.getElementById('btn').disabled = false;
	if (document.getElementById('btn').classList.contains('searchBtn-sNight')) {
		document.getElementById('btn').className = 'searchBtn-sNight searcherbutton searchBtn-sNight-pushed';
		document.querySelector('#btn img').src = '/assets/lupa_light.svg';
	}
	if (!document.getElementById('btn').classList.contains('searchBtn-sNight')) {
		document.querySelector('#btn').className = 'searcherbutton pushed_button';
		document.querySelector('#btn img').src = '/assets/lupa.svg';
	}
	/* cointainer-creation.js */
	applyDebounce(e);
});

/*---------------------- see more button clicked ---------------------------*/
function seeMore(text) {
	getGifData(text, URL).then((response) => randomNumbers(response));
	document.getElementById('searchName').textContent = text;
}
