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
	console.log(111);
	
	if (menuBody.classList.contains('_active')) {
		document.body.classList.remove('_lock');
		iconMenu.classList.remove('_active');
		menuBody.classList.remove('_active');
	}
})

// const iconMenu = document.querySelector('.menu__icon');
// const menuBody = document.querySelector('.menu__body');
// 

// iconMenu.addEventListener('click', menu);


// function menu(event) {
// if (menuBody.classList.contains('_active')) {
// 	menuBody.classList.remove('_active')
// } else {
// 	menuBody.classList.add('_active')
// }
// 		document.body.classList.toggle('_lock');
// 		iconMenu.classList.toggle('_active');
// 		menuBody.classList.toggle('_active');
// 		// document.body.classList.remove('_lock');
// 		// iconMenu.classList.remove('_active');
// 		// menuBody.classList.remove('_active');
// }

//*============================


//*СЛАЙДЕР ===============

//*=PARALLAX===========================
document.addEventListener('mousemove', parallax);
document.addEventListener('mouseout', resetParallax);
const parallaxItems = document.querySelectorAll('.layer');
function parallax(e) {
	if (e.target.closest('.cover')) {
		parallaxItems.forEach((item) => {
			const speed = item.getAttribute('data-speed')
			//ширина окна браузера - координаты события * на скорость
			if (window.innerWidth > 992) {
			const x = (window.innerWidth - e.pageX * speed) / 100
			const y = (window.innerHeight - e.pageY * speed) / 100
			item.style.transform = `translateX(${x}px) translateY(${y}px)`
			}
		})
	}
}
console.log(window.innerWidth);

function resetParallax() {
	parallaxItems.forEach((item) => {
		item.style.transform = 'translateX(0) translateY(0)'
	})
}

//!accordeon

const faq = document.querySelectorAll('.accordeon');

faq.forEach((item) => {
	item.addEventListener('click', function() {
		item.classList.toggle('active')
	})
})
const mainElement = document.documentElement;
console.log(mainElement.clientWidth);
console.log(window.innerWidth);


//!sticky__header

const headerScrolled = 'header_scrolled';
const header = document.querySelector('.header');


window.addEventListener('scroll', () => {

	if (window.scrollY >= 40 && !header.classList.contains(headerScrolled)) {
		header.classList.add(headerScrolled)

	}
	else if (window.scrollY < 40 && header.classList.contains(headerScrolled)) {
		header.classList.remove(headerScrolled);
	}
})