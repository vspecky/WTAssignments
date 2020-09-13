const form = document.getElementById("reg-form");
const emailInp = document.getElementById("email");
const nameInp = document.getElementById("name");
const phoneInp = document.getElementById("phone");
const occInp = document.getElementById("occupation");
const notif = document.getElementById("notif");

const SUBMIT_URL = "https://wtass4.000webhostapp.com/ass5/create.php";

const areValid = {
    email: false,
    name: false,
    phone: false
}

const dangerify = elem => {
    elem.classList.remove("border-success");
    elem.classList.add("border-danger");
}

const successify = elem => {
    elem.classList.add("border-success");
    elem.classList.remove("border-danger");
}

emailInp.addEventListener('input', _ => {
    if (/^[a-zA-z0-9\.]+@[a-zA-z0-9\.]+\.\w+$/i.test(emailInp.value)) {
        successify(emailInp);
        areValid.email = true;
    } else {
        dangerify(emailInp);
        areValid.email = false;
    }
});

nameInp.addEventListener('input', _ => {
    if (/^\w+ \w+$/i.test(nameInp.value)) {
        successify(nameInp);
        areValid.name = true;
    } else {
        dangerify(nameInp);
        areValid.name = false;
    }
});

phoneInp.addEventListener('input', _ => {
    if (/^\d{3}-?\d{3}-?\d{4}$/.test(phoneInp.value)) {
        successify(phoneInp);
        areValid.phone = true;
    } else {
        dangerify(phoneInp);
        areValid.phone = false;
    }
});

form.addEventListener('submit', e => {
    e.preventDefault();

    if (!Object.values(areValid).every(v => v)) {
        notif.innerHTML = "Please fill correct information in all fields.";
        notif.classList.remove('alert-success');
        notif.classList.add('alert-danger');
        return;
    };

    const name = nameInp.value.split(/ +/);
    const email = emailInp.value;
    const phone = phoneInp.value;
    const occup = occInp.value;

    const xhr = new XMLHttpRequest();
    xhr.open("POST", SUBMIT_URL);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onload = function() {
        notif.innerHTML = "Registered Successfully";
        notif.classList.add("alert-success");
        otif.classList.remove('alert-danger');
    }

    xhr.send(`email=${email}&fname=${name[0]}&lname=${name[1]}&phone=${phone}&occup=${occup}`);

    emailInp.value = '';
    phoneInp.value = '';
    nameInp.value = '';
});