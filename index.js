const showFloorButton = document.getElementById("karta");
const floorDialog = document.getElementById("floor-dialog");
const avbokaDiv = document.querySelector(".avboka");
const bookTableDiv = document.querySelector(".booking");

const bookTableButton = document.getElementById("book");
const avbokaButton = document.getElementById("avboka");

const confirmButton = document.getElementById("confirm");
const cancelButton = document.getElementById("cancel");
const bookingAccept = document.getElementById("booking-accept");

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
let availableTables = [];
let que = [];

function showErrorDialog(message) {

}

function isTableAvailable(seats, isOut) { // Only returns boolean if false, otherwise returns table number
    console.log(typeof seats);
    console.log(typeof availableTables[0]);
    if (isOut) {
        if (seats <= 4) {
            for (let i = 1; i <= 6; i++) {
                if (availableTables.includes(i)) {
                    return i;
                }
            }
            return false;
        } else {
            return false;
        }
    } else {
        if (seats == 6) {
            if (availableTables.includes(13)) {
                return 13;
            } else {
                return false;
            }
        } else if (seats == 4) {
            for (let i = 7; i <= 10; i++) {
                if (availableTables.includes(i)) {
                    return i;
                }
            }
            return false;
        } else if (seats == 2) {
            for (let i = 7; i <= 16; i++) {
                if (i == 13) {
                    continue
                }
                if (availableTables.includes(i)) {
                    return i;
                }
            }
            return false;
        }
    }
}

function clearChildren(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function toggleAvbokaDiv() {
    avbokaDiv.classList.toggle("hidden");
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
    if (!avbokaDiv.classList.contains("hidden")) {
        toggleAvbokaDiv();
    }
    bookTableDiv.classList.toggle("hidden");
});

avbokaButton.addEventListener("click", function(e) {
    clearChildren(dropdown);

    for (let table in tables) {
        if (bookedTables.includes(table)) {
            let option = document.createElement("option");
            option.value = table;
            option.text = tables[table];
            dropdown.appendChild(option);
        }
    }

    if (!bookTableDiv.classList.contains("hidden")) {
        bookTableDiv.classList.toggle("hidden");
    }

    toggleAvbokaDiv();
});

confirmButton.addEventListener("click", function(e) {
    const selectedTable = dropdown.options[dropdown.selectedIndex].value;
    
    bookedTables = bookedTables.filter(table => table !== selectedTable);

    hideBookingDiv();
});

bookingAccept.addEventListener("click", function(e) {
    const seats = document.getElementById("seats").value;
    const isOut = document.getElementById("out").checked;

    if (seats === 6 && isOut) {
        showErrorDialog("Max 4 platser vid uteservering");
    }

    console.log("Seats: " + seats);
    console.log("Is out: " + isOut);

    const table = isTableAvailable(seats, isOut);

    if (table) {
        console.log("Table available: " + table);
    } else {
        console.log("Table not available");
        // Lägg till i kö
    }
});

cancelButton.addEventListener("click", function(e) {
    hideBookingDiv();
});

window.addEventListener("load", function(e) {
    for (let table in tables) {
        availableTables.push(table);
    }
});