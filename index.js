const showFloorButton = document.getElementById("help-button");
const floorDialog = document.getElementById("floor-dialog");
const bookingDiv = document.querySelector(".avboka");

const bookTableButton = document.getElementById("book");
const avbokaButton = document.getElementById("avboka");

const confirmButton = document.getElementById("confirm");
const cancelButton = document.getElementById("cancel");

const dropdown = document.getElementById("table");

const tables = {
    1 : "Bord 1 | 4 Platser",
    2 : "Bord 2 | 4 Platser",
    3 : "Bord 3 | 4 Platser",
    4 : "Bord 4 | 4 Platser",
    5 : "Bord 5 | 4 Platser",
    6 : "Bord 6 | 4 Platser",
    7 : "Bord 7 | 4 Platser",
    8 : "Bord 8 | 4 Platser",
    9 : "Bord 9 | 4 Platser",
    10 : "Bord 10 | 4 Platser",
    11 : "Bord 11 | 2 Platser",
    12 : "Bord 12 | 2 Platser",
    13 : "Bord 13 | 6 Platser",
    14 : "Bord 14 | 2 Platser",
    15 : "Bord 15 | 2 Platser",
    16 : "Bord 16 | 2 Platser",
}

let bookedTables = [];
let que = [];

function showBookingDiv() {
    bookingDiv.style.display = "flex"
}

function hideBookingDiv() {
    bookingDiv.style.display = "none"
    clearDropdown();
}

function clearDropdown() {
    for (let i = dropdown.options.length - 1; i >= 0; i--) {
        dropdown.remove(i);
    }
}

showFloorButton.addEventListener("click", function(e) {
    floorDialog.showModal();
});

bookTableButton.addEventListener("click", function(e) {
    for (let table in tables) {
        if (!bookedTables.includes(table)) {
            let option = document.createElement("option");
            option.value = table;
            option.text = tables[table];
            dropdown.appendChild(option);
        }
    }

    showBookingDiv();
});

avbokaButton.addEventListener("click", function(e) {
    for (let table in tables) {
        if (bookedTables.includes(table)) {
            let option = document.createElement("option");
            option.value = table;
            option.text = tables[table];
            dropdown.appendChild(option);
        }
    }

    showBookingDiv();
});

confirmButton.addEventListener("click", function(e) {
    const selectedTable = dropdown.options[dropdown.selectedIndex].value;
    
    bookedTables = bookedTables.filter(table => table !== selectedTable);

    hideBookingDiv();
});

cancelButton.addEventListener("click", function(e) {
    hideBookingDiv();
});