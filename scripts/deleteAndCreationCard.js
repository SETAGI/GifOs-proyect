async function changeSuggestion(actualPosition, newPosition, gifdata) {
	document.getElementById(`id-${actualPosition}`).remove();
	/* -----------------New Creation ------------------------ */

	div1 = document.createElement('div');
	div1.className = 'gifContainer gifContainer-sailorNight';
	div1.id = `id-${newPosition}`;
	suggestGifContainer.appendChild(div1);

	div2 = document.createElement('div');
	div2.className = 'gifContainer__hashtagName hashtag-sailorNight';
	div1.appendChild(div2);

	h3 = document.createElement('h3');
	h3.className = 'hashtag';
	titleArray = await gifdata.data[newPosition].title.split(' ');
	indexId;
	let title;
	indexIdGIfWord;
	indexId = await titleArray.indexOf('by');
	indexIdGIfWord = await titleArray.indexOf('GIF');

	if (indexId !== -1) {
		title = titleArray.splice(indexId + 1, 3);
		h3.textContent = `#${title.join(' ')}`;
	} else if (indexIdGIfWord !== -1) {
		title = titleArray.splice(0, indexIdGIfWord);
		h3.textContent = `#${title.join(' ')}`;
	}
	div2.appendChild(h3);

	a_closeBtn = document.createElement('a');
	a_closeBtn.href = '#';
	a_closeBtn.className = 'exitButton';
	div2.appendChild(a_closeBtn);

	a_gif = document.createElement('a');
	a_gif.target = 'blanck';
	a_gif.href = await gifdata.data[newPosition].images.fixed_height_downsampled.webp;
	a_gif.className = 'content';
	div1.appendChild(a_gif);

	gif_element = document.createElement('img');
	gif_element.className = 'gif';
	gif_element.src = await gifdata.data[newPosition].images.fixed_height_downsampled.webp;
	a_gif.appendChild(gif_element);

	seeMoreBtn = document.createElement('a');
	seeMoreBtn.href = '#positionSearch';
	seeMoreBtn.onclick = () => seeMore(title.join(' '));
	seeMoreBtn.className = 'button-seeMore button-seeMore-sNight';
	seeMoreBtn.textContent = 'Ver más...';
	div1.appendChild(seeMoreBtn);

	closeBtn = document.createElement('img');
	closeBtn.src = './assets/close.svg';
	closeBtn.alt = 'close button';
	/* this value is added to change the gif for another one 4 positions after the last one */
	if (newPosition + 4 >= 100) {
		alert('¡That was the las suggestion!');

		newPosition = Math.floor(Math.random() * (100 - 1)) + 1;
	}
	closeBtn.onclick = () => changeSuggestion(newPosition, newPosition + 4, gifdata);
	a_closeBtn.appendChild(closeBtn);
}
