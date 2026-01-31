document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value.trim();
    const contact = document.getElementById('contact').value.trim();
    const messageElement = document.getElementById('message');

    if (name.length > 0 && validateContact(contact)) {
        messageElement.textContent = 'You have registered on the platform!';
        messageElement.style.color = 'green';
    } else {
        messageElement.textContent = 'Please make sure you have entered the correct name and email address or phone number.';
        messageElement.style.color = 'red';
    }
});

function validateContact(contact) {
    return validateEmail(contact) || validatePhone(contact);
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^\+?[0-9\s-]{7,15}$/;
    return re.test(phone);
}

document.getElementById('cancelButton').addEventListener('click', function() {
    document.getElementById('loginForm').reset();
    document.getElementById('message').textContent = ''; 
});

document.getElementById('backButton').addEventListener('click', function() {
    history.back(); 
});