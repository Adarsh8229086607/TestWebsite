document.addEventListener("DOMContentLoaded", function () {
  const signupButton = document.getElementById("singup"); 
  const errorMessage = document.getElementById("error");
  const successMessage = document.getElementById("successful");

  if (signupButton) {
    signupButton.addEventListener("click", function (event) {
      event.preventDefault(); 
     
      errorMessage.textContent = "";
      successMessage.textContent = "";

      const firstName = document.getElementById("firstname").value.trim();
      const lastName = document.getElementById("lastname").value.trim();
      const birthday = document.getElementById("birthday").value.trim();
      const mobileEmail = document.getElementById("mobile-email").value.trim();
      const password = document.getElementById("password").value.trim();

      const genderRadios = document.getElementsByName("gender");
      let selectedGender = "";
      for (const radio of genderRadios) {
        if (radio.checked) {
          selectedGender = radio.value;
          break;
        }
      }

      if (!firstName || !lastName || !birthday || !mobileEmail || !password || !selectedGender) {
        errorMessage.textContent = "Please fill all the required fields.";
      } else {
        localStorage.setItem("mobileEmail", mobileEmail);
        localStorage.setItem("password", password);
        successMessage.textContent = "Registered successfully.";
      }
    });
  }
});