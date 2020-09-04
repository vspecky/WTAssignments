const idForm = document.getElementById('id-form');
const rangeForm = document.getElementById('range-form');
const idInp = document.getElementById('get-by-id');
const llInp = document.getElementById('lower-limit');
const ulInp = document.getElementById('upper-limit');
const resTable = document.getElementById('res-table');
const notif = document.getElementById('notif');

const BASE_URL = "https://wtass4.000webhostapp.com/rest/api.php";

const itemKeys = {
    id: "ID",
    short_name: "Short Name",
    name: "Name",
    description: "Description",
    price_small: "Price (Small)",
    price_large: "Price (Large)",
    small_portion_name: "Portion (Small)",
    large_portion_name: "Portion (Large)",
};

const dangerify = (elem, msg) => {
    elem.classList.remove("alert-success");
    elem.classList.add("alert-danger");
    elem.innerHTML = msg;
};

const successify = (elem, msg) => {
    elem.classList.add("alert-success");
    elem.classList.remove("alert-danger");
    elem.innerHTML = msg;
};

function addToTable(data) {
    console.log(data);
    for (const item of data) {
        const heading = document.createElement("h3");
        heading.innerText = item.name;
        const table = document.createElement("table");
        table.classList.add("table");
        const body = document.createElement("tbody");
        for (const key of Object.keys(item)) {
            const tr = document.createElement("tr");
            const th = document.createElement("th");
            th.setAttribute("scope", "row");
            th.innerText = itemKeys[key];

            const td = document.createElement("td");
            td.innerText = item[key];
            
            tr.appendChild(th);
            tr.appendChild(td);
            body.appendChild(tr);
        }

        table.appendChild(body);
        resTable.appendChild(heading);
        resTable.appendChild(table);
        resTable.appendChild(document.createElement("br"));
        resTable.appendChild(document.createElement("br"));
    }
}

function getByID() {
    resTable.innerHTML = "";
    const id = idInp.value;
    idInp.value = "";

    if (isNaN(id)) {
        dangerify(notif, "Please enter a valid numerical ID");
        return;
    }

    fetch(`${BASE_URL}?id=${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.code === "500") {
                dangerify(notif, "Returned a 500: Internal Server Error.");

            } else if (JSON.parse(data.response) === "Not found") {
                dangerify(notif, "No item with that ID found.");

            } else {
                successify(notif, "Successfully fetched data.");
                addToTable([JSON.parse(data.response)]);
            }
        });
}

function getByPriceRange() {
    resTable.innerHTML = "";
    const lower = llInp.value;
    const upper = ulInp.value;
    llInp.value = "";
    ulInp.value = "";

    if (isNaN(lower) || isNaN(upper)) {
        dangerify(notif, "Both lower and upper limits should be valid numbers.");
        return;
    }

    if (Number(lower) > Number(upper)) {
        dangerify(notif, "Lower limit should be smaller than the upper limit.");
        return;
    }

    console.log(lower, upper);

    fetch(`${BASE_URL}?low=${lower}&high=${upper}`)
        .then(res => res.json())
        .then(data => {
            if (data.code === "500") {
                dangerify(notif, "Returned a 500: Internal Server Error.");

            } else if (JSON.parse(data.response) === "Not found") {
                dangerify(notif, "No items within that price range found.");

            } else {
                successify(notif, "Successfully fetched data.");
                addToTable(JSON.parse(data.response));
            }
        });
}

idForm.addEventListener('submit', e => {
    e.preventDefault();
    getByID();
});

rangeForm.addEventListener('submit', e => {
    e.preventDefault();
    getByPriceRange();
})