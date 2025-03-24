

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password2 = document.getElementById("password2");
const password = document.getElementById("password");

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
})
const setError = (element , message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error")

    errorDisplay.innerText = message;
    inputControl.classList.add('error')
    inputControl.classList.remove('success')
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password2.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === "") {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if (emailValue === "") {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }
    if (passwordValue === "") {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 characters');
    } else {
        setSuccess(password);
    }

    if (password2Value === "") {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords don't match");
    } else {
        setSuccess(password2);
    }

};

const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};