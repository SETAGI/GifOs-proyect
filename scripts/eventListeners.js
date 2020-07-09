/*-------------------- Event listeners for themes ----------------------------*/
document.querySelector('.sailorDay').addEventListener('click', function (event) {
	event.preventDefault();
	document.getElementById('welcomeBar').className = 'header__welcomeVisitors';
	document.getElementById('contenedor').className = 'container';
	document.getElementById('buscar').className = 'searcher__name ';
	document.querySelector('.header__logo').src = './assets/gifOF_logo.png';

	// changing buttons style
	document.querySelector('.button').style.background = '#F7C9F3';
	document.querySelector('.button').style.color = ' #110038';
	document.querySelector('.text').style.background = '#F7C9F3';
	document.querySelector('.text').style.color = ' #110038';
	document.querySelector('.arrow').style.background = '#F7C9F3';
	document.querySelector('#change_color').className = 'nav__btn--normal';
});

document.querySelector('.sailorNight').addEventListener('click', function (event) {
	event.preventDefault();
	document.getElementById('welcomeBar').className = 'header__welcomeVisitors change_color_gradient';
	document.getElementById('contenedor').className = 'container change_color_body';
	document.getElementById('buscar').className = 'searcher__name change_color_gradient';
	document.querySelector('.header__logo').src = './assets/gifOF_logo_dark.png';

	// changing buttons style
	document.querySelector('.button').style.background = '#ee3efe';
	document.querySelector('.button').style.color = '#FFFFFF';
	document.querySelector('.text').style.background = '#ee3efe';
	document.querySelector('.text').style.color = '#FFFFFF';
	document.querySelector('.arrow').style.background = '#ee3efe';
	document.querySelector('#change_color').className = 'nav__btn--normal nav__btn--sailorNight';
});
/*----------------------------------- End ----------------------------------*/

/*------------ Event Listener - Search Button and input search --------------*/
document.getElementById('btn').addEventListener('click', function (event) {
	event.preventDefault();

	// changing style
	document.querySelector('#btn').className = 'searcher__button';
	document.querySelector('#btn img').src = '/assets/lupa_inactive.svg';

	let keyword = document.getElementById('searcher').value;
	document.getElementById('searcher').value = '';

	getGifData('q=' + keyword, URL).then((response) => randomNumbers(response));
});

document.getElementById('searcher').addEventListener('click', function (event) {
	event.preventDefault();

	// changing style
	document.querySelector('#btn').className = 'searcher__button pushed_button';
	document.querySelector('#btn img').src = '/assets/lupa.svg';
});
/*----------------------------------- End ----------------------------------*/
