const rateButton = document.querySelector("#rateButton");
const rateResult = document.querySelector("#rateResult");

const chainButton = document.querySelector("#chainButton");
const chainResult = document.querySelector("#chainResult");

const errorButton = document.querySelector("#errorButton");
const errorResult = document.querySelector("#errorResult");

const parallelButton = document.querySelector("#parallelButton");
const parallelResult = document.querySelector("#parallelResult");

const stateButton = document.querySelector("#stateButton");
const stateResult = document.querySelector("#stateResult");

async function getUsdToEtbRate() {
  const res = await fetch("https://open.er-api.com/v6/latest/USD");

  if (!res.ok) {
    throw new Error(`HTTP ${res.status}`);
  }

  const data = await res.json();
  return data.rates.ETB;
}

rateButton.addEventListener("click", async () => {
  rateResult.textContent = "Loading...";

  try {
    const rate = await getUsdToEtbRate();
    rateResult.textContent = `1 USD = ${rate} ETB`;
    rateResult.className = "result success";
  } catch (err) {
    rateResult.textContent = `Could not load the exchange rate: ${err.message}`;
    rateResult.className = "result error";
  }
});

async function fetchAndRenderPost() {
  chainResult.textContent = "Loading...";

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }

    const data = await res.json();

    chainResult.textContent = "";

    const title = document.createElement("h3");
    title.textContent = data.title;

    const body = document.createElement("p");
    body.textContent = data.body;

    chainResult.append(title, body);
    chainResult.className = "result success";
  } catch (err) {
    chainResult.textContent = `Could not load the post: ${err.message}`;
    chainResult.className = "result error";
  }
}

chainButton.addEventListener("click", fetchAndRenderPost);

async function testErrors() {
  errorResult.textContent = "Testing deliberately wrong URL...";

  try {
    await fetch("https://this-url-does-not-exist-example.com/data");
    errorResult.textContent = "The request unexpectedly succeeded.";
  } catch (err) {
    errorResult.textContent = `Network error caught: ${err.message}`;
  }

  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts/999999",
    );

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }

    const data = await res.json();
    errorResult.textContent += ` The request succeeded: ${data.title}`;
  } catch (err) {
    errorResult.textContent += ` HTTP error caught: ${err.message}`;
  }

  errorResult.className = "result error";
}

errorButton.addEventListener("click", testErrors);

async function fetchPostsInParallel() {
  parallelResult.textContent = "Loading...";

  try {
    const listResponse = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
    );

    if (!listResponse.ok) {
      throw new Error(`HTTP ${listResponse.status}`);
    }

    const posts = await listResponse.json();
    const firstTwo = posts.slice(0, 2);

    const details = await Promise.all(
      firstTwo.map(async (post) => {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${post.id}`,
        );

        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }

        return res.json();
      }),
    );

    parallelResult.textContent = "";

    details.forEach((post) => {
      const article = document.createElement("article");

      const title = document.createElement("h3");
      title.textContent = post.title;

      const body = document.createElement("p");
      body.textContent = post.body;

      article.append(title, body);
      parallelResult.append(article);
    });

    parallelResult.className = "result success";
  } catch (err) {
    parallelResult.textContent = `Could not load posts: ${err.message}`;
    parallelResult.className = "result error";
  }
}

parallelButton.addEventListener("click", fetchPostsInParallel);

async function testLoadingAndErrorStates() {
  stateResult.textContent = "Loading...";
  stateResult.className = "result loading";

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }

    const data = await res.json();

    stateResult.textContent = `Success: ${data.title}`;
    stateResult.className = "result success";
  } catch (err) {
    stateResult.textContent = "Could not load the data. Try again.";
    stateResult.className = "result error";
  }
}

stateButton.addEventListener("click", testLoadingAndErrorStates);
