document.getElementById('btn-submit').addEventListener('click', function () {
    const emailField = document.getElementById('email-input');
    const email = emailField.value;

    const passwordField = document.getElementById('password-input');
    const password = passwordField.value;

    if (email === "ghoshjoy@gmail.com" && password === "Secret") {
        window.location.href = "bank.html";
    } else {
        alert('please input correctly');
    }
})