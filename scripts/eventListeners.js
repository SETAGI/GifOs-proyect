/*-------------------- Event listeners for themes ----------------------------*/
document.querySelector('.sailorDay').addEventListener('click', function (e) {
	// sailorDayTheme();
	document.getElementById('welcomeBar').className = 'header__welcomeVisitors';
	document.getElementById('containerId').className = 'container';
	document.getElementById('search').className = 'searcher';
	document.querySelector('.header__logo').src = './assets/gifOF_logo.png';
	// changing buttons style
	document.querySelector('#button_createGifs').className = 'button';
	document.querySelector('#dualButton').className = 'nav__btn--dropdown dotted';
	document.querySelector('#change_color').className = 'nav__btn--normal';
	/* changing search button style */
	document.getElementById('btn').className = ' searcherbutton';
	document.querySelector('#btn img').src = './assets/lupa_inactive.svg';
	/*changing box of suggestion section subtitle */
	document.getElementById('suggestionsId').className = 'suggestions';
	/*changing box of trends section subtitle */
	document.getElementById('trendsId').className = 'trends';
	/* changing nav buttons */
	document.getElementById('myDropdown').className = 'nav__list';
	/* changing hashtag names gradient */
	document.getElementById('suggestions-gifsID').className = 'suggestions__gifs';
	/* changing hashtag trending names */
	document.getElementById('trendsGifsId').className = 'trends__gifs';
});

document.querySelector('.sailorNight').addEventListener('click', function (e) {
	// sailorNightTheme();
	document.getElementById('welcomeBar').className = 'header__welcomeVisitors change_color_gradient';
	document.getElementById('containerId').className = 'container change_color_body';
	document.getElementById('search').className = 'searcher search_container';
	document.querySelector('.header__logo').src = './assets/gifOF_logo_dark.png';
	// changing buttons style
	document.querySelector('#button_createGifs').className = 'button button_sailorNight';
	document.querySelector('#dualButton').className = 'nav__btn--dropdown dotted dualBtn_sailorNight';
	document.querySelector('#change_color').className = 'nav__btn--normal nav__btn--sailorNight';
	/* changing search button style */
	document.getElementById('btn').className = 'searchBtn-sNight searcherbutton';
	document.querySelector('#btn img').src = './assets/Combined_Shape.svg';
	/*changing box of suggestion subtitle section*/
	document.getElementById('suggestionsId').className = 'suggestions suggestions-sNight';
	/*changing box of trends section subtitle */
	document.getElementById('trendsId').className = 'trends trends-sNight';
	/* changing nav buttons */
	document.getElementById('myDropdown').className = 'nav__list nav__list-sailorNight';
	/* changing hashtag names gradient */
	document.getElementById('suggestions-gifsID').className = 'suggestions__gifs hashtag-color-gradient';
	/* changing hashtag trending names */
	document.getElementById('trendsGifsId').className = 'trends__gifs sNightTrending-color-gradient';
});

/*------------ Event Listener - Search Button --------------*/
document.getElementById('btn').addEventListener('click', function (e) {
	// buttonEvent();
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
