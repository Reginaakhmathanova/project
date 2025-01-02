const showFormBtns = document.querySelectorAll('.show-form-btn');
const form = document.querySelector('.login-form');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.login-form__close');
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