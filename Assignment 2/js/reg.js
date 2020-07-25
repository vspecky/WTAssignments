const form = document.getElementById("reg-form");
const emailInp = document.getElementById("email");
const nameInp = document.getElementById("name");
const phoneInp = document.getElementById("phone");
const occInp = document.getElementById("occupation");
const notif = document.getElementById("notif");

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

    const data = "wtassignment2" in localStorage
                 ? JSON.parse(localStorage.getItem('wtassignment2'))
                 : [];

    data.push({
        id: data.length + 1,
        email: emailInp.value,
        phone: phoneInp.value,
        name: nameInp.value,
        occ: occInp.value
    });

    localStorage.setItem('wtassignment2', JSON.stringify(data));

    emailInp.value = '';
    phoneInp.value = '';
    nameInp.value = '';

    notif.innerHTML = "Congrats! You are successfully registered for the event!";
    notif.classList.add("alert-success");
    notif.classList.remove('alert-danger');
})