/*-------------------- Event listeners for themes ----------------------------*/
document.querySelector('.sailorDay').addEventListener('click', function (event) {
	/* themeChange.js */
	sailorDayTheme();
});

document.querySelector('.sailorNight').addEventListener('click', function (event) {
	/* themeChange.js */
	sailorNightTheme();
});
/*----------------------------------- End ----------------------------------*/

/*------------ Event Listener - Search Button and input search --------------*/
document.getElementById('btn').addEventListener('click', function (event) {
	/* searchModule.js */
	buttonEvent();
});

document.getElementById('searcher').addEventListener('click', function (event) {
	/* searchModule.js */
	inputEvent();
});
/*----------------------------------- End ----------------------------------*/

/*---------------------- see more button clicked ---------------------------*/
function seeMore(text) {
	getGifData(text, URL).then((response) => randomNumbers(response));
	document.getElementById('searchName').textContent = text;
}
/*----------------------------------- End ----------------------------------*/
