const table = document.getElementById("reg-table");

const data = localStorage.getItem("wtassignment2")
             ? JSON.parse(localStorage.getItem("wtassignment2"))
             : [];

for (const reg of data) {
    const tr = document.createElement("tr");

    const sr = document.createElement("th")
    sr.scope = "row";
    sr.innerText = reg.id;
    tr.appendChild(sr);

    for (const field of [reg.email, reg.name, reg.phone, reg.occ]) {
        const td = document.createElement("td");
        td.innerText = field;
        tr.appendChild(td);
    }

    table.appendChild(tr);
}