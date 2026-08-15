const form = document.querySelector("#signup");
const nameInput = document.querySelector("#name");
const phone = document.querySelector("#phone");
const msg = document.querySelector("#error");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = nameInput.Value.trim();
});

function validate({ name, phone }) {
  if (!name) return "please enter your name";
  if (name.length < 2) return "name is short";
  if (!phone) return "phone is required";
  return "";
}

function show(text) {
  msg.textcontent = text;
}

const error = validate({ name, phone });
if (error) {
  show(error);
}
