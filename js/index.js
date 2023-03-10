//---------------------Const---------------------------------
// import playList from './playList.js';

const date = document.querySelector('.date');
const time = document.querySelector('.time');
const greeting = document.querySelector('.greeting');
const lastName = document.querySelector('.name');
const body = document.querySelector('body');
const slidePrev = document.querySelector('.slide-prev');
const slideNext = document.querySelector('.slide-next');
const weatherIcon = document.querySelector('.weather-icon');
const weatherTemperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const weatherCity = document.querySelector('.city');
const weatherError = document.querySelector('.weather-error');
const weatherWind = document.querySelector('.wind');
const weatherHumidity = document.querySelector('.humidity');
const changQuote = document.querySelector('.change-quote');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const playList = document.querySelector('.play-list');
const playerInfo = document.querySelector('.player__info');
let musicDurationTime = document.querySelector('.duration');
let musicCurrentTime = document.querySelector('.current');
let footerDate = document.querySelector('.footer__date');
const playListItems = playList.children
let nameEnter = document.querySelector('.name-enter')
const todoListTitle = document.querySelector('.todo-list__title')
const todoListBtn = document.querySelector('.todo-list__btn')
const play = document.querySelector('.play');
const playPrevBtn = document.querySelector('.play-prev');
const playNextBtn = document.querySelector('.play-next');
const progressBar = document.querySelector('.progress-bar');
const volumeIcon = document.querySelector('.volume-icon_play');
const volumeBar = document.querySelector('.volume-bar');
const dateNew = new Date();
const audio = new Audio();
const hours = dateNew.getHours();
const timeOfDay = getTimeOfDay(hours);
let bgRandomNum = getRandomNum(1,20);
let isPlay = false;
let playNum = 0
let imgSource = 'github'
let language = 'en'
let teg;


//--???????????? ????????????????
const enBtn = document.getElementById('en-btn')
const ruBtn = document.getElementById('ru-btn')
const githubBtn = document.getElementById('github-btn')
const unsplashBtn = document.getElementById('unsplash-btn')
const flickrBtn = document.getElementById('flickr-btn')
const timeBtn = document.getElementById('time-btn')
const dateBtn = document.getElementById('date-btn')
const greetingsBtn = document.getElementById('greetings-btn')
const quoteBtn = document.getElementById('quote-btn')
const weatherBtn = document.getElementById('weather-btn')
const playerBtn = document.getElementById('player-btn')
const todoBtn = document.getElementById('todo-btn')
const rssBtn = document.getElementById('rss-btn')

//--?????????? ?????? ??????????????
const player = document.querySelector('.player')
const weather = document.querySelector('.weather')
const footerQuote = document.querySelector('.footer__quote')
const greetingContainer = document.querySelector('.greeting-container')
const todoListIcon = document.querySelector('.todo-list')
const footerLink = document.querySelector('.footer__rss')

//--H?????????????? ????????????????
const popupTitle = document.querySelector('.popup__title')
const subtitleLanguage = document.getElementById('subtitle-languare')
const subtitleSource = document.getElementById('subtitle-source')
const subtitleVisible = document.getElementById('subtitle-visible')
const sattingNameEn = document.getElementById('satting-name_en')
const sattingNameRu = document.getElementById('satting-name_ru')
const sattingNameGitHub = document.getElementById('satting-name_github')
const sattingNameUnsplash = document.getElementById('satting-name_unsplash')
const sattingNameFlickr = document.getElementById('satting-name_flickr')
let sourceEnter = document.querySelector('.source__enter')
const sattingNameTime = document.getElementById('satting-name_time')
const sattingNameDate = document.getElementById('satting-name_date')
const sattingNameGreetings = document.getElementById('satting-name_greetings')
const sattingNameQuote = document.getElementById('satting-name_quote')
const sattingNameWeather = document.getElementById('satting-name_weather')
const sattingNamePlayer = document.getElementById('satting-name_player')
const sattingNameTodo = document.getElementById('satting-name_todo')
const sattingNameRss = document.getElementById('satting-name_rss')



//----------------------Time---------------------------------------
const showTime = (e) => {
    const dateNew = new Date();
    time.textContent = dateNew.toLocaleTimeString(e, { hour12: false });
    showDate();
    showGreeting();
    setTimeout(showTime, 1000);
  }
  showTime();

