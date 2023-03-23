// hamburger menu
const hamburgerIcon = document.getElementById("icon-toggle");

hamburgerIcon.addEventListener("click", () => {
    const menu = document.getElementById("menu");
    const overlay = document.getElementById("overlay");
    const icon_mark = "xmark";
    const body = document.body;
    
    body.classList.toggle('active');
    overlay.classList.toggle("active");
    menu.classList.toggle("active");
    hamburgerIcon.classList.toggle(`fa-${icon_mark}`);
});
// how to add the class active when I scroll in that section with javascript

window.onload = function() {
    // Get the current URL path
    let path = window.location.pathname;
  
    // Set the active class for the matching link
    document.querySelectorAll(`nav a[href="${path}"]`)[0].classList.add('active');
}

let navLinks = document.querySelectorAll('.menu__link');

for (i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', function() {
    // Remove the active class from all links
    for (j = 0; j < navLinks.length; j++) {
      navLinks[j].classList.remove('active');
    }
    // Add the active class to the clicked link
    this.classList.add('active');
  });
}
// ==============
// validate form input
const input = document.querySelector('input[type="email"]');
const iconChecked = document.getElementById('icon-checked');
let email;

const regularExpression = {
    user: /^[a-zA-Z0-9\_\-]{4,16}$/,
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    password: /^.{4,12}$/,
    address: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phone: /^\d{7,14}$/
}

input.addEventListener('keyup', statusValidation);

function checkValidity() {
    let emailIsValid;

    email = input.value;

    emailIsValid = regularExpression.address.test(email);

    if (email.length <= 0) {
        emailIsValid = null;
    }

    return emailIsValid;
}

function statusValidation() {
    if (checkValidity() === true) {
        toggleStatus(input, true);
        toggleStatus(iconChecked, true);
    }
    else if (checkValidity() === false) {
        toggleStatus(input, false);
        toggleStatus(iconChecked, false);
    }
    else {
        input.classList.remove('valid', 'invalid')
    }
}

function toggleStatus(e, status) {
    if (status) {
        if (e === input) {
            e.classList.remove('invalid');
            e.classList.add('valid');
        } else {
            e.classList.remove('fa-times-circle');
            e.classList.add('fa-check-circle');
        }
    } else {
        if (e === input) {
            e.classList.remove('valid');
            e.classList.add('invalid');
        } else {
            e.classList.remove('fa-check-circle');
            e.classList.add('fa-times-circle');
        }
    }
}

// Cards animations scroll with AOS
AOS.init({
    once: true, // whether animation should happen only once - while scrolling down
    duration: 1200, // values from 0 to 3000, with step 50ms
    delay: 400, // values from 0 to 3000, with step 50ms
});