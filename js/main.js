/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
	navToggle = document.getElementById('nav-toggle'),
	navClose = document.getElementById('nav-close')

/* Menu Show */
/* Validate if constant exist */
if (navToggle) {
	navToggle.addEventListener('click', () => {
		navMenu.classList.add('show-menu')
	})
}

/* Menu Hidden */
/* Validate if constant exist */
if (navClose) {
	navClose.addEventListener('click', () => {
		navMenu.classList.remove('show-menu')
	})
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
	const navMenu = document.getElementById('nav-menu')

	// When we click on each nav__link, we remove tje show-menu class
	navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
	const nav = document.getElementById('header')

	/* if (this.scrollY >= 80) {
		nav.classList.add('blur-header')
	} else {
		nav.classList.remove('blur-header')
	} */

	this.scrollY >= 50
		? nav.classList.add('blur-header')
		: nav.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== SHOW SCROLL UP ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