//-------------------------Date--------------------------------
function showDate() {
    const dateNew = new Date();
    let currentDate;
    let optionsEn = {month: 'long', day: 'numeric', weekday: 'long'};
    let optionsRu = {month: 'numeric', day: 'numeric', weekday: 'long'};
    currentDate = dateNew.toLocaleDateString('en-US', optionsEn)
    if(language === 'en'){
      currentDate = dateNew.toLocaleDateString('en-US', optionsEn);
    }else{
      currentDate = dateNew.toLocaleDateString('ru-RU', optionsRu);
    }
    date.textContent = currentDate;
}

//-----------------------Greeting----------------------------------
function showGreeting(){
  const date = new Date();
  let hours = date.getHours();
  const timeOfDay = getTimeOfDay(hours);
  let greetingText;
  if(language === 'ru'){
    nameEnter.placeholder = "[?????????????? ??????]"

    if(timeOfDay === 'night'){
      greetingText = '???????????? ????????'
    }else if(timeOfDay === 'morning'){
      greetingText = '???????????? ????????'
    }else if(timeOfDay === 'afternoon'){
      greetingText = '???????????? ????????'
    }else if(timeOfDay === 'evening'){
      greetingText = '???????????? ??????????'
    }
  }else{
    nameEnter.placeholder = "[Enter name]"

    greetingText = `Good ${timeOfDay}`
  }
  greeting.textContent = greetingText;
}
function getTimeOfDay(hours){
  let arrTimeOfDay = ['night', 'morning', 'afternoon', 'evening']
  for(i = 0; i < arrTimeOfDay.length; i++){
    if(i === Math.floor(hours / 6)){
      return arrTimeOfDay[i]
    }
  }
}

//-------------LocalStorage--------------------------
function setLocalStorageName() {
  localStorage.setItem('name', nameEnter.value);
  localStorage.setItem('language', language);
  localStorage.setItem('imgSource', imgSource);
  localStorage.setItem('sourceEnter', sourceEnter.value);
  localStorage.setItem('timeBtn', timeBtn.checked);
  localStorage.setItem('dateBtn', dateBtn.checked);
  localStorage.setItem('greetingsBtn', greetingsBtn.checked);
  localStorage.setItem('quoteBtn', quoteBtn.checked);
  localStorage.setItem('weatherBtn', weatherBtn.checked);
  localStorage.setItem('playerBtn', playerBtn.checked);
  localStorage.setItem('todoBtn', todoBtn.checked);
  localStorage.setItem('rssBtn', rssBtn.checked);
}
window.addEventListener('beforeunload', setLocalStorageName);

function getLocalStorageName() {
  if(localStorage.getItem('name')) {
    nameEnter.value = localStorage.getItem('name');
  }
  if(localStorage.getItem('language') === 'ru') {
    language = localStorage.getItem('language');
    ruBtn.checked = true;
    choiceLanguage();
  }

  if(localStorage.getItem('imgSource')) {
    imgSource = localStorage.getItem('imgSource');
    if(imgSource === 'github'){
      githubBtn.checked = true;
    }else if(imgSource === 'unsplash'){
      unsplashBtn.checked = true;
    }else if(imgSource === 'flickr'){
      flickrBtn.checked = true;
    }
  }
  if(localStorage.getItem('sourceEnter')) {
    sourceEnter.value = localStorage.getItem('sourceEnter')
  }
  setBg()
  if(localStorage.getItem('timeBtn') === 'false') {
    timeBtn.checked = false;
    time.classList.add('hide')
  }
  if(localStorage.getItem('dateBtn') === 'false') {
    dateBtn.checked = false;
    date.classList.add('hide')
  }
  if(localStorage.getItem('greetingsBtn') === 'false') {
    greetingsBtn.checked = false;
    greetingContainer.classList.add('hide')
  }
  if(localStorage.getItem('quoteBtn') === 'false') {
    quoteBtn.checked = false;
    footerQuote.classList.add('hide')
  }
  if(localStorage.getItem('weatherBtn') === 'false') {
    weatherBtn.checked = false;
    weather.classList.add('hide')
  }
  if(localStorage.getItem('playerBtn') === 'false') {
    playerBtn.checked = false;
    player.classList.add('hide')
  }
  if(localStorage.getItem('todoBtn') === 'false') {
    todoBtn.checked = false;
    todoListIcon.classList.add('hide')
  }
  if(localStorage.getItem('rssBtn') === 'false') {
    rssBtn.checked = false;
    footerLink.classList.add('hide')
  }
}
window.addEventListener('load', getLocalStorageName)


