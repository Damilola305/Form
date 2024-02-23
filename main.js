document.addEventListener("DOMContentLoaded", function () {
  let registrationForm = document.getElementById("registration");
  const SuccessAlert = document.getElementById("loginSuccessAlert");
  const rrorAlert = document.getElementById("errorAlert");
  registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();
    resetErrorMessages();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const phonenumber = document.getElementById("phonenumber").value;
    const username = document.getElementById("username").value;
    const profession = document.getElementById("profession").value;
    const address = document.getElementById("address").value;
    if (
      !validateForm(
        name,
        email,
        password,
        phonenumber,
        username,
        profession,
        address
      )
    ) {
      showErrorAlert(
        "Registration failed please fill in all necessary information"
      );
    } else {
      const user = {
        name,
        email,
        password,
        phonenumber,
        username,
        profession,
        address,
      };
      saveUserToLocalStorage(user);
      showSuccessAlert("Registration Successful");
      registrationForm.reset();
    }
  });

  function saveUserToLocalStorage(user) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    if (!Array.isArray(users)) {
      users = [];
    }
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
  }
  // input validation
  function validateForm(
    name,
    email,
    password,
    phonenumber,
    username,
    profession,
    address
  ) {
    let isValid = true;
    // function to display error messages
    function showError(elementId, message) {
      const errorElement = document.getElementById(elementId + "Error");
      errorElement.textContent = message;
      isValid = false;
    }

    if (!name.trim()) {
      showError("name", "please enter your name");
    }
    if (!email.trim()) {
      showError("email", "please enter your email");
    }
    if (!password.trim()) {
      showError("password", "please enter your password");
    }
    if (!phonenumber.trim()) {
      showError("phonenumber", "please enter your phonenumber");
    }
    if (!username.trim()) {
      showError("username", "please enter your username");
    }
    if (!profession.trim()) {
      showError("profession", "please enter your profession");
    }
    if (!address.trim()) {
      showError("address", "please enter your address");
    }
    return isValid;
  }

  function resetErrorMessages() {
    const errorElements = document.querySelectorAll(".errorMessage");
    errorElements.forEach(function (element) {
      element.textContent = " ";
    });
  }
  function showSuccessAlert(message) {
    hideAlert();
    SuccessAlert.textContent = message;
    SuccessAlert.style.display = "block";
    SuccessAlert.style.backgroundColor = "#90EE90";
    SuccessAlert.style.color = "white";
    setTimeout(function () {
      SuccessAlert.style.display = "none";
    }, 10000);
  }
  function showErrorAlert(message) {
    hideAlert();
    rrorAlert.textContent = message;
    rrorAlert.style.display = "block";
    rrorAlert.style.backgroundColor = "red";
    rrorAlert.style.color = "white";
    rrorAlert.style.width = "95%";
    rrorAlert.style.height = "45px";
    rrorAlert.style.borderRadius = "2px";
    rrorAlert.style.marginBottom = '10px'
    rrorAlert.style.padding = '6px'
    setTimeout(function () {
      rrorAlert.style.display = "none";
    }, 10000);
  }

  function hideAlert() {
    SuccessAlert.style.display = "none";
    rrorAlert.style.display = "none";
  }
});
