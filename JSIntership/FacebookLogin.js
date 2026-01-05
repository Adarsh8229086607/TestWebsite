document.addEventListener("DOMContentLoaded", function () {
  const emailMobile = document.getElementById("emailMobile");
  const password = document.getElementById("password");
  const loginBtn = document.getElementById("login");
  const errorMessage = document.getElementById("error");
  const successMessage = document.getElementById("successful");

  if (loginBtn) {
    loginBtn.addEventListener("click", function (event) {
      event.preventDefault();

      errorMessage.textContent = "";
      successMessage.textContent = "";

      const enteredEmail = emailMobile.value.trim();
      const enteredPassword = password.value.trim();

      const storedEmail = localStorage.getItem("mobileEmail");
      const storedPassword = localStorage.getItem("password");

      if (!enteredEmail || !enteredPassword) {
        errorMessage.textContent = "Please enter both email and password.";
        return;
      }

      if (enteredEmail === storedEmail && enteredPassword === storedPassword) {
        successMessage.textContent = "Login successful!";
      } else {
        errorMessage.textContent = "Invalid email or password.";
      }
    });
  }
});