//---------------------------Slider-----------------------------

function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //???????????????? ?? ?????????????? ????????????????????
}

// //--?????????????? ???????????????????????? ????????
function setBg(){
  const date = new Date();
  let hours = date.getHours();
  const timeOfDay = getTimeOfDay(hours);
  const img = new Image()
    if(imgSource === 'github'){
      const bgNum = bgRandomNum.toString().padStart(2, '0');
      nameEnter.placeholder = "[?????????????? ??????]"
      img.src = `https://raw.githubusercontent.com/MishaKozarev/Momentum-image/assets/images/${timeOfDay}/${bgNum}.jpg`
      img.addEventListener('load', changeBackground);
      function changeBackground(){
      body.style.backgroundImage = `url("${img.src}")`;
      }
    }else if(imgSource === 'unsplash'){
      getLinkToImage();
    }else if(imgSource === 'flickr'){
      getLinkToImage();
    }
}
setBg();


//--?????????????? ???????????? ???????? ???? (uploate API / flickr API)
async function getLinkToImage() {
  if(imgSource === 'flickr'){
    uploateFlickrhApi(timeOfDay, sourceEnter)
  }else{
    uploateUnsplashApi(timeOfDay, sourceEnter)
  }
}
//--?????????????? ???????????????????? ???????? ???? uploate API
async function uploateUnsplashApi(){
    const img = new Image()
    const unsplashUrl = `https://api.unsplash.com/photos/random?orientation=landscape&query=${sourceEnter.value||timeOfDay}&client_id=GGLpT9KRlh4nDDumbAe6Egacl0_1GErcZDfOwlUVhWk`;
    const unsplashRes = await fetch(unsplashUrl);
    const unsplashdData = await unsplashRes.json();
    img.addEventListener('load', changeBackground);
    img.src = unsplashdData.urls.regular
    function changeBackground(){
      body.style.backgroundImage = `url("${img.src}")`
    }
}
//--?????????????? ???????????????????? ???????? ???? flickr API
async function uploateFlickrhApi(){
    let bgRandomNum = getRandomNum(1,20);
    const img = new Image()
    const flickrhUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=9287d015f5224ec143cb0c8e9e139a01&tags=${sourceEnter.value||timeOfDay}&extras=url_l&format=json&nojsoncallback=1`;
    const flickrRes = await fetch(flickrhUrl);
    const flickrData = await flickrRes.json();
    img.addEventListener('load', changeBackground);
    img.src = flickrData.photos.photo[bgRandomNum].url_l
    function changeBackground(){
      body.style.backgroundImage = `url("${img.src}")`
    }
}
sourceEnter.addEventListener('change', uploateUnsplashApi)

//--?????????????? ???????????????????????? ???????????? ???????????? ?????? ????????
slideNext.addEventListener('click', getSlideNext);
function getSlideNext(){
  if(bgRandomNum !== 20){
    bgRandomNum ++;
  }else{
    bgRandomNum = 1;
  }
  setBg();
}

//--?????????????? ???????????????????????? ?????????? ???????????? ?????? ????????
slidePrev.addEventListener('click', getSlidePrev);
function getSlidePrev(){
  if(bgRandomNum !== 1){
    bgRandomNum --;
  }else{
    bgRandomNum = 20;
  }
  setBg();
}

//----------------------Weather---------------------------
function setLocalStorageWeather() {
  localStorage.setItem('city', weatherCity.value);
}
window.addEventListener('beforeunload', setLocalStorageWeather);

function getLocalStorageWeather() {
  if(localStorage.getItem('city')){
    weatherCity.value = localStorage.getItem('city');
  }else{
    weatherCity.value = `Minsk`;
  }
}
window.addEventListener('load', getLocalStorageWeather)
weatherCity.addEventListener('change', getWeather)

async function getWeather() {
if(language === 'ru'){
  weatherCity.placeholder = '?????????????? ??????????'
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${weatherCity.value}&lang=ru&appid=b01bd6c0617fd09382c122590e3e2674&units=metric`;
  const weatherRes = await fetch(weatherUrl);
  const weatherdata = await weatherRes.json();
  if(weatherdata.weather === undefined){
    weatherError.textContent = `????????????! ?????????? ?????????? ???? ????????????????????.`
    weatherIcon.className = 'weather-icon owf';
    weatherTemperature.textContent = ``;
    weatherDescription.textContent = ``;
    weatherWind.textContent = ``;
    weatherHumidity.textContent = ``;
  }else{
    weatherIcon.classList.add(`owf-${weatherdata.weather[0].id}`);
    weatherTemperature.textContent = `${Math.trunc(weatherdata.main.temp)}??C`;
    weatherDescription.textContent = weatherdata.weather[0].description;
    weatherError.textContent = ``
    weatherWind.textContent = `???????????????? ?????????? : ${Math.trunc(weatherdata.wind.speed)} ??/??`
    weatherHumidity.textContent = `?????????????????? : ${weatherdata.main.humidity}%`;
  }
}else{
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${weatherCity.value}&lang=en&appid=b01bd6c0617fd09382c122590e3e2674&units=metric`;
  const weatherRes = await fetch(weatherUrl);
  const weatherdata = await weatherRes.json();
  if(weatherdata.weather === undefined){
    weatherError.textContent = `Error! This city doesn't exist.`
    weatherIcon.className = 'weather-icon owf';
    weatherTemperature.textContent = ``;
    weatherDescription.textContent = ``;
    weatherWind.textContent = ``;
    weatherHumidity.textContent = ``;
  }else{
    weatherIcon.classList.add(`owf-${weatherdata.weather[0].id}`);
    weatherTemperature.textContent = `${Math.trunc(weatherdata.main.temp)}??C`;
    weatherDescription.textContent = weatherdata.weather[0].description;
    weatherError.textContent = ``
    weatherWind.textContent = `Wind speed : ${Math.trunc(weatherdata.wind.speed)} m/s`
    weatherHumidity.textContent = `Humidity : ${weatherdata.main.humidity}%`;
  }
}
}
window.addEventListener('load', getWeather)


