'use strict';

const login = document.getElementById('login');
const modal = document.querySelector('.modal');
const hidden = document.querySelector('.hidden');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.btn--close-modal');

login.addEventListener('click', function () {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')

})

closeModal.addEventListener('click', function () {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
})