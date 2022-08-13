'use strict';

const login = document.getElementById('login');
const modal = document.querySelector('.modal');
const hidden = document.querySelector('.hidden');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.btn__close_modal');
const arrow = document.querySelectorAll('.second-screen__row__arrow');
const learnLabe = document.querySelectorAll('.second-screen__row__arrow__learn')
const arrow1Slider = document.querySelector('.arrow1');
const arrow2Slider = document.querySelector('.arrow2');
const slideCentre = document.querySelector('.last-screen__our-team__slider-2');
const slideRight = document.querySelector('.last-screen__our-team__slider-3');
const slideLeft = document.querySelector('.last-screen__our-team__slider-1');
const AllSlides = document.querySelectorAll('.last-screen__our-team__slider');

///////////

login.addEventListener('click', function () {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')

})

closeModal.addEventListener('click', function () {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
})

///////////

arrow.forEach(element => {
    element.addEventListener('click', function (event) {

        const d = event.target.parentNode.firstChild.nextSibling;
        console.log(d.classList.contains('active'));
        if (d.classList.contains('active') === false) {

            d.style.opacity = '100'

            event.target.parentNode.style.boxShadow = 'inset -298px 0 0 0 var(--aqua)'
            event.target.style.transform = 'rotateZ(45deg)';
            d.classList.add('active')
        }
        else if (d.classList.contains('active') === true) {
            d.style.opacity = '0'
            event.target.parentNode.style.boxShadow = 'inset -60px 0 0 0 var(--aqua)'
            event.target.style.transform = 'rotateZ(0deg)';
            d.classList.remove('active')
        };
    });
});

///////////

const rightClick = function () {
    if (curSlide === 2) {
        slideCentre.style.transform = 'translateX(-100%)'
        slideRight.style.transform = 'translateX(-100%)'
        curSlide = curSlide + 1;
    }
    else if (curSlide === 3) {
        curSlide = curSlide - 2;
        slideRight.style.transform = 'translateX(100%)'
        slideLeft.style.transform = 'translateX(100%)'
    }
    else if (curSlide === 1) {
        curSlide = curSlide + 1;
        slideLeft.style.transform = 'translateX(0)'
        slideCentre.style.transform = 'translateX(0)'
    };
};

const leftClick = function () {
    if (curSlide === 2) {
        slideCentre.style.transform = 'translateX(100%)'
        slideLeft.style.transform = 'translateX(100%)'
        curSlide = curSlide - 1;
    }
    else if (curSlide === 1) {
        curSlide = curSlide + 2;
        slideLeft.style.transform = 'translateX(0)'
        slideRight.style.transform = 'translateX(-100%)'
    }
    else if (curSlide === 3) {
        curSlide = curSlide - 1;
        slideCentre.style.transform = 'translateX(0)'
        slideRight.style.transform = 'translateX(0%)'
    };
};

let curSlide = 2;

arrow1Slider.addEventListener('click', leftClick);
arrow2Slider.addEventListener('click', rightClick);