//--------------------quote of the Day----------------------------------

async function getQuotes() {
  const quotes = 'data.json';
  const quotesRes = await fetch(quotes);
  const quotesData = await quotesRes.json();
  const quoteRandom = getRandomNum(0,quotesData.length - 1);
  if(language === 'ru'){
    quote.textContent = `${quotesData[quoteRandom].text}`
    author.textContent = `${quotesData[quoteRandom].author}`
  }else{
    quote.textContent = `${quotesData[quoteRandom].texten}`
    author.textContent = `${quotesData[quoteRandom].authoren}`
  }
}
getQuotes();
changQuote.addEventListener('click', getQuotes);
window.addEventListener('load', getQuotes)


//---------------audio player---------------------

const playListTreck = [
  {
    title: '??????-????????????',
    src: "./assets/sounds/??????-????????????.mp3",
    duration: '00 : 39'
  },
  {
    title: '????????-????????????-???????????? ??????',
    src: './assets/sounds/????????-????????????-???????????? ??????.mp3',
    duration: '01 : 37'
  },
  {
    title: '??????????-??????????????????-?????????? ??????????',
    src: "./assets/sounds/??????????-??????????????????-?????????? ??????????.mp3",
    duration: '01 : 37'
  },
  {
    title: '??????????????????????-?????? ??????????????',
    src: "./assets/sounds/??????????????????????-?????? ??????????????.mp3",
    duration: '01 : 50'
  }
]

//--?????????????????? ????????????????

function addPlayList(){
  for(let i = 0; i < playListTreck.length; i++) {
    const li = document.createElement('li');
		const iconItem = document.createElement('div');
		const textItem = document.createElement('div');
		li.classList.add('play-list__item');
		iconItem.classList.add('play');
		iconItem.classList.add('play-list__icon');
		textItem.classList.add('play-list__title');
		textItem.textContent = playListTreck[i].title;
		li.append(iconItem);
		li.append(textItem);
		playList.append(li);
  }
}
addPlayList()

const playListIcons = playList.querySelectorAll('.play-list__icon')


//--???????????????? ????????
function choiceTrack(){
  audio.src = playListTreck[playNum].src;
  playerInfo.textContent = playListTreck[playNum].title;
  playListItems[playNum].classList.add('active')
  musicDurationTime.textContent = playListTreck[playNum].duration
}
choiceTrack();


//--?????????????????? ????????????
function playAudio() {
	if (isPlay === false) {
		isPlay = true;
		audio.play();
		play.classList.toggle('pause');
    if(play.classList.contains('pause')){
      playListItems[playNum].children[0].classList.add('pause')
    }else{
      playListItems[playNum].children[0].classList.remove('pause')
    }
	}else {
		isPlay = false;
		audio.pause();
		play.classList.toggle('pause');
    if(play.classList.contains('pause')){
      playListItems[playNum].children[0].classList.add('pause')
    }else{
      playListItems[playNum].children[0].classList.remove('pause')
    }
	}
}
play.addEventListener('click', playAudio);

