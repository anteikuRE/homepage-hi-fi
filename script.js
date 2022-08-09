'use strict';

const login = document.getElementById('login');
const modal = document.querySelector('.modal');
const hidden = document.querySelector('.hidden');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.btn__close_modal');
const arrow = document.querySelectorAll('.second-screen__row__arrow');
const learnLabe = document.querySelectorAll('.second-screen__row__arrow__learn')

// 

login.addEventListener('click', function () {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')

})

closeModal.addEventListener('click', function () {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
})

// 
// console.log(learnLabe.innerHTML);

// let as = true;

arrow.forEach(element => {
    element.addEventListener('click', function (event) {

        const d = event.target.parentNode.firstChild.nextSibling;
        console.log(d.classList.contains('active'));
        // console.log(d.style.opacity === '0')
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
        }
    })
});
