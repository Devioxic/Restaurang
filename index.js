const showFloorButton = document.getElementById("karta");
const floorDialog = document.getElementById("floor-dialog");
const bookingDiv = document.querySelector(".booking");
const queDiv = document.querySelector(".que");
const queAddDiv = document.querySelector(".que-add");

const bookTableButton = document.getElementById("book");
const avbokaButton = document.getElementById("avboka");
const queAddButton = document.getElementById("que-button");

const confirmButton = document.getElementById("confirm");
const cancelButton = document.getElementById("cancel");
const queConfirmButton = document.getElementById("que-add-confirm");

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

function addToQue(name, seats) {
    if (queDiv.classList.contains("hidden")) {
        queDiv.classList.remove("hidden");
    }
    const queList = queDiv.querySelector("ol");

    const li = document.createElement("li");
    const text = document.createTextNode(`${name} | ${seats} Platser`);
    const button = document.createElement("button");

    button.textContent = "X";

    button.addEventListener("click", function(e) {
        queList.removeChild(e.target.parentElement);
        if (queList.children.length === 0) {
            queDiv.classList.add("hidden");
        }
    });

    li.appendChild(text);
    li.appendChild(button);

    queList.appendChild(li);
}

function clearChildren(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function openBookingDiv() {
    if (!queAddDiv.classList.contains("hidden")) {
        queAddDiv.classList.add("hidden");
    }
    bookingDiv.classList.remove("hidden");
}

function hideBookingDiv() {
    bookingDiv.classList.add("hidden");
}

showFloorButton.addEventListener("click", function(e) {
    floorDialog.showModal();
});

bookTableButton.addEventListener("click", function(e) {
    clearChildren(dropdown);
    bookingDiv.querySelector("h2").textContent = "Boka Bord";
    
    for (let table in tables) {
        if (!bookedTables.includes(table)) {
            let option = document.createElement("option");
            option.value = table;
            option.text = tables[table];
            dropdown.appendChild(option);
        }
    }
    
    openBookingDiv();
});

avbokaButton.addEventListener("click", function(e) {
    clearChildren(dropdown);

    bookingDiv.querySelector("h2").textContent = "Avboka Bord";

    for (let table in tables) {
        if (bookedTables.includes(table)) {
            let option = document.createElement("option");
            option.value = table;
            option.text = tables[table];
            dropdown.appendChild(option);
        }
    }

    openBookingDiv();
});

queAddButton.addEventListener("click", function(e) {
    if (queAddDiv.classList.contains("hidden")) {
        if (!bookingDiv.classList.contains("hidden")) {
            bookingDiv.classList.add("hidden");
        }
        queAddDiv.classList.remove("hidden");
    } else {
        queAddDiv.classList.add("hidden");
    }
});

confirmButton.addEventListener("click", function(e) {
    const selectedTable = dropdown.options[dropdown.selectedIndex].value;
    const mode = bookingDiv.querySelector("h2").textContent;

    if (mode === "Boka Bord") {
        if (!bookedTables.includes(selectedTable)) {
            bookedTables.push(selectedTable);
        }
    } else {
        if (bookedTables.includes(selectedTable)) {
            bookedTables = bookedTables.filter(table => table !== selectedTable);
        }
    }

    hideBookingDiv();
});

queConfirmButton.addEventListener("click", function(e) {
    const name = queAddDiv.querySelector("input").value;
    const seats = queAddDiv.querySelector("select").value;

    if (!name || !seats) {
        return;
    }

    addToQue(name, seats);

    queAddDiv.classList.add("hidden");
});

cancelButton.addEventListener("click", function(e) {
    hideBookingDiv();
});