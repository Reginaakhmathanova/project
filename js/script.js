'use strict'

document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал корректно')

    const showFormBtns = document.querySelectorAll('.show-form-btn');
    const form = document.querySelector('.login-form');
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
    1. Создаем массив с путями к фоновым изображениям.
    2. Заводим переменную-счётчик для отслеживания текущего индекса.
    3. Получаем элементы: кнопку и блок .info-big.
    4. При каждом клике по кнопке:
       - устанавливаем следующее изображение из массива в качестве фона;
       - увеличиваем счётчик;
       - если счётчик превышает количество изображений, обнуляем его.
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

    /*
    :



        /*
        Алгоритм вывода  ссылок:
        1. Заводим массив объектов с текстом и href.
        2. Получаем элемент <ul>.
        3. Для каждого элемента массива создаём <li> с <a>.
        4. Добавляем в <ul>.
        5. Проверяем в консоли.
        */

        const menuItems = [
        {text: 'Главная', href: '/'},
        {text: 'ЕГЭ/ОГЭ', href: '#'},
        {text: 'Другие направления', href: '#'},
        {text: 'О нас', href: '#'},
        {text: 'Отзывы', href: '#'},
        {text: 'Контакты', href: '#'}
        ];

        const menuList = document.querySelector('.header__nav-inner');

        menuItems.forEach(item => {
            const li = document.createElement('li');
            li.classList.add('header__nav-item');

            const a = document.createElement('a');
            a.href = item.href;
            a.textContent = item.text;

            li.appendChild(a);
            menuList.appendChild(li);
        });

        console.log('Меню сформировано из массива:', menuItems);

    const preloader = document.querySelector('.page_preloade');
    const content = document.querySelector('.content');

    setTimeout(() => {
        preloader.classList.add('visually-hidden');
        content.classList.remove('visually-hidden');

        fetchMenu(); 
    }, 1500);
});

function fetchMenu() {
    fetch('data.json')
        .then(response => {
            if (!response.ok) throw new Error('Ошибка загрузки JSON');
            return response.json();
        })
        .then(data => {
            const menuList = document.querySelector('.header__nav-inner');

            data.forEach(item => {
                const li = document.createElement('li');
                li.classList.add('header__nav-item');

                const a = document.createElement('a');
                a.href = item.href;
                a.textContent = item.text;

                li.appendChild(a);
                menuList.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Ошибка загрузки меню:', error);
        });

});


