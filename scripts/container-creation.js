async function suggestionBoxesCreation(gifdata, i) {
	div1 = document.createElement('div');
	div1.className = 'gifContainer gifContainer-sailorNight';
	div1.id = `id-${i}`;
	suggestGifContainer.appendChild(div1);

	div2 = document.createElement('div');
	div2.className = 'gifContainer__hashtagName hashtag-sailorNight';
	div1.appendChild(div2);

	h3 = document.createElement('h3');
	h3.className = 'hashtag';
	titleArray = await gifdata.data[i].title.split(' ');
	let title;
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
	a_gif.href = await gifdata.data[i].images.fixed_height_downsampled.webp;
	a_gif.className = 'content';
	div1.appendChild(a_gif);

	gif_element = document.createElement('img');
	gif_element.className = 'gif';
	gif_element.src = await gifdata.data[i].images.fixed_height_downsampled.webp;
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
	closeBtn.onclick = () => changeSuggestion(i, i + 4, gifdata);
	a_closeBtn.appendChild(closeBtn);
}

async function trendingBoxesCreation(random, gifdata, i) {
	div1 = document.createElement('div');
	div1.className = 'hover-trend-search sNight-style-gradient';
	trendGifContainer.appendChild(div1);

	a_gif = document.createElement('a');
	a_gif.target = 'blanck';
	a_gif.href = await gifdata.data[random[i]].images.fixed_height_downsampled.webp;
	a_gif.className = 'content';
	div1.appendChild(a_gif);

	gif_element = document.createElement('img');
	gif_element.src = await gifdata.data[random[i]].images.fixed_height_downsampled.webp;
	gif_element.className = 'gif';
	a_gif.appendChild(gif_element);

	h3 = document.createElement('h3');
	h3.className = 'hash-trend-search';
	tagsArray = await gifdata.data[random[i]].slug.split('-');
	tags = tagsArray.slice(0, 2);
	indexId = await tags.indexOf(gifdata.data[random[i]].id);

	let hashstags;
	if (indexId !== -1) {
		tags.splice(indexId, 1, 'without#tag');
		hashstags = tags.map((tag) => '#' + tag);
		if (tags.length == 1) h3.textContent = '#without#tag';
		else h3.textContent = hashstags.join('');
	} else {
		hashstags = tags.map((tag) => '#' + tag);
		h3.textContent = hashstags.join('');
	}
	div1.appendChild(h3);
}
