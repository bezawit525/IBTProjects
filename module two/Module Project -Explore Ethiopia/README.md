# 🇪🇹 Explore Ethiopia

## Discover, Plan & Experience Ethiopia

**Explore Ethiopia** is an all-in-one Ethiopian travel and tourism web app built with plain **HTML, CSS, and JavaScript**.

## 1. What It Is

Explore Ethiopia is a single-page travel app where a visitor can:

- Browse Ethiopian **destinations, hotels, restaurants, tour guides, transportation options, and activities**

- **Search and filter** destinations by name, region, or category

- View a **map** section with location details for each destination

- Read and **submit reviews** for destinations

- **Favorite** destinations to save for later

- Build a **trip plan** with a running estimated cost in ETB (Ethiopian Birr)

Everything a user adds favorites, trip items, and reviews is saved in the browser using `localStorage`, so the information remains after a page reload.

## 2. Main Features

| Feature | Location |

| Hero section with search & CTA | Top of the page |

| Destinations grid with search + category filters | `#destinations` |

| Hotels grid | `#hotels` |

| Restaurants grid | `#restaurants` |

| Tour guides grid | `#guides` |

| Transportation options | `#transportation` |

| Activities grid | `#activities` |

| Map with destination picker | `#map` |

| Reviews list + validated review form | `#reviews` |

| Trip planner with live total cost | `#trip-planner` |

| Favorites list | `#favorites` |

| Destination "View Details" modal | Opens over any page |

## 3. Technologies Used

### HTML5

- Semantic elements such as `header`, `nav`, `main`, `section`, `aside`, and `footer`

### CSS3

- CSS variables
- Flexbox
- CSS Grid
- `@media` queries
- Responsive design

### Vanilla JavaScript (ES6+)

- No frameworks
- No build tools
- No backend

The project uses only the three main files a browser needs: **HTML, CSS, and JavaScript**.

## 4. JavaScript Concepts Demonstrated

The project demonstrates several important JavaScript concepts:

- `const` and `let`
- Arrays and objects
- Array methods:
  - `map()`
  - `filter()`
  - `find()`
  - `reduce()`
  - `some()`

- Template literals for building HTML strings
- `async` / `await`
- `fetch()`
- Checking `response.ok`
- A single `state` object as the **single source of truth**
- **State → Render → Events** pattern
- **Event delegation**
- `localStorage`
- `try/catch` error handling
- Custom form validation
- Loading and error states
- Retry functionality

## 5. API Used

The app uses the free, key-free **Open-Meteo Weather API** to display live current weather for the destination selected in the **Map** section.

The weather information includes:

- Temperature
- Weather conditions
- Wind speed

### Example

const url = `https://api.open-meteo.com/v1/forecast?latitude=${dest.lat}&longitude=${dest.lng}&current_weather=true`;

const response = await fetch(url);

if (!response.ok) {
throw new Error("Failed to load weather data");
}

const data = await response.json();

Open-Meteo requires no API key and provides permissive CORS headers, allowing it to work with `fetch()`.

The weather feature is a **non-essential enhancement**:

- Selecting a destination through the dropdown or map pin triggers a fresh weather request.
- While the request is loading, a **"Loading live weather…"** message appears.
- If the request fails, a friendly error message and **Retry** button appear.
- Other features are not affected if the weather request fails.
- Destinations, hotels, restaurants, guides, transportation, activities, reviews, trip planning, and favorites use local demo data stored in `app.js`.

## 6. localStorage Usage

The application stores three main types of information so they survive a page reload:

| Key | Stores

| `ee_favorites` | Array of favorited destination IDs  
 |
| `ee_tripPlan` | Array of trip plan items  
 |
| `ee_reviews` | Array of reviews, including reviews submitted by the user |

The project uses helper functions such as:

save(key, value);
load(key, fallback);

These functions use `try/catch` around `localStorage` so that a storage failure does not crash the application.

## 7. Project Structure

explore-ethiopia/

├── index.html → Semantic HTML scaffold
├── styles.css → Design, layout, components, and responsive rules
├── app.js → State, demo data, rendering, events, and API requests
└── README.md → Project documentation

## 8. How to Run

No installation or build step is required.

### Step 1

Download or clone the `explore-ethiopia` project folder.

### Step 2

Open `index.html` directly in a modern web browser.

You can:

- Double-click `index.html`
- Right-click → **Open with** → Choose your browser

The application loads its demo data immediately and fetches the optional live weather data when needed.

### Optional

If your browser blocks `fetch()` when using a `file://` URL, you can run the project using a local server.

For example:

```bash
npx serve .
```

You can also use the **Live Server** extension in VS Code and open the provided `localhost` address.

---

## 9. Important Limitations

- All destinations, hotels, restaurants, guides, transportation, and activities are **demo/sample data**, not live listings. This is a learning project, not a booking platform.
- The **Map** section is a stylized, hand-built visual rather than a real interactive map/API. It does not require a paid map API key.
- Selecting a destination displays its region, category, rating, description, and marker.
- Guide images use placeholder photography from `picsum.photos` to avoid attaching real people's photos to fictional guide names.
- Destination, most hotel, and restaurant images use photographs sourced from **Wikimedia Commons**, licensed under Creative Commons licenses such as **CC BY / CC BY-SA**.

## 🇪🇹 Project Goal

**Explore Ethiopia** brings destinations, travel information, trip planning, favorites, reviews, activities, and weather information together in one simple and responsive web application.

Built with **HTML, CSS, and JavaScript** to demonstrate practical front-end development concepts while showcasing the beauty and tourism opportunities of Ethiopia.