//--?????????? ?????????????????? - ??????????????????
audio.addEventListener('ended', playNext);

//--?????????????????????? ????????????
function playNext() {
	playListItems[playNum].classList.remove('active');
	playListItems[playNum].children[0].classList.remove('pause');
	if (playNum < playListItems.length - 1){
		playNum++;
	} else {
		playNum = 0;
	}
	choiceTrack();
	if (isPlay === false) {
		isPlay = true;
	} else {
		isPlay = false;
	}
	play.classList.toggle('pause');
	playAudio();
}
playNextBtn.addEventListener('click', playNext);

//--?????????????????????? ??????????
function playPrev() {
	playListItems[playNum].classList.remove('active');
	playListItems[playNum].children[0].classList.remove('pause');
	if (playNum > 0){
		playNum--;
	} else {
		playNum = playListItems.length - 1;
	}
	choiceTrack();
	if (isPlay === false) {
		isPlay = true;
	} else {
		isPlay = false;
	}
	play.classList.toggle('pause');
	playAudio();
}
playPrevBtn.addEventListener('click', playPrev);

//--???????????? ?????????? ???? ????????????
playListIcons.forEach(item => {
	item.addEventListener('click', (e) => {
		const newPlayNum = [...item.parentElement.parentElement.children].indexOf(e.target.parentElement);
		if (newPlayNum !== playNum) {
			playListItems[playNum].classList.remove('active');
			playListItems[playNum].children[0].classList.remove('pause');
			playNum = newPlayNum;
			choiceTrack()
			if (isPlay === true) {
				isPlay = false;
				play.classList.toggle('pause');
			}
		}
		playAudio();
	})
})


//--?????????? ???????????????? ??????????
function updateProgressValue() {
  progressBar.max = audio.duration;
  progressBar.value = audio.currentTime;
  musicCurrentTime.innerHTML = (formatTime(Math.floor(audio.currentTime)));
};
setInterval(updateProgressValue, 500);

// ???????????? ??????????????
function formatTime(sec) {
  let totalMin = Math.floor((sec / 60));
  let totalSec = Math.floor(sec - (totalMin * 60));
  if (totalSec < 10){
    totalSec  = `0${totalSec}`;
  };
  return `${totalMin} : ${totalSec}`;
};

//--?????????????????????????? ????????????????-??????
function changeProgressBar() {
  audio.currentTime = progressBar.value;
};
progressBar.addEventListener('change', changeProgressBar);

//--?????????????????? ??????????-??????
function changeVolumeBar() {
  audio.volume = volumeBar.value / 10;
  }
  volumeBar.addEventListener('change', changeVolumeBar);

//--???????????? ?????????? ??????/????????
function changeVolumeIcon() {
volumeIcon.classList.toggle('volume-icon_stop');
audio.muted = !audio.muted;
}
volumeIcon.addEventListener('click', changeVolumeIcon);


//--------------SETTING-------------------------------

//--Popup
const openPopUp = document.querySelector('.setting__btn')
const closePopUp = document.querySelector('.popup__close')
const PopUp = document.querySelector('.popup')

openPopUp.addEventListener('click', () => {
  PopUp.classList.add('active')
})
closePopUp.addEventListener('click', () => {
  PopUp.classList.remove('active')
})

// --?????????? ????????
function changeSource(){
 imgSource = (githubBtn.checked) ? 'github' : (unsplashBtn.checked) ? 'unsplash' : 'flickr'
 setBg()
}
githubBtn.addEventListener('change', changeSource)
unsplashBtn.addEventListener('change', changeSource)
flickrBtn.addEventListener('change', changeSource)

