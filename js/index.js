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


//--Кнопки настроек
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

//--Блоки для скрытия
const player = document.querySelector('.player')
const weather = document.querySelector('.weather')
const footerQuote = document.querySelector('.footer__quote')
const greetingContainer = document.querySelector('.greeting-container')
const todoListIcon = document.querySelector('.todo-list')
const footerLink = document.querySelector('.footer__rss')

//--Hазвания настроек
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
    nameEnter.placeholder = "[Введите имя]"

    if(timeOfDay === 'night'){
      greetingText = 'Доброй ночи'
    }else if(timeOfDay === 'morning'){
      greetingText = 'Доброе утро'
    }else if(timeOfDay === 'afternoon'){
      greetingText = 'Добрый день'
    }else if(timeOfDay === 'evening'){
      greetingText = 'Добрый вечер'
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
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

// //--Функция установления фона
function setBg(){
  const date = new Date();
  let hours = date.getHours();
  const timeOfDay = getTimeOfDay(hours);
  const img = new Image()
    if(imgSource === 'github'){
      const bgNum = bgRandomNum.toString().padStart(2, '0');
      nameEnter.placeholder = "[Введите имя]"
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


//--Функция выбора фона из (uploate API / flickr API)
async function getLinkToImage() {
  if(imgSource === 'flickr'){
    uploateFlickrhApi(timeOfDay, sourceEnter)
  }else{
    uploateUnsplashApi(timeOfDay, sourceEnter)
  }
}
//--Функция добавления фона из uploate API
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
//--Функция добавления фона из flickr API
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

//--Функция переключения вперед слайда для фона
slideNext.addEventListener('click', getSlideNext);
function getSlideNext(){
  if(bgRandomNum !== 20){
    bgRandomNum ++;
  }else{
    bgRandomNum = 1;
  }
  setBg();
}

//--Функция переключения назад слайда для фона
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
  weatherCity.placeholder = 'Введите город'
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${weatherCity.value}&lang=ru&appid=b01bd6c0617fd09382c122590e3e2674&units=metric`;
  const weatherRes = await fetch(weatherUrl);
  const weatherdata = await weatherRes.json();
  if(weatherdata.weather === undefined){
    weatherError.textContent = `Ошибка! Такой город не существует.`
    weatherIcon.className = 'weather-icon owf';
    weatherTemperature.textContent = ``;
    weatherDescription.textContent = ``;
    weatherWind.textContent = ``;
    weatherHumidity.textContent = ``;
  }else{
    weatherIcon.classList.add(`owf-${weatherdata.weather[0].id}`);
    weatherTemperature.textContent = `${Math.trunc(weatherdata.main.temp)}°C`;
    weatherDescription.textContent = weatherdata.weather[0].description;
    weatherError.textContent = ``
    weatherWind.textContent = `Скорость ветра : ${Math.trunc(weatherdata.wind.speed)} м/с`
    weatherHumidity.textContent = `Влажность : ${weatherdata.main.humidity}%`;
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
    weatherTemperature.textContent = `${Math.trunc(weatherdata.main.temp)}°C`;
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
    title: 'ДДТ-Метель',
    src: "./assets/sounds/ДДТ-Метель.mp3",
    duration: '00 : 39'
  },
  {
    title: 'КИНО-Красно-желтые дни',
    src: './assets/sounds/КИНО-Красно-желтые дни.mp3',
    duration: '01 : 37'
  },
  {
    title: 'Ляпис-Трубецкой-Воины света',
    src: "./assets/sounds/Ляпис-Трубецкой-Воины света.mp3",
    duration: '01 : 37'
  },
  {
    title: 'Порнофильмы-Это пройдет',
    src: "./assets/sounds/Порнофильмы-Это пройдет.mp3",
    duration: '01 : 50'
  }
]

//--Добавляет плейлист

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


//--Выбирает трек
function choiceTrack(){
  audio.src = playListTreck[playNum].src;
  playerInfo.textContent = playListTreck[playNum].title;
  playListItems[playNum].classList.add('active')
  musicDurationTime.textContent = playListTreck[playNum].duration
}
choiceTrack();


//--Запускает музыку
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

//--После окончания - следующая
audio.addEventListener('ended', playNext);

//--Переключать вперед
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

//--Переключать назад
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

//--Запуск песни по иконке
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


//--Время играющей песни
function updateProgressValue() {
  progressBar.max = audio.duration;
  progressBar.value = audio.currentTime;
  musicCurrentTime.innerHTML = (formatTime(Math.floor(audio.currentTime)));
};
setInterval(updateProgressValue, 500);

// Формат времени
function formatTime(sec) {
  let totalMin = Math.floor((sec / 60));
  let totalSec = Math.floor(sec - (totalMin * 60));
  if (totalSec < 10){
    totalSec  = `0${totalSec}`;
  };
  return `${totalMin} : ${totalSec}`;
};

//--Перетаскивать прогресс-бар
function changeProgressBar() {
  audio.currentTime = progressBar.value;
};
progressBar.addEventListener('change', changeProgressBar);

//--Перемотка волум-бар
function changeVolumeBar() {
  audio.volume = volumeBar.value / 10;
  }
  volumeBar.addEventListener('change', changeVolumeBar);

//--Иконка звука вкл/выкл
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

// --Выбор фона
function changeSource(){
 imgSource = (githubBtn.checked) ? 'github' : (unsplashBtn.checked) ? 'unsplash' : 'flickr'
 setBg()
}
githubBtn.addEventListener('change', changeSource)
unsplashBtn.addEventListener('change', changeSource)
flickrBtn.addEventListener('change', changeSource)

// Выбор языка
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
    if(weatherCity.value === `Минск`){
      weatherCity.value = `Minsk`;
    }
    todoListTitle.textContent = 'To Do List'
    todoListBtn.textContent = 'add'
  }else{
    language = 'ru';
    popupTitle.textContent = 'Настройки'
    subtitleLanguage.textContent = 'Язык'
    subtitleSource.textContent = 'Источник'
    subtitleVisible.textContent = 'Видимый блок'
    sattingNameEn.textContent = 'Англ'
    sattingNameRu.textContent = 'Рус'
    sattingNameGitHub.textContent = 'Гитхаб'
    sattingNameUnsplash.textContent = 'Unsplash АПИ'
    sattingNameFlickr.textContent = 'Flickr АПИ'
    sattingNameTime.textContent = 'Время'
    sattingNameDate.textContent = 'Дата'
    sattingNameGreetings.textContent = 'Приветствие'
    sattingNameQuote.textContent = 'Цитата'
    sattingNameWeather.textContent = 'Погода'
    sattingNamePlayer.textContent = 'Плеер'
    sattingNameTodo.textContent = 'Список дел'
    sattingNameRss.textContent = 'RS школа'
    footerDate.innerHTML = 'Миша Козарев, 2023'
    sourceEnter.placeholder = '[Введите тег]'
    todoListTitle.textContent = 'Список дел'
    todoListBtn.textContent = 'добав'
    if(weatherCity.value === `Minsk`){
      weatherCity.value = `Минск`;
    }
  }
  getQuotes();
  showDate();
  showGreeting();
  getWeather();
}
enBtn.addEventListener('change', choiceLanguage)
ruBtn.addEventListener('change', choiceLanguage)


// Видимость элементов

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

//--открыть\закрыть
const openTodoList = document.querySelector('.todo-list__icon')
const closeTodoList = document.querySelector('.todo-list__close')
const todoListBody = document.querySelector('.todo-list__body')

openTodoList.addEventListener('click', () => {
  todoListBody.classList.add('active')
})
closeTodoList.addEventListener('click', () => {
  todoListBody.classList.remove('active')
})

//--Добавлять
const inputTodoList = document.querySelector('.todo-list__input');
const btnTodoList = document.querySelector('.todo-list__btn');
const ulTodoList = document.querySelector('.todo-list__ul');
let total = 0

btnTodoList.addEventListener('click', (e) => {
  if(inputTodoList.value === '') return;
  createTodoLi(inputTodoList.value);
  inputTodoList.value = '';
})



// --Создавать элемент
function createTodoLi(value){
const liTodoList = document.createElement('div');
const closeLiTodoList = document.createElement('div');
liTodoList.textContent = value;

liTodoList.className = 'todo-list__li';
closeLiTodoList.className = 'todo-list__li-close';
ulTodoList.appendChild(liTodoList);
liTodoList.appendChild(closeLiTodoList);
//-- Удаляем элемент
  closeLiTodoList.addEventListener('click', (e) => {
    ulTodoList.removeChild(liTodoList);
  })

  //--Зачеркивать элемент
  liTodoList.addEventListener('click', (e) => {
    liTodoList.classList.toggle('text');
  })
}


