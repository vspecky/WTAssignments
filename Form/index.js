const name = document.getElementById("name");
const email = document.getElementById("email");
const num = document.getElementById("contact");
const bio = document.getElementById("bio");
const skills = document.getElementById("skills");
const achs = document.getElementById("achs");
const pfl = document.getElementById("pfl");

const form = document.getElementById("prof-form");
const notif = document.getElementById('notif');

const success = elem => {
    elem.classList.add('alert-success');
    elem.classList.remove('alert-danger');
}

const fail = elem => {
    elem.classList.add('alert-danger');
    elem.classList.remove('alert-success');
}

form.addEventListener('submit', e => {
    e.preventDefault();

    if (!/^\S+ \S+$/.test(name.value)) {
        fail(notif);
        notif.innerHTML = "Please enter your full name";
        return;
    }

    if (!/^(www\.)?[a-zA-Z0-9\.]+@[a-zA-Z0-9\.]+(\.(org|com|in|ac))+$/.test(email.value)) {
        fail(notif);
        notif.innerHTML = "Please enter a valid email";
        return;
    }

    if (!/^\d{10}$/.test(num.value)) {
        fail(notif);
        notif.innerHTML = "Please enter a 10 digit phone number";
        return;
    }

    if (!/^\w{1, 1000}$/.test(bio.value)) {
        fail(notif);
        notif.innerHTML = "Bio can be Maximum 1000 characters";
    }

    if (!/^\w{1, 1000}$/.test(skills.value)) {
        fail(notif);
        notif.innerHTML = "Skills can be Maximum 1000 characters";
    }

    if (!/^\w{1, 1000}$/.test(achs.value)) {
        fail(notif);
        notif.innerHTML = "Achievements can be Maximum 1000 characters";
    }

    if (!/^(https:\/\/)?(www\.)?[a-zA-Z0-9]+\.(org|com|in)$/.test(pfl.value)) {
        fail(notif);
        notif.innerHTML = "Please enter a valid Portfolio Link";
        return;
    }

    success(notif);
    notif.innerHTML = "Valid form";
});