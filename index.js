const showFloorButton = document.getElementById("help-button");
const floorDialog = document.getElementById("floor-dialog");
const bookingDiv = document.querySelector(".booking");

const bookTableButton = document.getElementById("book");
const avbokaButton = document.getElementById("avboka");
const bookingState = document.getElementById("booking-state");

const confirmButton = document.getElementById("confirm");
const cancelButton = document.getElementById("cancel");

let bookedTables = [];
let que = [];

function showBookingDiv() {
    bookingDiv.style.display = "flex"
}

function hideBookingDiv() {
    bookingDiv.style.display = "none"
}

showFloorButton.addEventListener("click", function(e) {
    floorDialog.showModal();
});

bookTableButton.addEventListener("click", function(e) {
    bookingState.textContent = "Boka bord";
    showBookingDiv();
});

avbokaButton.addEventListener("click", function(e) {
    bookingState.textContent = "Avboka bord";
    showBookingDiv();
});

confirmButton.addEventListener("click", function(e) {
    hideBookingDiv();
});

cancelButton.addEventListener("click", function(e) {
    hideBookingDiv();
});