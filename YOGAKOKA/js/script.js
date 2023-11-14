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

// Открыть модальное окно
document.getElementById("open-modal-btn").addEventListener("click", function() {
    document.getElementById("my-modal").classList.add("open")
})

// Закрыть модальное окно
document.getElementById("close-my-modal-btn").addEventListener("click", function() {
    document.getElementById("my-modal").classList.remove("open")
})

// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("my-modal").classList.remove("open")
    }
});


// поля для модального окна оставить заявку

const chosenNail = document.getElementById('chosen_nail');
const chosenCorporate = document.getElementById('chosen_corporate');

const chosenNailPackets = document.getElementById('chosen_nail_packets');
const chosenCorporatePackets = document.getElementById('chosen_corporate_packets');

const nailGroupRadio = document.getElementById('chosen_group_tr')
const nailGroupPricing = document.getElementById('nail_group');

const nailPersonalRadio = document.getElementById('chosen_personal_tr');
const nailPersonalPricing = document.getElementById('nail_personal');

const corporateBaseRadio = document.getElementById('chosen_corp_base')
const corporateBasePricing = document.getElementById('corporate_base');

const corporateExtendRadio = document.getElementById('chosen_corp_extend');
const corporateExtendPricing = document.getElementById('corporate_extend');

nailGroupRadio.addEventListener('click', function() {
    ToggleRadioControl(nailGroupRadio, nailGroupPricing, nailPersonalRadio, nailPersonalPricing);
});

nailPersonalRadio.addEventListener('click', function() {
    ToggleRadioControl(nailPersonalRadio, nailPersonalPricing, nailGroupRadio, nailGroupPricing);
});

corporateExtendRadio.addEventListener('click', function() {
    ToggleRadioControl(corporateExtendRadio, corporateExtendPricing, corporateBaseRadio, corporateBasePricing);
});

corporateBaseRadio.addEventListener('click', function() {
    ToggleRadioControl(corporateBaseRadio, corporateBasePricing, corporateExtendRadio, corporateExtendPricing);
});

chosenCorporate.addEventListener('click', function() {
    ResetAllRadioControlsState();

    ToggleRadioControl(chosenCorporate, chosenCorporatePackets, chosenNail, chosenNailPackets)
});

chosenNail.addEventListener('click', function() {
    ResetAllRadioControlsState();

    ToggleRadioControl(chosenNail, chosenNailPackets, chosenCorporate, chosenCorporatePackets);
});

function ResetAllRadioControlsState() 
{
    ResetRadioControlState(corporateBaseRadio, corporateBasePricing);
    ResetRadioControlState(corporateExtendRadio, corporateExtendPricing);
    ResetRadioControlState(nailGroupRadio, nailGroupPricing);
    ResetRadioControlState(nailPersonalRadio, nailPersonalPricing);
}

function ResetRadioControlState(elementToResetActivity, elementToResetVisibility)
{
    if (elementToResetActivity.classList.contains('radio-active'))
    {
        elementToResetActivity.classList.toggle('radio-active');
    }
    if (!elementToResetVisibility.classList.contains('p_hidden'))
    {
        elementToResetVisibility.classList.toggle('p_hidden');
    }
}

function ToggleRadioControl(elementToToggleActivity, elementToToggleVisibility, dependentElementToToggleActivity,
    dependentElementToToggleVisibility)
{
    if (elementToToggleVisibility.classList.contains('p_hidden') &&
        !dependentElementToToggleVisibility.classList.contains('p_hidden'))
    {
        dependentElementToToggleActivity.classList.toggle('radio-active');
        dependentElementToToggleVisibility.classList.toggle('p_hidden');
    }

    elementToToggleActivity.classList.toggle('radio-active');
    elementToToggleVisibility.classList.toggle('p_hidden');
}