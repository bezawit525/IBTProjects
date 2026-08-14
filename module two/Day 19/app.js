const items = [];

const form = document.querySelector("#itemForm");
const input = document.querySelector("#itemName");
const message = document.querySelector("#message");
const remaining = document.querySelector("#remaining");
const itemsList = document.querySelector("#itemsList");

function render() {
  itemsList.innerHTML = "";

  const itemsRemaining = items.filter((item) => !item.done).length;

  remaining.textContent = `${itemsRemaining} ${
    itemsRemaining === 1 ? "item" : "items"
  } remaining`;

  if (items.length === 0) {
    itemsList.innerHTML = `
      <li class="empty">
        Your shopping list is empty.
      </li>
    `;

    return;
  }

  items.forEach((item) => {
    const row = document.createElement("li");

    row.dataset.id = item.id;

    row.classList.add("shopping-row");

    if (item.done) {
      row.classList.add("done");
    }

    row.innerHTML = `
      <span class="item-text">
        ${item.name}
      </span>

      <div class="row-buttons">

        <button
          type="button"
          class="mark-button"
          data-action="toggle"
        >
          ${item.done ? "Undo" : "Bought"}
        </button>

        <button
          type="button"
          class="delete-button"
          data-action="remove"
        >
          Remove
        </button>

      </div>
    `;

    itemsList.appendChild(row);
  });
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const itemName = input.value.trim();

  message.textContent = "";

  if (itemName === "") {
    message.textContent = "Please enter a grocery item.";
    return;
  }

  const newItem = {
    id: Date.now(),
    name: itemName,
    done: false,
  };

  items.push(newItem);

  render();

  input.value = "";

  input.focus();
});

itemsList.addEventListener("click", function (event) {
  const button = event.target.closest("button");

  if (!button) {
    return;
  }

  const row = button.closest(".shopping-row");

  if (!row) {
    return;
  }

  const id = Number(row.dataset.id);

  const item = items.find((item) => item.id === id);

  if (!item) {
    return;
  }

  const action = button.dataset.action;

  if (action === "toggle") {
    item.done = !item.done;

    render();
  }

  if (action === "remove") {
    const index = items.findIndex((item) => item.id === id);

    items.splice(index, 1);

    render();
  }
});

render();
