const signinForm = document.getElementById("signinForm");

signinForm.addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("loginEmailError").textContent = "";
  document.getElementById("loginPasswordError").textContent = "";

  let email = document.getElementById("loginEmail").value.trim();
  let password = document.getElementById("loginPassword").value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let valid = true;
  if (!emailRegex.test(email)) {
    document.getElementById("loginEmailError").textContent =
      "Invalid email format";
    valid = false;
  }
  if (password === "") {
    document.getElementById("loginPasswordError").textContent =
      "Password is required";
    valid = false;
  }

  if (!valid) return;
  const storedUser = JSON.parse(localStorage.getItem("user"));
  if (!storedUser) {
    alert("No account found");
    return;
  }

  if (email !== storedUser.email) {
    document.getElementById("loginEmailError").textContent = "Email not found";
    return;
  }

  if (password !== storedUser.password) {
    document.getElementById("loginPasswordError").textContent =
      "Wrong password";
    return;
  }
  alert("Login Successful");
  localStorage.setItem("loggedIn", "true");
  window.location.href = "landingpage.html";
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
