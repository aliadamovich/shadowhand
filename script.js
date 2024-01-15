"use strict"

//*МЕНЮ БУРГЕР=================
const iconMenu = document.querySelector('.menu__icon');
const spaceCover = document.querySelector('.space__cover');
const menuBody = document.querySelector('.menu__body');

if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		if(menuBody.classList.contains('_active')) {
			document.body.classList.remove('_lock');
			iconMenu.classList.remove('_active');
			menuBody.classList.remove('_active');
		} else {
			document.body.classList.add('_lock');
			iconMenu.classList.add('_active');
			menuBody.classList.add('_active');
		}
	});
}
spaceCover.addEventListener('click', () => {
	
	if (menuBody.classList.contains('_active')) {
		document.body.classList.remove('_lock');
		iconMenu.classList.remove('_active');
		menuBody.classList.remove('_active');
	}
})


//*============================


//*СЛАЙДЕР ===============


const sliderBlock = document.querySelector('.slider-reviews');
const sliderLine = document.querySelector('.slider-reviews__line');
const slide = document.querySelectorAll('.slide-review');
const buttonNext = document.querySelector('.slider-reviews__next');
const buttonPrev = document.querySelector('.slider-reviews__prev');
let currentSlide = 0;
let sliderWidth = null; 

let breakpoint = 580;

function init() {
	sliderWidth = sliderBlock.offsetWidth;
	sliderLine.style.width = sliderWidth * slide.length + 'px';
	slide.forEach((item) => {
		item.style.height = 'auto';
		if (window.innerWidth > breakpoint ) {
			item.style.width = (sliderWidth / 2) + 'px';
			
		} else {
			item.style.width = (sliderWidth) + 'px';
		}
	})
	moveSlide();
}

init();
buttonNext.addEventListener('click', nextSlideActivation);
buttonPrev.addEventListener('click', prevSlideActivation);

window.addEventListener('resize', init);

function nextSlideActivation() {
	currentSlide++;

	if (window.innerWidth > breakpoint && currentSlide >= slide.length / 2) {
		currentSlide = 0;
	} else if (window.innerWidth <= breakpoint && currentSlide >= slide.length) {
		currentSlide = 0;
	}

	moveSlide()
}

function prevSlideActivation() {
	currentSlide--;

	if (currentSlide < 0) {
		if (window.innerWidth > breakpoint) {
			currentSlide = (slide.length / 2 - 1);
		} else {
			currentSlide = (slide.length - 1);
		}
	}

	moveSlide()
}

function moveSlide() {
	sliderLine.style.transform = `translateX(-${sliderWidth * currentSlide}px)`;
}


//*accordeon

const accordeonContainer = document.querySelector('.info-faq');

accordeonContainer.addEventListener('click', function(e) {
	const box = e.target.closest('.accordeon');
	if (box) {
		boxHandler(box);
	}
})


function boxHandler(box) {
	const currentQuestion = box.querySelector('.accordeon__question');
	const currentContent = currentQuestion.nextElementSibling;

	if (currentQuestion) {
		box.classList.toggle('active');

		if (box.classList.contains('active')) {
			currentContent.style.maxHeight = currentContent.scrollHeight + 'px';
		} else {
			currentContent.style.maxHeight = 0;
		}
	};
}



//!sticky__header

const headerScrolled = 'header_scrolled';
const header = document.querySelector('.header');


window.addEventListener('scroll', () => {

	if (window.scrollY >= 60 && !header.classList.contains(headerScrolled)) {
		header.classList.add(headerScrolled)
	}
	else if (window.scrollY < 60 && header.classList.contains(headerScrolled)) {
		header.classList.remove(headerScrolled);
	}
	
})




//!popup window

const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');


//перебираем каждую ссылку с классом popup-link, навешиваю событие клик
//у каждой ссылки получаю атрибут href и убираю #
//получаю в константу элемент с таким же айдишником, как атрибут
//у нашей ссылки и вешаю на него ф-цию открыть попап
if (popupLinks.length > 0) {
	popupLinks.forEach(item => {
		item.addEventListener('click', function(e) {
			const popupName = item.getAttribute('href').replace('#', '');
			const currentPopup = document.getElementById(popupName);
			popupOpen(currentPopup);
			e.preventDefault();
		})
	})
}
//ф-ция для закрытия попапа для крестика или кнопки внутри попапа
//перебираем, вешаем событие клик и при клике вешаем функцию
//на ближайшего родителя с классом popup (closest - поиск ближ родителя с указанным в скобках классом)
const popupCloseIcon = document.querySelectorAll('.close-popup');
if(popupCloseIcon.length > 0) {
	popupCloseIcon.forEach(elem => {
		elem.addEventListener('click', function(e) {
			popupClose(elem.closest('.popup'))
			e.preventDefault();
		})
	})
}

//ф-ия открытия попапа
function popupOpen(currentPopup) {
	//этот код закрывает открытый попап, в ситуации когда у нас ссылка на второй попап 
	//внутри попапа
	if (currentPopup) {
		const popupActive = document.querySelector('.popup.open');
		if(popupActive) {
			popupClose(popupActive);
		}
	}
	body.classList.add('_lock');
	//добавляем класс open
	currentPopup.classList.add('open');
	//на весь попап вешаем событие клик, в условиях у которого - если мы
	//нажали у попапа куда-то, КРОМЕ popup__content (а это область вокруг контента). то закрой попап 
	//это нужно чтобы закрывать попап по клике на область вокруг
	currentPopup.addEventListener('click', function(e) {
		if(!e.target.closest('.popup__content')) {
			popupClose(e.target.closest('.popup'))
		}
	})
}

//ф-ция закрытия попапа
function popupClose(popupActive) {
	if(popupActive) {
		popupActive.classList.remove('open');
		body.classList.remove('_lock');
		stopVideo();
	}
}

//ф-ция отановки видео для модального окна
function stopVideo() {
	const videos = document.querySelectorAll('iframe');
	videos.forEach((video) => {
		const src = video.src;
		video.src = src;
	})
}
//выход из модального окна по escape (не работает если видео начало вопсроизводиться)
document.addEventListener('keyup', function(e) {
	if (e.code === 'Escape') {
		const popupActive = document.querySelector('.popup.open');
		stopVideo();
		popupClose(popupActive);
	}
})



