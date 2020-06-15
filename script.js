navSlide = () => {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.menu-list');
    const menuList = document.querySelectorAll('.menu-list li');

    menu.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        menuList.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navReveal 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        menu.classList.toggle('toggle');
    });
}

navSlide();

$(function () {
    var header = $("#mynav");
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 200) {
            header.removeClass('nav').addClass('nav2');
        } else {
            header.removeClass('nav2').addClass('nav');
        }
    });
});


navSlide = () => {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.menu-list');
    const menuList = document.querySelectorAll('.menu-list li');

    menu.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        menuList.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navReveal 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        menu.classList.toggle('toggle');
    });
}

navSlide();

$(function () {
    var header = $("#mynav");
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 200) {
            header.removeClass('nav').addClass('nav2');
        } else {
            header.removeClass('nav2').addClass('nav');
        }
    });
});


const curry = f => (...args) =>
    args.length >= f.length ?
    f(...args) :
    curry(f.bind(f, ...args));

const compose = (f, g) => x => f(g(x));
const composeN = (...fns) => (...args) =>
    fns.reverse().
reduce((x, f) => f.apply(f, [].concat(x)), args);


document.addEventListener('DOMContentLoaded', function (event) {
    // array with texts to type in typewriter
    var dataText = ["Hello.", "Namaste.", "This is", "AYUSH KARN !"];

    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
        // chekc if text isn't finished yet
        if (i < (text.length)) {
            // add next character to h1
            document.querySelector(".intro_text").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

            // wait for a while and call this function again for next character
            setTimeout(function () {
                typeWriter(text, i + 1, fnCallback)
            }, 100);
        }
        // text finished, call callback if there is a callback function
        else if (typeof fnCallback == 'function') {
            // call callback after timeout
            setTimeout(fnCallback, 700);
        }
    }
    // start a typewriter animation for a text in the dataText array
    function StartTextAnimation(i) {
        if (typeof dataText[i] == 'undefined') {
            setTimeout(function () {
                StartTextAnimation(0);
            }, 500);
        }
        // check if dataText[i] exists
        if (i < dataText[i].length) {
            // text exists! start typewriter animation
            typeWriter(dataText[i], 0, function () {
                // after callback (and whole text has been animated), start next text
                StartTextAnimation(i + 1);
            });
        }
    }
    // start the text animation
    StartTextAnimation(0);
});
