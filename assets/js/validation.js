function validateContactForm(event) {
    event.preventDefault(); // prevent the form from submitting

    const form = event.target;
    const nameInput = form.querySelector('#name');
    const emailInput = form.querySelector('#email');
    const subjectInput = form.querySelector('#subject');
    const messageInput = form.querySelector('#message');

    let isValid = true;

    if (nameInput.value.trim() === '') {
        nameInput.classList.add('error');
        isValid = false;
    } else {
        nameInput.classList.remove('error');
    }

    if (emailInput.value.trim() === '') {
        emailInput.classList.add('error');
        isValid = false;
    } else {
        emailInput.classList.remove('error');
    }

    if (subjectInput.value.trim() === '') {
        subjectInput.classList.add('error');
        isValid = false;
    } else {
        subjectInput.classList.remove('error');
    }

    if (messageInput.value.trim() === '') {
        messageInput.classList.add('error');
        isValid = false;
    } else {
        messageInput.classList.remove('error');
    }

    if (isValid) {
        form.submit(); // submit the form
    }
}

function attachValidation() {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', validateContactForm);
}