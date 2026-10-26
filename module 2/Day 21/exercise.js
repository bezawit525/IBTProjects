const form = document.getElementById("signup");
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const error = document.getElementById("error");
const count = document.getElementById("count");
const themeToggle = document.getElementById("themeToggle");

function save(entries) {
  localStorage.setItem("signups", JSON.stringify(entries));
}

function load() {
  try {
    const data = localStorage.getItem("signups");

    if (data === null) {
      return [];
    }

    const entries = JSON.parse(data);

    if (!Array.isArray(entries)) {
      return [];
    }

    return entries;
  } catch {
    return [];
  }
}

function updateCount() {
  const entries = load();
  count.textContent = `${entries.length} people have signed up.`;
}

function restoreTheme() {
  const theme = localStorage.getItem("theme");

  if (theme === "dark") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  }
}

themeToggle.addEventListener("click", () => {
  const isDark = document.body.style.backgroundColor === "black";

  if (isDark) {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    localStorage.setItem("theme", "light");
  } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    localStorage.setItem("theme", "dark");
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();

  error.textContent = "";

  if (name.length < 2) {
    error.textContent = "Name must be at least 2 characters.";
    return;
  }

  const ethiopianPhoneRegex = /^(09\d{8}|\+2519\d{8})$/;

  if (!ethiopianPhoneRegex.test(phone)) {
    error.textContent = "Please enter a valid Ethiopian phone number.";
    return;
  }

  const entries = load();

  entries.push({
    name: name,
    phone: phone,
  });

  save(entries);

  form.reset();

  updateCount();
});

restoreTheme();
updateCount();
