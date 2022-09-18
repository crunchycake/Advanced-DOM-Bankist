'use strict'

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.btn--close-modal')
const btnsOpenModal = document.querySelectorAll('.btn--show-modal')

const openModal = function () {
    e.preventDefault();
	modal.classList.remove('hidden')
	overlay.classList.remove('hidden')
}

const closeModal = function () {
	modal.classList.add('hidden')
	overlay.classList.add('hidden')
}

btnsOpenModal.forEach  (btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', function (e) {
	if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
		closeModal()
	}
})


console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
const header = document.querySelector('.header')
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);


console.log(document.getElementsByClassName('btn'))


// Creating and inserting elements


const message = document.createElement('div')
message.classList.add('cookie-message');
// message.textContent = 'We used cookied for improved functionality and analytics';
message.innerHTML = 'We used cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// on top
// header.prepend(message);
// bottom
header.append(message);

// before and after

// eader.before(message)
// header.after(message)


// Delete Elements 

document.querySelector('.btn--close-cookie').addEventListener('click', function () {
    message.remove();
})


// Styles

message.style.backgroundColor = '#37383d';
message.style.width = '120%';

 message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

 document.documentElement.style.setProperty('--color-primary', 'orangered');


// Attributes

const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.designer);

// pobieranie atrybutu
console.log(logo.getAttribute('designer'));

// logo.setAttribute('company', 'Bankist');




const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function(e) {
    const s1coords = section1.getBoundingClientRect();
    console.log(s1coords);

    console.log(e.target.getBoundingClientRect());

    console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

    console.log('height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth);
// --------------------------------------------------------
    // Scrolling
    // window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset);

    // window.scrollTo({
    //     left: s1coords.left + window.pageXOffset,
    //     top: s1coords.top + window.pageYOffset,
    //     behavior: 'smooth'
    // });

    section1.scrollIntoView({behavior: 'smooth'});
})