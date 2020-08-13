/*-------------------------------- Consts and Variables -------------------------------*/
const APIKey = 'BEPOh7DbTahJQlGhpBZAsDm9mzt6apvM';
const URL = 'https://api.giphy.com/v1/gifs/search?q=';
const URL2 = 'https://api.giphy.com/v1/gifs/trending?';
const URL_suggestions = 'https://api.giphy.com/v1/tags/related/';

let suggestGifContainer = document.getElementById('suggestions-gifsID');
let trendGifContainer = document.getElementById('trendsGifsId');
let suggestionwordsInput = document.getElementById('help_dropdown');
let searchHistoryContainer = document.getElementById('searchHistoryId');

let div1, div2, content_suggestions, h3, a_closeBtn, closeBtn, a_gif, gif_element, seeMoreBtn;
let i_searchHistory = 0;
let randomArray = [];

/*--------------------------------- Navigation drop down ------------------------------------ */

function myFunction() {
	document.getElementById('myDropdown').classList.toggle('show');
}

window.onclick = function (e) {
	let myDropdown = document.getElementById('myDropdown');
	let help_drop = document.getElementById('help_dropdown');

	if (!e.target.matches('.dropbtn') && !e.target.matches('.dropbtn_helpMenu')) {
		myDropdown.classList.remove('show');
		help_drop.classList.remove('show_helpMenu');
	}
	if (e.target.matches('.dropbtn_helpMenu')) {
		myDropdown.classList.remove('show');
	}
	if (e.target.matches('.dropbtn')) {
		help_drop.classList.remove('show_helpMenu');
	}
};

/*----------- Debounce ----------*/
function debounce(funcion, time) {
	let timeoutId;

	return function () {
		if (timeoutId) {
			clearTimeout(timeoutId);
		}
		const context = this;
		const args = arguments;
		timeoutId = setTimeout(() => {
			funcion.apply(context, args);
		}, time);
	};
}
