const passBox = document.getElementById("passBox");
const rangeInput = document.getElementById("rangeInput");
const lengthDisplay = document.getElementById("length");
const btn = document.getElementById("btn");

// Characters to use in password
const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";

// Update displayed length when slider changes
rangeInput.addEventListener("input", () => {
  lengthDisplay.textContent = rangeInput.value;
});

// Generate password function
function generatePassword() {
  const passwordLength = parseInt(rangeInput.value);
  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  passBox.value = password;
}

// Generate password on button click
btn.addEventListener("click", generatePassword);

// Generate an initial password when page loads
generatePassword();