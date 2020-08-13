# gifOS 📸 🚀

---

## Description:

This project is about a web application made entirely in Javascript, the style and structure was based on CSS3 (sass) and HTML5, this was the second application made for the full stack web development career at ACAMICA.

The main functions of this WebApp are to obtain gifs to show the user (access the correct URL provided by the GIPHY API according to each requirement (trend, search, suggestion)), and to create gifs with the [MediaDevices.getUserMedia()](https://developer.mozilla.org/es/docs/Web/API/MediaDevices/getUserMedia 'MediaDevices.getUserMedia()') method, [RecordRTC](https://recordrtc.org/ 'RecordRTC') library and the POST method to the GIPHY upload URL.

[![](https://github.com/SETAGI/GifOs-proyect/blob/master/assets/suggestions.png)](https://github.com/SETAGI/GifOs-proyect/blob/master/assets/suggestions.png)

- **Search input:** you can put whatever kind of name or short description for finding gifs related, this input become three name of gifs suggested related with the keyword you enter in the space.

* **Suggestions:** the webpage brings four cards suggested for the user, you could see the title in hashtag form, a exit button and a see more button.

      	- **See more button:** you can search for more gifs related to the card title just by pressing the button.

      	- **Exit button: **you can change the suggested card to a random one

[![](https://github.com/SETAGI/GifOs-proyect/blob/master/assets/search.png)](https://github.com/SETAGI/GifOs-proyect/blob/master/assets/search.png)

- **Trends:** In this section you can see the current trends gifs, additionally some gifs occupy two spaces in the grid if the size of the gif is larger. You can see the trend section only when the web page is loaded

[![](https://github.com/SETAGI/GifOs-proyect/blob/master/assets/trends.png)](https://github.com/SETAGI/GifOs-proyect/blob/master/assets/trends.png)

- **Gif maker:** implementing the RecordRTC library and your camera you can créate and save fun gifs in the gifOS’s webpage, aditionally with help of local storage this gifs will be in the “My gifs” section all the time.

[![](https://github.com/SETAGI/GifOs-proyect/blob/master/assets/create.png)](https://github.com/SETAGI/GifOs-proyect/blob/master/assets/create.png)

- **Choose theme:** you can choose between a dark or light theme, this selection will be available on future visits to the website.

[![](https://github.com/SETAGI/GifOs-proyect/blob/master/assets/themeDay.png)](https://github.com/SETAGI/GifOs-proyect/blob/master/assets/themeDay.png)

## Technologies used:

- HTML5
- CSS3 - SASS/SCSS
- Javascript
- Google Fonts
- Git and Github
- [API giphy](https://developers.giphy.com/docs/api#quick-start-guide 'API giphy')
- [RecordRTC](https://recordrtc.org/ 'RecordRTC')
- [MediaDevices.getUserMedia()](https://developer.mozilla.org/es/docs/Web/API/MediaDevices/getUserMedia 'MediaDevices.getUserMedia()')
- Lazy Loading.

## Demo:

[Live Demo](https://gifos-s-t-g.surge.sh/ 'Live Demo')
