let charSet = "abcdefghijklmnopqrstuvwxABCDEFGHIJKLMNOPQRSTUVWX";
let numberSet = "0123456789";
let specialCharSet = "!@#$%^&*()";

// all id element received function 
const getElement = (id) => {
  const element = document.getElementById(id);
  return element;
};

// input type range handle 
const handleSlider = (event) => {
  const charCountEl = getElement("char-count");
  charCountEl.innerText = event;
  generatePassword();
};

// input check box handle
const handleCheckbox = () => {
  const numberEl = getElement("number");
  const specialCharEl = getElement("special");

  if (numberEl.checked === true) {
    charSet += "0123456789";
  } else {
    charSet = charSet.replace(/0123456789/g, "");
  }
  if (specialCharEl.checked === true) {
    charSet += "!@#$%^&()";
  } else {
    charSet = charSet.replace(/[^\w ]/g, "");
  }
  generatePassword();
};

// generate Password with button 
const generatePassword = () => {
  const passwordEl = getElement("password");
  
  const charCount = getElement("char-count").innerText;
  // let charToNumber = +charCount
  let password = "";

  for (let i = 0; i < charCount; i++) {
    const randomNumber = Math.floor(Math.random() * charSet.length);
    password += charSet.substring(randomNumber, randomNumber + 1);
  }

  passwordEl.value = password;
};

const handleViewPassword = () => {
  const passwordEl = getElement("password");
  const viewCheck = getElement("view-check");
  const viewIcon = getElement("view-icon");

  if (viewCheck.checked === true) {
    passwordEl.setAttribute("type", "te4xt");
    viewIcon.innerHTML = `<i class="fa-solid fa-eye-slash text-white"></i>`;
  } else {
    passwordEl.setAttribute("type", "password");
    viewIcon.innerHTML = `<i class="fa-solid fa-eye text-white"></i>`;
  }
};

const handleCopy = () => {
  const copyText = getElement("password");
  copyText.select();
  // console.log(copyText.select());
  document.execCommand("copy");
  alert("Password copied to clipboard");
};

// generatePassword();
