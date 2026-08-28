const pageTitle = document.querySelector("#page-title");
const cityList = document.querySelector("#city-list");
const eventWrapper = document.querySelector("#event-wrapper");
const eventButton = document.querySelector("#event-button");
const deleteList = document.querySelector("#delete-list");
const itemForm = document.querySelector("#item-form");
const itemInput = document.querySelector("#item-input");
const itemList = document.querySelector("#item-list");

pageTitle.textContent = "DOM & Events Practice";
pageTitle.classList.toggle("highlight");

const cities = ["Addis Ababa", "Mekelle", "Bahir Dar"];

cities.forEach((city) => {
  const cityItem = document.createElement("li");
  cityItem.textContent = city;
  cityList.append(cityItem);
});

eventButton.addEventListener("click", (event) => {
  console.log("Button target:", event.target);
});

eventWrapper.addEventListener("click", (event) => {
  console.log("Wrapper listener:", event.currentTarget);
  console.log("Bubbled target:", event.target);
});

deleteList.addEventListener("click", (event) => {
  if (event.target.matches(".delete-button")) {
    event.target.closest("li").remove();
  }
});

itemForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const itemValue = itemInput.value.trim();

  if (!itemValue) {
    return;
  }

  const newItem = document.createElement("li");
  newItem.textContent = itemValue;
  itemList.append(newItem);

  itemInput.value = "";
});
