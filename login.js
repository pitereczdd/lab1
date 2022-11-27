const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "1" && password === "1") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        alert("Wrong username or password");
        location.reload(); /* dodany błąd logowania */
    }
})