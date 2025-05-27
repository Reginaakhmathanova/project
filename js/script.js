'use strict'

document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал корректно')
});

const showFormBtns = document.querySelectorAll('.show-form-btn');
const form = document.querySelector('.login');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.login__close');
const mobileMenu = document.querySelector('.header__nav');
const mobileMenuBtn = document.querySelector('.menu-btn');
const body = document.body;


function showForm() {
    form.classList.remove('visually-hidden');
    overlay.classList.remove('visually-hidden');
    form.classList.add('visible');
    overlay.classList.add('visible');
    body.style.overflow = 'hidden';
}

function hideForm() {
    form.classList.remove('visible');
    overlay.classList.remove('visible');
    setTimeout(() => {
        form.classList.add('visually-hidden');
        overlay.classList.add('visually-hidden');
        body.style.overflow = '';
    }, 300);
}

showFormBtns.forEach((btn) => {
    btn.addEventListener('click', showForm);
});

function changeForm (){
    mobileMenu.classList.toggle('menu-show');
}

overlay.addEventListener('click', hideForm);
closeBtn.addEventListener('click', hideForm);
mobileMenuBtn.addEventListener('click', changeForm);

/*
Алгоритм смены фона:
Заранее создать массив с путями к фоновым изображениям.

Установить начальный индекс изображения (currentIndex = 0).

Найти на странице кнопку по ID changeBackgroundBtn.

Найти HTML-элемент с классом info-big, в котором будет меняться фон.

Назначить обработчик события click на кнопку:

    Установить фоновое изображение в элемент .info-big из массива по текущему индексу.

    Установить стиль backgroundSize в значение cover.

    Установить стиль backgroundPosition в значение center.

    Увеличить индекс currentIndex на 1.

    Если индекс стал равен длине массива, сбросить его в 0 (чтобы зациклить смену изображений).
*/

const backgroundImages = [
    '../images/bg1.png',
    '../images/bg2.png',
    '../images/emoji_bg.webp',
];

let currentIndex = 0;

const button = document.getElementById('changeBackgroundBtn');
const section = document.querySelector('.info-big');

button.addEventListener('click', () => {
    section.style.backgroundImage = `url(${backgroundImages[currentIndex]})`;
    section.style.backgroundSize = 'cover';
    section.style.backgroundPosition = 'center';

    currentIndex = (currentIndex + 1) % backgroundImages.length;
});
