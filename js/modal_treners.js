// Открыть модальное окно
document.getElementById("open_modal_trener_1").addEventListener("click", function() {
    document.getElementById("modal_trener_1").classList.add("open")
})

// Закрыть модальное окно
document.getElementById("close-my-modal-trener").addEventListener("click", function() {
    document.getElementById("modal_trener_1").classList.remove("open")
})

// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("modal_trener_1").classList.remove("open")
    }
});

// Закрыть модальное окно при клике вне его
document.querySelector("#modal_trener_1 .modal__box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("modal_trener_1").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});