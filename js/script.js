// Фиксированный header

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        header.classList.add("change");
    } else {
        header.classList.remove("change");
    }
}

);

//бургер меню

$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
        $('.header__menu').toggleClass('menu_color');
    });
});

//accordeons

var qa__wrapper = document.querySelectorAll('.qa__wrapper')

qa__wrapper.forEach(el => {
    el.addEventListener('click', () => {

        var span = el.childNodes[5]
        var btn = el.childNodes[3]
        var qa__wrapper = el
        console.log(el.childNodes)

        if (span.style.maxHeight === `0px`) {
            span.style.maxHeight = span.scrollHeight + 'px';
            span.style.marginTop = "20px";
            btn.style.transform = 'rotate(180deg)'
        } else {
            span.style.maxHeight = 0
            span.style.marginTop = 0;
            btn.style.transform = 'rotate(0deg)'
        }
    })
})


const table_mobile = document.querySelectorAll('.table_mobile')
const content_headers = document.querySelectorAll('.content_header');

content_headers.forEach(tab => {
    tab.addEventListener('click',
        function () {
            var svgs = tab.getElementsByClassName("svg_chevron");
            var svg = svgs[0];

            var parent = tab.parentElement;
            let elems = parent.getElementsByClassName("table_sub_content");

            for (let elem of elems) {
                console.log(elem.textContent);
                if (elem.classList.contains('p_hidden')) {

                    elem.classList.remove('p_hidden');
                    svg.classList.add('svg_rotate');
                    continue;
                }

                elem.classList.add('p_hidden')
                svg.classList.remove('svg_rotate');
            }

        })
}
);

table_mobile.forEach(tab => {
    tab.addEventListener('click',
        function () {
            var svgs = tab.getElementsByClassName("svg_chevron");
            var svg = svgs[0];

            var parent = tab.parentElement;
            let elems = parent.getElementsByClassName("table_content");

            for (let elem of elems) {
                console.log(elem.textContent);
                if (elem.classList.contains('p_hidden')) {
                    elem.classList.remove('p_hidden');
                    svg.classList.add('svg_rotate');
                    continue;
                }

                elem.classList.add('p_hidden')
                svg.classList.remove('svg_rotate');
            }

        })
}
);

