const passwordOutput = document.getElementById("passwordOutput");
const lengthInput = document.getElementById("lengthInput");
const uppercase = document.getElementById("uppercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const generateBtn = document.getElementById("generateBtn");

generateBtn.addEventListener("click", generatePassword);

function generatePassword() {
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const nums = "0123456789";
    const syms = "!@#$%^&*";

    let chars = lower;
    if (uppercase.checked) chars += upper;
    if (numbers.checked) chars += nums;
    if (symbols.checked) chars += syms;

    const length = Number(lengthInput.value);
    let password = "";

    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * chars.length);
        password += chars[index];
    }

    passwordOutput.textContent = password;
}
