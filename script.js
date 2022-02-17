// const startBtn = document.querySelector('#start')
// const screens = document.querySelectorAll('.screen')
// const timeList = document.querySelector('#time-list')
// const timeEl = document.querySelector('#time')
// const board = document.querySelector('#board')
// const boardColor = ['linear-gradient(118.38deg, #29323c -4.6%, #485563 200.44%)', 'linear-gradient(118.38deg, #29323c -4.6%, #485563 200.44%)', 'linear-gradient(118.38deg, #29323c -4.6%, #485563 200.44%)', 'linear-gradient(118.38deg, #29323c -4.6%, #485563 200.44%)']
// const colors = ['#e74c3c', 'rgb(192, 116, 116)', 'rgb(127, 197, 95)', 'rgb(70, 146, 218)', 'rgb(161, 42, 190)']
// let time = 0;
// let score = 0;

// startBtn.addEventListener('click', (event) => {
// 	event.preventDefault()
// 	screens[0].classList.add('up');

// })

// timeList.addEventListener('click', event => {
// 	if (event.target.classList.contains('time-btn')) {
// 		time = parseInt(event.target.getAttribute('data-time'));
// 		screens[1].classList.add('up')
// 		startGame()
// 	}
// })

// board.addEventListener('click', event => {
// 	if (event.target.classList.contains('circle')) {
// 		score++;
// 		event.target.remove();
// 		creatRandomCircle();
// 	}
// })



// function startGame() {
// 	setInterval(decreaseTime, 1000)
// 	creatRandomCircle()
// 	setTime(time)
// }

// function decreaseTime() {
// 	if (time === 0) {
// 		finishGame()
// 	} else {
// 		let current = --time
// 		if (current < 10) {
// 			current = `0${current}`
// 		}
// 		setTime(current)
// 	}
// }

// function setTime(value) {
// 	timeEl.innerHTML = `00:${value}`
// }

// function finishGame() {
// 	timeEl.parentNode.classList.add('hide')
// 	board.innerHTML = `<h1>Счет <span class="primery">${score}</span></h1>`
// }

// function creatRandomCircle() {
// 	const circle = document.createElement('div')
// 	const size = getRandomNumber(10, 60)
// 	const { width, height } = board.getBoundingClientRect()
// 	const x = getRandomNumber(0, width - size)
// 	const y = getRandomNumber(0, height - size)
// 	circle.classList.add('circle')
// 	circle.style.width = `${size}px`
// 	circle.style.height = `${size}px`
// 	circle.style.top = `${y}px`
// 	circle.style.left = `${x}px`
// 	setColor(circle)
// 	board.append(circle)

// }

// function getRandomNumber(min, max) {
// 	return Math.round(Math.random() * (max - min) + min)
// }


// function setColor(element) {
// 	const color = getRandomColor()
// 	element.style.background = color

// }
// function getRandomColor() {
// 	const index = Math.floor(Math.random() * colors.length)
// 	return colors[index]
// }
// function winGame() {
// 	function kill() {
// 		const circle = document.querySelector('.circle')

// 		if (circle) {
// 			circle.click()
// 		}
// 	}
// 	setInterval(kill, 1)
// }

// обучение js
'use strict';

let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?' , '');

	while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?' , '');
	}
}
start();
const personalMovieDB = {
	count : numberOfFilms,
	movies : {},
	actors : {},
	genres : [],
	privat : false
};

function rememberMyFilm(){
	for ( let i = 0; i < 2; i++ ){
		const   a = prompt('Один из последних просмотренных фильмов?'),
				b = prompt('На сколько оцените его?');
	
		if (a != null && b != null && a != '' && b != '' && a.length < 50){
				personalMovieDB.movies[a] = b;
				console.log('yes');
		} else {
			console.log('error');
			i--;
		}
	}
}
rememberMyFilm();

function detectPersonalLevel(){
	if (personalMovieDB.count <= 10){
		console.log("мало");
	} else if(personalMovieDB.count > 10 && personalMovieDB.count < 30){
		console.log("norm");
	}else if(personalMovieDB.count <= 30){
		console.log("kinoman");
	}
}
detectPersonalLevel()

function showMyDB(hidden){
	if (!hidden) {
		console.log(personalMovieDB);
	}
}
showMyDB(personalMovieDB.privat);

function writeYourGenres(){
	for (let i=1; i <=3; i++){
		personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
	}
}
writeYourGenres()