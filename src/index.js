import './style.css';
import { icon } from './assets/icons.js';

// Use custom chevron icon for select box to adjust positoning via css
const select = document.querySelector('.input-select');
select.style.backgroundImage = `url(${icon.down})`;

// Assign correct images to each validation check
const checks = document.querySelectorAll('.input-check');
checks.forEach((check) => (check.src = icon.check));

// Custom validation on inputs
document
    .querySelectorAll('input')
    .forEach((input) => input.addEventListener('input', () => validateInput(input)));

// Validation function
function validateInput(input) {
    const id = input.id;
    const check = document.querySelector(`#${input.id}-check`);
    const value = input.value.trim();

    let isValid = false;

    if (value === '') {
        input.classList.remove('is-valid');
        input.classList.remove('is-invalid');
        input.setCustomValidity('');
        return;
    }

    if (id === 'email') {
        const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        isValid = pattern.test(value);
        input.setCustomValidity('Email must match name@example.com');
    }

    if (id === 'postal') {
        const pattern = /^[GHJ]\d[ABCEGHJ-NPRSTV-Z] ?\d[ABCEGHJ-NPRSTV-Z]\d$/;
        isValid = pattern.test(value);
        input.setCustomValidity('Postal code must match A2B3C4');
    }

    if (id === 'password') {
        isValid = value.length >= 8;
        input.setCustomValidity('Password must contain minimum 8 characters');
    }

    if (id === 'confirm') {
        const password = document.querySelector('#password');
        if (value !== password.value) {
            isValid = false;
            input.setCustomValidity('Passwords do not match');
        } else {
            isValid = true;
        }
    }

    if (isValid) {
        input.classList.add('is-valid');
        input.classList.remove('is-invalid');
        input.setCustomValidity('');
        check.src = icon.check;
    } else {
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
        check.src = icon.invalid;
    }
}

// Choosing any value on a select field is enough to validate
const selects = document.querySelectorAll('select');
selects.forEach((select) =>
    select.addEventListener('change', () => select.classList.add('is-valid')),
);

// Submit button event handler
const button = document.querySelector('.submit-button');
button.addEventListener('click', (event) => {
    event.preventDefault();
    submit();
});

// Submit function
function submit() {
    const form = document.querySelector('.user-form');
    form.reportValidity();
    if (form.checkValidity()) {
        console.log('success!');
    }
}
