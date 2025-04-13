function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){
  const lowercasechars = "abcdefghijklmnopqrstuvwxyz";
  const uppercasechars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberchars = "0123456789";
  const symbolchars = "!@#$%&*()_+-=";
  let allowedchars = "";
  let password = "";

  allowedchars += includeLowercase ? lowercasechars : "";
  allowedchars += includeUppercase ? uppercasechars : "";
  allowedchars += includeNumbers ? numberchars : "";
  allowedchars += includeSymbols ? symbolchars : "";

  if(length <= 0) return 'Password length must be at least 1.';
  if(allowedchars.length === 0) return 'Select at least one character set.';

  for(let i = 0; i < length; i++){
    const randomIndex = Math.floor(Math.random() * allowedchars.length);
    password += allowedchars[randomIndex];
  }
  return password;
}

document.getElementById("passwordForm").addEventListener("submit", function(e){
  e.preventDefault();

  const length = parseInt(document.getElementById("length").value);
  const includeLowercase = document.getElementById("lowercase").checked;
  const includeUppercase = document.getElementById("uppercase").checked;
  const includeNumbers = document.getElementById("numbers").checked;
  const includeSymbols = document.getElementById("symbols").checked;

  const password = generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
  document.getElementById("result").textContent = password;
});
