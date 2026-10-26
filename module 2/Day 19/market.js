const form = document.querySelector("#add-form");
const name = document.querySelector("#name");
const price = document.querySelector("#price");
const list = document.querySelector("#list");
const totalEl = document.querySelector("#total");
const message = document.querySelector("#message");
const itemCount = document.querySelector("#item-count");
const emptyState = document.querySelector("#empty-state");

function addRow(itemName, itemPrice) {
  const li = document.createElement("li");
  const info = document.createElement("div");
  const nameEl = document.createElement("span");
  const priceEl = document.createElement("span");
  const boughtButton = document.createElement("button");
  const deleteButton = document.createElement("button");

  li.classList.add("shopping-item");
  info.classList.add("item-info");
  nameEl.classList.add("item-name");
  priceEl.classList.add("item-price");
  boughtButton.classList.add("buy-button");
  deleteButton.classList.add("delete-button");

  nameEl.textContent = itemName;
  priceEl.textContent = `${itemPrice.toFixed(2)} ETB`;
  boughtButton.textContent = "Bought";
  deleteButton.textContent = "Remove";

  boughtButton.type = "button";
  deleteButton.type = "button";

  li.dataset.price = itemPrice;

  info.append(nameEl, priceEl);
  li.append(info, boughtButton, deleteButton);
  list.append(li);

  updateListStatus();
}

function updateTotal() {
  let total = 0;

  list.querySelectorAll("li").forEach((item) => {
    total += Number(item.dataset.price);
  });

  totalEl.textContent = total.toFixed(2);
}

function updateListStatus() {
  const amount = list.children.length;

  emptyState.hidden = amount !== 0;

  if (amount === 1) {
    itemCount.textContent = "1 item";
  } else {
    itemCount.textContent = `${amount} items`;
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const n = name.value.trim();
  const p = Number(price.value);

  if (!n || !price.value.trim() || !Number.isFinite(p) || p <= 0) {
    message.textContent = "Please enter an item name and a valid price.";
    return;
  }

  addRow(n, p);
  form.reset();
  message.textContent = "";
  updateTotal();
});

list.addEventListener("click", (e) => {
  const row = e.target.closest("li");

  if (!row) {
    return;
  }

  if (e.target.matches(".delete-button")) {
    row.remove();
    updateTotal();
    updateListStatus();
  } else if (e.target.matches(".buy-button")) {
    row.classList.toggle("bought");
  }
});

updateTotal();
updateListStatus();
