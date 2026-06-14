const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", function (e) {
  e.preventDefault();

  document
    .querySelectorAll(".error")
    .forEach((error) => (error.textContent = ""));

  let fullname = document.getElementById("fullname").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let city = document.getElementById("city").value.trim();
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  let valid = true;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10}$/;
  const cityRegex = /^[A-Za-z\s]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

  if (fullname === "") {
    document.getElementById("nameError").textContent = "Full name is required";
    valid = false;
  }

  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Invalid email format";
    valid = false;
  }

  if (!phoneRegex.test(phone)) {
    document.getElementById("phoneError").textContent =
      "Phone number must be 10 digits";
    valid = false;
  }

  if (!cityRegex.test(city)) {
    document.getElementById("cityError").textContent =
      "City must contain only alphabets";
    valid = false;
  }

  if (!passwordRegex.test(password)) {
    document.getElementById("passwordError").textContent =
      "Password must be 8+ chars with letters and numbers";
    valid = false;
  }

  if (password !== confirmPassword) {
    document.getElementById("confirmError").textContent =
      "Passwords do not match";
    valid = false;
  }

  if (valid) {
    const user = {
      fullname,
      email,
      phone,
      city,
      password,
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Signup Successful");

    window.location.href = "signin.html";
  }
});

document.querySelectorAll(".toggle-eye").forEach((icon) => {
  icon.addEventListener("click", () => {
    const input = icon.previousElementSibling;

    if (input.type === "password") {
      input.type = "text";
      icon.classList.replace("fa-eye", "fa-eye-slash");
    } else {
      input.type = "password";
      icon.classList.replace("fa-eye-slash", "fa-eye");
    }
  });
});
