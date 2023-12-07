"use strict"

//*МЕНЮ БУРГЕР=================
// const iconMenu = document.querySelector('.menu__icon');
// if (iconMenu) {
// 	const menuBody = document.querySelector('.menu__body');
// 	iconMenu.addEventListener("click", function (e) {
// 		document.body.classList.toggle('_lock');
// 		iconMenu.classList.toggle('_active');
// 		menuBody.classList.toggle('_active');
// 	});
// }
//*============================


//*СЛАЙДЕР ===============

//*============================
// document.addEventListener('mousemove', parallax);
// document.addEventListener('mouseout', resetParallax);
// const parallaxItems = document.querySelectorAll('.layer');
// function parallax(e) {
// 	if (e.target.closest('.cover')) {
// 		parallaxItems.forEach((item) => {
// 			const speed = item.getAttribute('data-speed')
// 			//ширина окна браузера - координаты события * на скорость
// 			const x = (window.innerWidth - e.pageX * speed) / 100
// 			const y = (window.innerHeight - e.pageY * speed) / 100
// 			item.style.transform = `translateX(${x}px) translateY(${y}px)`
// 		})
// 	}
// }

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
	console.log(window.scrollY);
	if (window.scrollY >= 40 && !header.classList.contains(headerScrolled)) {
		header.classList.add(headerScrolled)

	}
	else if (window.scrollY < 40 && header.classList.contains(headerScrolled)) {
		header.classList.remove(headerScrolled);
	}
})