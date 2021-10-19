
"use strict";


document.addEventListener('DOMContentLoaded', () => {


    //Swiper Slider

    function connectionSlider() {
        const profitrolli = document.querySelector('.index-profitable__slider');
        const productItem = document.querySelectorAll('.items-product__slider');

        if (profitrolli) {
            const swiperProfitrolli = new Swiper(profitrolli, {
                loop: true,
                spaceBetween: 30,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 30
                    },
                },
            });
        }

        if (productItem.length > 0) {
            for (let index = 0; index < productItem.length; index++) {
                const element = productItem[index];

                const swiperProduct = new Swiper(element, {
                    loop: true,
                    spaceBetween: 30,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    breakpoints: {
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                            allowTouchMove: true,
                        },
                        490: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        992: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                            allowTouchMove: false,
                        },
                    },
                });
            }
        }
    }
    connectionSlider();

    //=========================================================


    // Phone Click

    function phoneClick() {
        const header = document.querySelector('.header');
        const phoneHeader = document.querySelector('.top-header__tell-header');
        const phoneBody = document.querySelector('.top-header__tell-body');

        const div = document.createElement('div');
        div.classList.add('div-click');

        if (phoneHeader) {
            phoneHeader.addEventListener('click', () => {
                phoneHeader.classList.toggle('_active');
                phoneBody.classList.toggle('_active');

                if (phoneHeader.classList.contains('_active')) {
                    header.appendChild(div);
                } else {
                    div.remove();
                }
            });

            div.addEventListener('click', () => {
                if (phoneHeader.classList.contains('_active')) {
                    phoneHeader.classList.remove('_active');
                    phoneBody.classList.remove('_active');
                    div.remove();
                }
            });
        }
    }

    phoneClick();

    //=====================================================================



    // Burger

    function burgerClick() {
        const burger = document.querySelector('.header__burger');
        const header = document.querySelector('.header');
        const phone = document.querySelector('.top-header__tell');
        const menu = document.querySelector('.bottom-header__nav');
        const body = document.querySelector('body');

        const menuMobile = document.createElement('div');
        menuMobile.classList.add('menu-mobile');

        const menuMobileWrap = document.createElement('div');
        menuMobileWrap.classList.add('menu-mobile__wrapp');

        if (burger) {
            burger.addEventListener('click', () => {
                burger.classList.toggle('_active');
                body.classList.toggle('_active');
                header.classList.toggle('_active');
                menuMobile.classList.toggle('_active');
            });

            if (document.documentElement.clientWidth <= 734) {
                burger.insertAdjacentElement('afterend', menuMobile);
                menuMobile.insertAdjacentElement('beforeend', menuMobileWrap);
                menuMobileWrap.insertAdjacentElement('beforeend', menu);
            }

            if (document.documentElement.clientWidth <= 490) {
                menuMobileWrap.insertAdjacentElement('beforeend', phone);
            }
        }
    }

    burgerClick();


    //===================================================================================



    // Header linck click

    function headerLinckMenuClick() {
        const headerMenuArrom = document.querySelectorAll('.bottom-header__list .fa-arrow-right');
        const headerMenuSecondMenu = document.querySelectorAll('.bottom-header__list-second');
        const menuMobile = document.querySelector('.menu-mobile');

        if (menuMobile) {
            console.log('ppp');

            const menuSecond = document.createElement('div');
            menuSecond.classList.add('menu-second');
            menuMobile.insertAdjacentElement('beforeend', menuSecond);

            const menuSecondHeader = document.createElement('div');
            menuSecondHeader.classList.add('menu-second__header');
            menuSecond.insertAdjacentElement('beforeend', menuSecondHeader);

            const menuSecondArrow = document.createElement('i');
            menuSecondArrow.classList.add('fas');
            menuSecondArrow.classList.add('fa-arrow-left');
            menuSecondHeader.insertAdjacentElement('beforeend', menuSecondArrow);

            const menuSecondText = document.createElement('div');
            menuSecondText.classList.add('menu-second__text');
            menuSecondHeader.insertAdjacentElement('beforeend', menuSecondText);

            for (let index = 0; index < headerMenuArrom.length; index++) {
                const element = headerMenuArrom[index];
                console.log(element);
                element.addEventListener('click', () => {
                    menuSecond.classList.add('_active');
                    menuSecondText.textContent = element.previousElementSibling.textContent;
                    menuSecond.insertAdjacentElement('beforeend', headerMenuSecondMenu[index]);
                });
            }

            if (menuSecondArrow) {
                menuSecondArrow.addEventListener('click', () => {
                    menuSecond.classList.remove('_active');
                    menuSecondArrow.closest('.menu-second__header').nextElementSibling.remove();
                });
            }
        }
    }

    headerLinckMenuClick();



    //===================================================================================




    // Footer Menu Click


    function footerMenuClick() {
        const headerFooterMenu = document.querySelectorAll('.menu-footer__header');
        const headerFooterLink = document.querySelectorAll('.menu-footer__body');

        if (headerFooterMenu) {
            if (document.documentElement.clientWidth <= 768) {
                for (let index = 0; index < headerFooterMenu.length; index++) {
                    const element = headerFooterMenu[index];
                    element.addEventListener('click', () => {
                        headerFooterLink[index].classList.toggle('_active');
                    });
                }
            }
        }
    }

    footerMenuClick();



    //===================================================================================



    //Catalog


    function catalog() {
        const catalog = document.querySelector('.index-catalog__modal');
        const btn = document.querySelector('.index-catalog__btn');
        const btnClose = document.querySelector('.modal-index-catalog__close');
        const body = document.querySelector('body');

        if (catalog) {
            btn.addEventListener('click', () => {
                catalog.classList.add('_active');
                body.classList.add('_active');
            });

            btnClose.addEventListener('click', () => {
                catalog.classList.remove('_active');
                body.classList.remove('_active');
            });
        }
    }

    catalog();




    //=============================================================================================



















});