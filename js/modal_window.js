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