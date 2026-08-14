const form = document.querySelector("#searchForm");
const input = document.querySelector("#countryInput");
const facts = document.querySelector("#facts");

function renderFact(container, label, value) {
  const fact = document.createElement("div");
  fact.className = "fact";

  const title = document.createElement("strong");
  title.textContent = label;

  const text = document.createElement("span");
  text.textContent = value;

  fact.append(title, text);
  container.append(fact);
}

async function showCountry(name) {
  facts.textContent = "";

  const loading = document.createElement("p");
  loading.className = "loading";
  loading.textContent = "Loading...";
  facts.append(loading);

  try {
    const countryName = name.trim();

    if (!countryName) {
      throw new Error("Please enter a country name.");
    }

    const res = await fetch(
      `https://restcountries.com/v3.1/name/${encodeURIComponent(countryName)}`,
    );

    if (!res.ok) {
      throw new Error("Country not found");
    }

    const countries = await res.json();
    const country = countries[0];

    facts.textContent = "";

    const header = document.createElement("div");
    header.className = "country-header";

    const flag = document.createElement("img");
    flag.className = "flag";
    flag.src = country.flags.svg;
    flag.alt = `${country.name.common} flag`;

    const title = document.createElement("h2");
    title.textContent = country.name.common;

    header.append(flag, title);

    const factList = document.createElement("div");
    factList.className = "fact-list";

    const capital = country.capital?.[0] || "N/A";
    const population = country.population.toLocaleString();
    const region = country.region || "N/A";

    const currencies = country.currencies
      ? Object.entries(country.currencies)
          .map(([code, currency]) => {
            return currency.name ? `${currency.name} (${code})` : code;
          })
          .join(", ")
      : "N/A";

    renderFact(factList, "Capital", capital);
    renderFact(factList, "Population", population);
    renderFact(factList, "Region", region);
    renderFact(factList, "Currencies", currencies);

    facts.append(header, factList);
  } catch (err) {
    facts.textContent = "";

    const error = document.createElement("p");
    error.className = "error";
    error.textContent =
      err.message === "Country not found"
        ? "Country not found. Please check the country name and try again."
        : err.message;

    facts.append(error);
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  showCountry(input.value);
});

input.value = "Ethiopia";
showCountry("Ethiopia");
