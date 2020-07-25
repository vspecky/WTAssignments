const entries = document.getElementById("main");
const table = document.getElementById("reg-table");

const data = "wtassignment2" in localStorage
             ? JSON.parse(localStorage.getItem("wtassignment2"))
             : [];

function fillData() {
    if (!data.length) {
        let noData = document.createElement("h6");
        noData.classList.add("mt-3", "d-flex", "justify-content-center");
        noData.innerText = "No Data";
        entries.appendChild(noData);
        return;
    }

    for (const reg of data) {
        const tr = document.createElement("tr");
    
        const sr = document.createElement("th");
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
}

fillData();