const buttonTrailer = document.querySelector(".button-trailer");
const buttonModalClose = document.querySelector(".modal-close");
const trailer = document.getElementById("trailer");
const modal = document.querySelector(".modal");
const trailerLink = trailer.src;

function modalAlt() {
    modal.classList.toggle("open");
}

buttonTrailer.addEventListener("click", () => {
    modalAlt();
    trailer.setAttribute("src", trailerLink);
});

buttonModalClose.addEventListener("click", () => {
    modalAlt();
    trailer.setAttribute("src", "");
});