// ?????????? ??????????
function choiceLanguage(){
  if(enBtn.checked){
    language = 'en'
    popupTitle.textContent = 'Setting'
    subtitleLanguage.textContent = 'Language'
    subtitleSource.textContent = 'Source'
    subtitleVisible.textContent = 'Visible'
    sattingNameEn.textContent = 'Eng'
    sattingNameRu.textContent = 'Rus'
    sattingNameGitHub.textContent = 'GitHub'
    sattingNameUnsplash.textContent = 'Unsplash API'
    sattingNameFlickr.textContent = 'Flickr API'
    sattingNameTime.textContent = 'Time'
    sattingNameDate.textContent = 'Date'
    sattingNameGreetings.textContent = 'Greetings'
    sattingNameQuote.textContent = 'Quote'
    sattingNameWeather.textContent = 'Weather'
    sattingNamePlayer.textContent = 'Player'
    sattingNameTodo.textContent = 'Todo List'
    sattingNameRss.textContent = 'RS school'
    footerDate.innerHTML = 'Misha Kozarev, 2023'
    sourceEnter.placeholder = '[Enter tag]'
    if(weatherCity.value === `??????????`){
      weatherCity.value = `Minsk`;
    }
    todoListTitle.textContent = 'To Do List'
    todoListBtn.textContent = 'add'
  }else{
    language = 'ru';
    popupTitle.textContent = '??????????????????'
    subtitleLanguage.textContent = '????????'
    subtitleSource.textContent = '????????????????'
    subtitleVisible.textContent = '?????????????? ????????'
    sattingNameEn.textContent = '????????'
    sattingNameRu.textContent = '??????'
    sattingNameGitHub.textContent = '????????????'
    sattingNameUnsplash.textContent = 'Unsplash ??????'
    sattingNameFlickr.textContent = 'Flickr ??????'
    sattingNameTime.textContent = '??????????'
    sattingNameDate.textContent = '????????'
    sattingNameGreetings.textContent = '??????????????????????'
    sattingNameQuote.textContent = '????????????'
    sattingNameWeather.textContent = '????????????'
    sattingNamePlayer.textContent = '??????????'
    sattingNameTodo.textContent = '???????????? ??????'
    sattingNameRss.textContent = 'RS ??????????'
    footerDate.innerHTML = '???????? ??????????????, 2023'
    sourceEnter.placeholder = '[?????????????? ??????]'
    todoListTitle.textContent = '???????????? ??????'
    todoListBtn.textContent = '??????????'
    if(weatherCity.value === `Minsk`){
      weatherCity.value = `??????????`;
    }
  }
  getQuotes();
  showDate();
  showGreeting();
  getWeather();
}
enBtn.addEventListener('change', choiceLanguage)
ruBtn.addEventListener('change', choiceLanguage)


// ?????????????????? ??????????????????

timeBtn.addEventListener('click', () => {
  time.classList.toggle('hide')
})
dateBtn.addEventListener('click', () => {
  date.classList.toggle('hide')
})
greetingsBtn.addEventListener('click', () => {
  greetingContainer.classList.toggle('hide')
})
quoteBtn.addEventListener('click', () => {
  footerQuote.classList.toggle('hide')
})
weatherBtn.addEventListener('click', () => {
  weather.classList.toggle('hide')
})
playerBtn.addEventListener('click', () => {
  player.classList.toggle('hide')
})
todoBtn.addEventListener('click', () => {
  todoListIcon.classList.toggle('hide')
})
rssBtn.addEventListener('click', () => {
  footerLink.classList.toggle('hide')
})


//----------To Do List-------------------------------

//--??????????????\??????????????
const openTodoList = document.querySelector('.todo-list__icon')
const closeTodoList = document.querySelector('.todo-list__close')
const todoListBody = document.querySelector('.todo-list__body')

openTodoList.addEventListener('click', () => {
  todoListBody.classList.add('active')
})
closeTodoList.addEventListener('click', () => {
  todoListBody.classList.remove('active')
})

//--??????????????????
const inputTodoList = document.querySelector('.todo-list__input');
const btnTodoList = document.querySelector('.todo-list__btn');
const ulTodoList = document.querySelector('.todo-list__ul');
let total = 0

btnTodoList.addEventListener('click', (e) => {
  if(inputTodoList.value === '') return;
  createTodoLi(inputTodoList.value);
  inputTodoList.value = '';
})



// --?????????????????? ??????????????
function createTodoLi(value){
const liTodoList = document.createElement('div');
const closeLiTodoList = document.createElement('div');
liTodoList.textContent = value;

liTodoList.className = 'todo-list__li';
closeLiTodoList.className = 'todo-list__li-close';
ulTodoList.appendChild(liTodoList);
liTodoList.appendChild(closeLiTodoList);
//-- ?????????????? ??????????????
  closeLiTodoList.addEventListener('click', (e) => {
    ulTodoList.removeChild(liTodoList);
  })

  //--?????????????????????? ??????????????
  liTodoList.addEventListener('click', (e) => {
    liTodoList.classList.toggle('text');
  })
}


