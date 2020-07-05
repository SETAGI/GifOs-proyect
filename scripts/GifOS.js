/* When the user clicks on the button, toggle between hiding and showing the dropdown content */
function myFunction() {
	document.getElementById('myDropdown').classList.toggle('show');
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
	if (!e.target.matches('.dropbtn')) {
		var myDropdown = document.getElementById('myDropdown');
		if (myDropdown.classList.contains('show')) {
			myDropdown.classList.remove('show');
		}
	}
};

/*-------------------- Event listeners for themes ----------------------------*/
document.querySelector('.sailorDay').addEventListener('click', function (event) {
	event.preventDefault();
	document.getElementById('welcomeBar').className = 'header__welcomeVisitors';
	document.getElementById('contenedor').className = 'container';
	document.getElementById('buscar').className = 'searcher__name ';
	document.querySelector('.header__logo').src = './assets/gifOF_logo.png';
	document.getElementById('change_color').style.color = '#110038';

	// changing buttons style
	document.querySelector('.button').style.background = '#F7C9F3';
	document.querySelector('.button').style.color = ' #110038';
	document.querySelector('.button .text').style.background = '#F7C9F3';
	document.querySelector('.button .text').style.color = ' #110038';
	document.querySelector('.button .arrow').style.background = '#F7C9F3';
});
document.querySelector('.sailorNight').addEventListener('click', function (event) {
	event.preventDefault();
	document.getElementById('welcomeBar').className = 'header__welcomeVisitors change_color_gradient';
	document.getElementById('contenedor').className = 'container change_color_body';
	document.getElementById('buscar').className = 'searcher__name change_color_gradient';
	document.querySelector('.header__logo').src = './assets/gifOF_logo_dark.png';
	document.getElementById('change_color').style.color = '#FFFFFF';

	// changing buttons style
	document.querySelector('.button').style.background = '#ee3efe';
	document.querySelector('.button').style.color = '#FFFFFF';
	document.querySelector('.button .text').style.background = '#ee3efe';
	document.querySelector('.button .text').style.color = '#FFFFFF';
	document.querySelector('.button .arrow').style.background = '#ee3efe';
});

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
