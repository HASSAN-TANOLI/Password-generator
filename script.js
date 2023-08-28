const btn = document.querySelector(".btn");
const PasswordField = document.getElementById("password");
const copy = document.querySelector(".copy");
btn.addEventListener("click", () => {
  function generateRandomPassword(length) {
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}|;:,.<>?";
    let password = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
    }

    return password;
  }

  const passwordLength = 12; // Change this to the desired length of the password
  const randomPassword = generateRandomPassword(passwordLength);
  console.log(randomPassword);

  PasswordField.value = randomPassword;
});

copy.addEventListener("click", () => {
  console.log("Button clickedd");
  PasswordField.select();
  document.execCommand("copy");
});
