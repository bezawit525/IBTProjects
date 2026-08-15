const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const error = document.getElementById("error");
const signupList = document.getElementById("signupList");

const PHONE = /^(?:\+251|0)9\d{8}$/;

function validate(name, phone) {
  if (name.trim().length < 2) {
    return "Enter your full name.";
  }

  if (!PHONE.test(phone)) {
    return "Enter a valid Ethiopian phone number.";
  }

  return "";
}

function loadSignups() {
  try {
    const data = localStorage.getItem("signups");

    if (data === null) {
      return [];
    }

    const signups = JSON.parse(data);

    if (!Array.isArray(signups)) {
      return [];
    }

    return signups;
  } catch {
    return [];
  }
}

function saveSignups(signups) {
  localStorage.setItem("signups", JSON.stringify(signups));
}

function displaySignups() {
  const signups = loadSignups();

  signupList.textContent = "";

  signups.forEach((signup) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${signup.name} - ${signup.phone}`;
    signupList.appendChild(listItem);
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();

  const message = validate(name, phone);

  error.textContent = message;

  if (message !== "") {
    return;
  }

  const signups = loadSignups();

  signups.push({
    name: name,
    phone: phone,
  });

  saveSignups(signups);

  form.reset();

  displaySignups();
});

displaySignups();
