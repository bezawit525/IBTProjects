function save(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Could not save to localStorage:", error);
  }
}

function load(key, fallback) {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch (error) {
    console.error("Could not load from localStorage:", error);
    return fallback;
  }
}

const DESTINATIONS = [
  {
    id: "d1",
    name: "Addis Ababa",
    region: "Central Ethiopia",
    category: "City",
    description:
      "Ethiopia's bustling capital — a mix of markets, museums, and modern culture set at 2,400m altitude.",
    rating: 4.5,
    price: "Budget–Mid ($10–60/day)",
    image: "addis-ababa",
  },
  {
    id: "d2",
    name: "Lalibela",
    region: "Amhara Region",
    category: "Historical",
    description:
      "Home to 11 medieval rock-hewn churches carved directly into the earth — a UNESCO World Heritage Site.",
    rating: 4.9,
    price: "Mid ($30–80/day)",
    image: "lalibela",
  },
  {
    id: "d3",
    name: "Gondar",
    region: "Amhara Region",
    category: "Historical",
    description:
      "The 'Camelot of Africa' — famous for its 17th-century castles and the Royal Enclosure.",
    rating: 4.6,
    price: "Budget–Mid ($15–50/day)",
    image: "gondar",
  },
  {
    id: "d4",
    name: "Axum",
    region: "Tigray Region",
    category: "Historical",
    description:
      "Ancient capital of the Aksumite Empire, known for towering obelisks and the legend of the Ark of the Covenant.",
    rating: 4.7,
    price: "Budget–Mid ($15–50/day)",
    image: "axum",
  },
  {
    id: "d5",
    name: "Bahir Dar",
    region: "Amhara Region",
    category: "Nature",
    description:
      "A lakeside city on Lake Tana, gateway to the Blue Nile Falls and ancient island monasteries.",
    rating: 4.6,
    price: "Budget–Mid ($15–55/day)",
    image: "bahir-dar",
  },
  {
    id: "d6",
    name: "Simien Mountains",
    region: "Amhara Region",
    category: "Adventure",
    description:
      "Dramatic escarpments and jagged peaks, home to the Gelada baboon and Walia ibex. Prime trekking territory.",
    rating: 4.9,
    price: "Mid–High ($40–120/day)",
    image: "simien-mountains",
  },
  {
    id: "d7",
    name: "Danakil Depression",
    region: "Afar Region",
    category: "Adventure",
    description:
      "One of the hottest and most alien landscapes on Earth — sulfur springs, salt flats, and an active volcano.",
    rating: 4.8,
    price: "High ($150–350 trip)",
    image: "danakil-depression",
  },
  {
    id: "d8",
    name: "Harar",
    region: "Harari Region",
    category: "Culture",
    description:
      "A walled city with 82 mosques, colorful markets, and the famous nightly hyena-feeding tradition.",
    rating: 4.5,
    price: "Budget ($10–40/day)",
    image: "harar",
  },
  {
    id: "d9",
    name: "Bale Mountains",
    region: "Oromia Region",
    category: "Nature",
    description:
      "Afro-alpine highlands and dense forest, home to the rare Ethiopian wolf and endless hiking trails.",
    rating: 4.7,
    price: "Mid ($30–90/day)",
    image: "bale-mountains",
  },
  {
    id: "d10",
    name: "Arba Minch",
    region: "SNNPR",
    category: "Nature",
    description:
      "Gateway to Nechisar National Park, with views over the 'Bridge of God' between Lake Abaya and Lake Chamo.",
    rating: 4.4,
    price: "Budget–Mid ($15–50/day)",
    image: "arba-minch",
  },
];

const HOTELS = [
  {
    id: "h1",
    name: "Sheraton Addis",
    city: "Addis Ababa",
    rating: 4.8,
    pricePerNight: 220,
    description:
      "A landmark 5-star hotel with lush gardens in the heart of the capital.",
    amenities: ["Pool", "Spa", "Free Wi-Fi", "Airport shuttle"],
    image: "hotel-addis",
  },
  {
    id: "h2",
    name: "Kuriftu Resort & Spa",
    city: "Bahir Dar",
    rating: 4.6,
    pricePerNight: 140,
    description:
      "Lakeside bungalows on Lake Tana with a private spa and boat dock.",
    amenities: ["Lake view", "Spa", "Restaurant", "Free parking"],
    image: "hotel-bahirdar",
  },
  {
    id: "h3",
    name: "Goha Hotel",
    city: "Gondar",
    rating: 4.3,
    pricePerNight: 90,
    description:
      "Hilltop hotel with panoramic views over Gondar's historic castles.",
    amenities: ["City view", "Restaurant", "Free Wi-Fi"],
    image: "hotel-gondar",
  },
  {
    id: "h4",
    name: "Mezena Hotel",
    city: "Lalibela",
    rating: 4.4,
    pricePerNight: 75,
    description: "Comfortable rooms a short walk from the rock-hewn churches.",
    amenities: ["Free Wi-Fi", "Airport shuttle", "Breakfast included"],
    image: "hotel-lalibela",
  },
  {
    id: "h5",
    name: "Jupiter International Hotel",
    city: "Addis Ababa",
    rating: 4.2,
    pricePerNight: 95,
    description: "Modern business hotel close to Bole International Airport.",
    amenities: ["Gym", "Free Wi-Fi", "Airport shuttle"],
    image: "hotel-jupiter",
  },
  {
    id: "h6",
    name: "Haile Resort",
    city: "Arba Minch",
    rating: 4.5,
    pricePerNight: 110,
    description: "A relaxed resort with views over Lake Abaya and Lake Chamo.",
    amenities: ["Pool", "Lake view", "Restaurant"],
    image: "hotel-arbaminch",
  },
];

const RESTAURANTS = [
  {
    id: "r1",
    name: "Yod Abyssinia",
    city: "Addis Ababa",
    cuisine: "Ethiopian",
    rating: 4.7,
    priceRange: "$$",
    description:
      "Traditional injera, tibs and shiro served with live cultural dance performances.",
    image: "food-injera",
  },
  {
    id: "r2",
    name: "Kategna Restaurant",
    city: "Addis Ababa",
    cuisine: "Ethiopian",
    rating: 4.5,
    priceRange: "$",
    description:
      "Popular local spot for kitfo, doro wat, and vegetarian Ethiopian platters.",
    image: "food-kitfo",
  },
  {
    id: "r3",
    name: "Four Sisters Restaurant",
    city: "Bahir Dar",
    cuisine: "Ethiopian",
    rating: 4.6,
    priceRange: "$",
    description:
      "Family-run restaurant famous for its vegetarian Ethiopian fasting platter.",
    image: "food-vegetarian",
  },
  {
    id: "r4",
    name: "Habesha 2000",
    city: "Gondar",
    cuisine: "Ethiopian",
    rating: 4.4,
    priceRange: "$",
    description:
      "Hearty shiro and tibs in a cozy traditional setting near the Royal Enclosure.",
    image: "food-shiro",
  },
  {
    id: "r5",
    name: "Ben Abeba",
    city: "Lalibela",
    cuisine: "Ethiopian & International",
    rating: 4.8,
    priceRange: "$$",
    description:
      "A striking spiral-shaped restaurant with sweeping valley views and a fusion menu.",
    image: "food-benabeba",
  },
  {
    id: "r6",
    name: "Lucy Restaurant",
    city: "Addis Ababa",
    cuisine: "Ethiopian & International",
    rating: 4.3,
    priceRange: "$$",
    description:
      "Named after the famous fossil, serving classic Ethiopian dishes plus international options.",
    image: "food-lucy",
  },
];

const GUIDES = [
  {
    id: "g1",
    name: "Amanuel Tesfaye",
    location: "Lalibela",
    languages: ["Amharic", "English"],
    experience: 8,
    rating: 4.9,
    specialization: "History",
    pricePerDay: 45,
    image: "guide-1",
  },
  {
    id: "g2",
    name: "Selam Girma",
    location: "Addis Ababa",
    languages: ["Amharic", "English", "French"],
    experience: 6,
    rating: 4.7,
    specialization: "City tours",
    pricePerDay: 35,
    image: "guide-2",
  },
  {
    id: "g3",
    name: "Dawit Alemu",
    location: "Simien Mountains",
    languages: ["Amharic", "English"],
    experience: 10,
    rating: 4.9,
    specialization: "Hiking",
    pricePerDay: 55,
    image: "guide-3",
  },
  {
    id: "g4",
    name: "Hana Bekele",
    location: "Harar",
    languages: ["Amharic", "Harari", "English"],
    experience: 5,
    rating: 4.6,
    specialization: "Culture",
    pricePerDay: 30,
    image: "guide-4",
  },
  {
    id: "g5",
    name: "Yonas Kebede",
    location: "Bale Mountains",
    languages: ["Amharic", "Oromo", "English"],
    experience: 7,
    rating: 4.8,
    specialization: "Wildlife",
    pricePerDay: 50,
    image: "guide-5",
  },
  {
    id: "g6",
    name: "Meron Fikru",
    location: "Gondar",
    languages: ["Amharic", "English"],
    experience: 4,
    rating: 4.5,
    specialization: "Photography",
    pricePerDay: 40,
    image: "guide-6",
  },
];

const TRANSPORTATION = [
  {
    id: "t1",
    type: "Domestic Flights",
    description:
      "Ethiopian Airlines connects Addis Ababa to Lalibela, Axum, Gondar, Bahir Dar and more.",
    price: "$80–180 per flight",
    location: "Nationwide",
  },
  {
    id: "t2",
    type: "Bus",
    description:
      "Selam Bus and Sky Bus offer affordable long-distance coach travel between major cities.",
    price: "$5–20 per trip",
    location: "Nationwide",
  },
  {
    id: "t3",
    type: "Taxi",
    description:
      "Blue-and-white taxis are common in cities; agree on a price before you get in, or ask for the meter.",
    price: "$2–8 per ride",
    location: "City-based",
  },
  {
    id: "t4",
    type: "Ride-hailing",
    description:
      "Apps like Ride and ZayRide operate in Addis Ababa for convenient, fixed-price trips.",
    price: "$1–6 per ride",
    location: "Addis Ababa",
  },
  {
    id: "t5",
    type: "Car Rental",
    description:
      "Self-drive or chauffeur-driven rentals available in Addis Ababa for regional trips.",
    price: "$40–100 per day",
    location: "Addis Ababa",
  },
  {
    id: "t6",
    type: "Private Driver",
    description:
      "Hire a private driver for multi-day regional tours — flexible and comfortable.",
    price: "$60–120 per day",
    location: "Nationwide",
  },
];

const ACTIVITIES = [
  {
    id: "a1",
    name: "Hiking in Simien Mountains",
    location: "Simien Mountains",
    category: "Adventure",
    rating: 4.9,
    description:
      "Multi-day trek through dramatic highland scenery with chances to see Gelada baboons.",
    price: 60,
    duration: "1–5 days",
    image: "act-simien",
  },
  {
    id: "a2",
    name: "Visiting Lalibela Churches",
    location: "Lalibela",
    category: "Historical",
    rating: 4.9,
    description:
      "Guided tour through the 11 rock-hewn churches carved into the earth centuries ago.",
    price: 25,
    duration: "Half day",
    image: "act-lalibela",
  },
  {
    id: "a3",
    name: "Coffee Ceremony Experience",
    location: "Addis Ababa",
    category: "Culture",
    rating: 4.7,
    description:
      "Take part in the traditional Ethiopian coffee ceremony, from roasting to brewing.",
    price: 10,
    duration: "1–2 hours",
    image: "act-coffee",
  },
  {
    id: "a4",
    name: "Lake Tana Boat Trip",
    location: "Bahir Dar",
    category: "Nature",
    rating: 4.6,
    description:
      "Boat out to Lake Tana's island monasteries, some dating back to the 14th century.",
    price: 30,
    duration: "Half day",
    image: "act-laketana",
  },
  {
    id: "a5",
    name: "Camel Trekking",
    location: "Danakil Depression",
    category: "Adventure",
    rating: 4.8,
    description:
      "Cross the salt flats by camel caravan, following the same routes used for centuries.",
    price: 90,
    duration: "1–3 days",
    image: "act-camel",
  },
  {
    id: "a6",
    name: "Wildlife Viewing",
    location: "Bale Mountains",
    category: "Nature",
    rating: 4.7,
    description:
      "Spot the rare Ethiopian wolf and mountain nyala in the afro-alpine highlands.",
    price: 40,
    duration: "Full day",
    image: "act-wildlife",
  },
  {
    id: "a7",
    name: "Cultural Tours of Harar",
    location: "Harar",
    category: "Culture",
    rating: 4.6,
    description:
      "Explore the walled old city, its markets, and the nightly hyena-feeding ritual.",
    price: 20,
    duration: "Half day",
    image: "act-harar",
  },
  {
    id: "a8",
    name: "National Museum Visit",
    location: "Addis Ababa",
    category: "Historical",
    rating: 4.5,
    description:
      "See Lucy — the 3.2-million-year-old hominid fossil — and other archaeological treasures.",
    price: 5,
    duration: "1–2 hours",
    image: "act-museum",
  },
  {
    id: "a9",
    name: "Photography Tour",
    location: "Omo Valley",
    category: "Culture",
    rating: 4.8,
    description:
      "Guided photography expedition through Omo Valley communities and landscapes.",
    price: 70,
    duration: "Full day",
    image: "act-photo",
  },
];

const INITIAL_REVIEWS = [
  {
    id: "rev1",
    name: "Sara M.",
    rating: 5,
    comment:
      "Lalibela left me speechless. The churches are unlike anything else on Earth.",
    destination: "Lalibela",
    date: "2026-03-12",
  },
  {
    id: "rev2",
    name: "James O.",
    rating: 4,
    comment:
      "The Simien Mountains trek was tough but absolutely worth it for the views.",
    destination: "Simien Mountains",
    date: "2026-04-02",
  },
  {
    id: "rev3",
    name: "Bethlehem A.",
    rating: 5,
    comment:
      "The coffee ceremony in Addis was such a warm, welcoming experience.",
    destination: "Addis Ababa",
    date: "2026-01-20",
  },
];

/* Destination map coordinates for the stylized map (percentage positions) */
const MAP_COORDS = {
  d1: { top: "58%", left: "48%" },
  d2: { top: "30%", left: "58%" },
  d3: { top: "22%", left: "48%" },
  d4: { top: "10%", left: "50%" },
  d5: { top: "28%", left: "42%" },
  d6: { top: "16%", left: "44%" },
  d7: { top: "18%", left: "68%" },
  d8: { top: "55%", left: "78%" },
  d9: { top: "68%", left: "56%" },
  d10: { top: "78%", left: "42%" },
};

const state = {
  destinations: DESTINATIONS,
  hotels: HOTELS,
  restaurants: RESTAURANTS,
  guides: GUIDES,
  transportation: TRANSPORTATION,
  activities: ACTIVITIES,
  reviews: load("ee_reviews", INITIAL_REVIEWS),

  favorites: load("ee_favorites", []), // array of destination ids
  tripPlan: load("ee_tripPlan", []), // array of { tripId, type, refId, name, price }

  searchTerm: "",
  category: "all",

  loading: false,
  error: null,

  countryLoading: false,
  countryError: null,
  countryFacts: null,

  modalDestinationId: null,
  selectedMapId: DESTINATIONS[0].id,
  selectedRating: 0,
};

const el = {
  statusBanner: document.getElementById("statusBanner"),
  destinationsGrid: document.getElementById("destinationsGrid"),
  hotelsGrid: document.getElementById("hotelsGrid"),
  restaurantsGrid: document.getElementById("restaurantsGrid"),
  guidesGrid: document.getElementById("guidesGrid"),
  transportGrid: document.getElementById("transportGrid"),
  activitiesGrid: document.getElementById("activitiesGrid"),
  favoritesGrid: document.getElementById("favoritesGrid"),
  tripPlanList: document.getElementById("tripPlanList"),
  tripItemCount: document.getElementById("tripItemCount"),
  tripTotal: document.getElementById("tripTotal"),
  navTripCount: document.getElementById("navTripCount"),
  navFavCount: document.getElementById("navFavCount"),
  reviewsList: document.getElementById("reviewsList"),
  reviewForm: document.getElementById("reviewForm"),
  reviewDestination: document.getElementById("reviewDestination"),
  reviewRating: document.getElementById("reviewRating"),
  filterSearch: document.getElementById("filterSearch"),
  heroSearchForm: document.getElementById("heroSearchForm"),
  heroSearchInput: document.getElementById("heroSearchInput"),
  categoryButtons: document.getElementById("categoryButtons"),
  mapSelect: document.getElementById("mapSelect"),
  mapInfo: document.getElementById("mapInfo"),
  mapVisual: document.getElementById("mapVisual"),
  modalOverlay: document.getElementById("modalOverlay"),
  modalContent: document.getElementById("modalContent"),
  modalClose: document.getElementById("modalClose"),
  countryFacts: document.getElementById("countryFacts"),
  navToggle: document.getElementById("navToggle"),
  mainNav: document.getElementById("mainNav"),
};

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function imgUrl(seed, w, h) {
  return `https://picsum.photos/seed/${encodeURIComponent(seed)}/${w}/${h}`;
}

function starsDisplay(rating) {
  const full = Math.round(rating);
  return "★".repeat(full) + "☆".repeat(5 - full);
}

function findDestination(id) {
  return state.destinations.find((d) => d.id === id);
}

function render() {
  renderStatus();
  renderDestinations();
  renderHotels();
  renderRestaurants();
  renderGuides();
  renderTransportation();
  renderActivities();
  renderMap();
  renderReviews();
  renderTripPlan();
  renderFavorites();
  renderCounts();
}

function renderStatus() {
  if (state.loading) {
    el.statusBanner.className = "status-banner visible";
    el.statusBanner.innerHTML = `
      <div class="status-box loading">Loading Ethiopian travel information…</div>`;
    return;
  }
  if (state.error) {
    el.statusBanner.className = "status-banner visible";
    el.statusBanner.innerHTML = `
      <div class="status-box error">
        <span>${escapeHtml(state.error)}</span>
        <button type="button" id="retryBtn">Retry</button>
      </div>`;
    return;
  }
  el.statusBanner.className = "status-banner";
  el.statusBanner.innerHTML = "";
}

function getFilteredDestinations() {
  const term = state.searchTerm.trim().toLowerCase();
  return state.destinations.filter((d) => {
    const matchesCategory =
      state.category === "all" || d.category === state.category;
    const matchesSearch =
      term === "" ||
      d.name.toLowerCase().includes(term) ||
      d.region.toLowerCase().includes(term) ||
      d.category.toLowerCase().includes(term);
    return matchesCategory && matchesSearch;
  });
}

function renderDestinations() {
  const shown = getFilteredDestinations();

  if (shown.length === 0) {
    el.destinationsGrid.innerHTML = `
      <div class="empty-state">
        <strong>No destinations found.</strong>
        Try another search or category.
      </div>`;
    return;
  }

  el.destinationsGrid.innerHTML = shown
    .map((d) => {
      const isFav = state.favorites.includes(d.id);
      const inTrip = state.tripPlan.some(
        (t) => t.type === "destination" && t.refId === d.id,
      );
      return `
      <article class="card" data-id="${d.id}">
        <div class="card-img-wrap">
          <img src="${imgUrl(d.image, 400, 300)}" alt="${escapeHtml(d.name)}" loading="lazy" />
          <button type="button" class="fav-btn ${isFav ? "active" : ""}"
            data-action="toggle-favorite" data-id="${d.id}"
            aria-label="${isFav ? "Remove from favorites" : "Add to favorites"}">
            ${isFav ? "❤" : "🤍"}
          </button>
          <span class="card-category">${escapeHtml(d.category)}</span>
        </div>
        <div class="card-body">
          <h3>${escapeHtml(d.name)}</h3>
          <p class="card-location">${escapeHtml(d.region)}</p>
          <p class="card-desc">${escapeHtml(d.description)}</p>
          <div class="card-meta">
            <span class="rating">${starsDisplay(d.rating)} <span>${d.rating}</span></span>
            <span class="price-tag">${escapeHtml(d.price)}</span>
          </div>
          <div class="card-actions">
            <button type="button" class="btn-secondary" data-action="view-details" data-id="${d.id}">View Details</button>
            <button type="button" class="btn-primary" data-action="add-trip" data-type="destination" data-id="${d.id}" ${inTrip ? "disabled" : ""}>
              ${inTrip ? "Added ✓" : "Add to Trip"}
            </button>
          </div>
        </div>
      </article>`;
    })
    .join("");
}

function renderHotels() {
  el.hotelsGrid.innerHTML = state.hotels
    .map((h) => {
      const inTrip = state.tripPlan.some(
        (t) => t.type === "hotel" && t.refId === h.id,
      );
      return `
      <article class="card" data-id="${h.id}">
        <div class="card-img-wrap">
          <img src="${imgUrl(h.image, 400, 300)}" alt="${escapeHtml(h.name)}" loading="lazy" />
          <span class="card-category">${escapeHtml(h.city)}</span>
        </div>
        <div class="card-body">
          <h3>${escapeHtml(h.name)}</h3>
          <p class="card-location">${escapeHtml(h.city)}</p>
          <p class="card-desc">${escapeHtml(h.description)}</p>
          <p class="card-desc"><strong>Amenities:</strong> ${h.amenities.map(escapeHtml).join(", ")}</p>
          <div class="card-meta">
            <span class="rating">${starsDisplay(h.rating)} <span>${h.rating}</span></span>
            <span class="price-tag">${h.pricePerNight} ETB/night</span>
          </div>
          <div class="card-actions">
            <button type="button" class="btn-secondary" data-action="view-hotel" data-id="${h.id}">View Hotel</button>
            <button type="button" class="btn-primary" data-action="add-trip" data-type="hotel" data-id="${h.id}" ${inTrip ? "disabled" : ""}>
              ${inTrip ? "Added ✓" : "Add to Trip"}
            </button>
          </div>
        </div>
      </article>`;
    })
    .join("");
}

function renderRestaurants() {
  el.restaurantsGrid.innerHTML = state.restaurants
    .map((r) => {
      const inTrip = state.tripPlan.some(
        (t) => t.type === "restaurant" && t.refId === r.id,
      );
      return `
      <article class="card" data-id="${r.id}">
        <div class="card-img-wrap">
          <img src="${imgUrl(r.image, 400, 300)}" alt="${escapeHtml(r.name)}" loading="lazy" />
          <span class="card-category">${escapeHtml(r.cuisine)}</span>
        </div>
        <div class="card-body">
          <h3>${escapeHtml(r.name)}</h3>
          <p class="card-location">${escapeHtml(r.city)}</p>
          <p class="card-desc">${escapeHtml(r.description)}</p>
          <div class="card-meta">
            <span class="rating">${starsDisplay(r.rating)} <span>${r.rating}</span></span>
            <span class="price-tag">${escapeHtml(r.priceRange)}</span>
          </div>
          <div class="card-actions">
            <button type="button" class="btn-secondary" data-action="view-restaurant" data-id="${r.id}">View Restaurant</button>
            <button type="button" class="btn-primary" data-action="add-trip" data-type="restaurant" data-id="${r.id}" ${inTrip ? "disabled" : ""}>
              ${inTrip ? "Added ✓" : "Add to Trip"}
            </button>
          </div>
        </div>
      </article>`;
    })
    .join("");
}

function renderGuides() {
  el.guidesGrid.innerHTML = state.guides
    .map((g) => {
      const inTrip = state.tripPlan.some(
        (t) => t.type === "guide" && t.refId === g.id,
      );
      return `
      <article class="card" data-id="${g.id}">
        <div class="card-img-wrap">
          <img src="${imgUrl(g.image, 400, 300)}" alt="Portrait of ${escapeHtml(g.name)}" loading="lazy" />
          <span class="card-category">${escapeHtml(g.specialization)}</span>
        </div>
        <div class="card-body">
          <h3>${escapeHtml(g.name)}</h3>
          <p class="card-location">${escapeHtml(g.location)} · ${g.experience} yrs experience</p>
          <p class="card-desc"><strong>Languages:</strong> ${g.languages.map(escapeHtml).join(", ")}</p>
          <div class="card-meta">
            <span class="rating">${starsDisplay(g.rating)} <span>${g.rating}</span></span>
            <span class="price-tag">${g.pricePerDay} ETB/day</span>
          </div>
          <div class="card-actions">
            <button type="button" class="btn-secondary" data-action="view-guide" data-id="${g.id}">View Profile</button>
            <button type="button" class="btn-primary" data-action="add-trip" data-type="guide" data-id="${g.id}" ${inTrip ? "disabled" : ""}>
              ${inTrip ? "Added ✓" : "Add to Trip"}
            </button>
          </div>
        </div>
      </article>`;
    })
    .join("");
}

function renderTransportation() {
  el.transportGrid.innerHTML = state.transportation
    .map(
      (t) => `
    <div class="transport-card">
      <h3>${escapeHtml(t.type)}</h3>
      <p>${escapeHtml(t.description)}</p>
      <p><strong>Where:</strong> ${escapeHtml(t.location)}</p>
      <p class="t-price">${escapeHtml(t.price)}</p>
    </div>`,
    )
    .join("");
}

function renderActivities() {
  el.activitiesGrid.innerHTML = state.activities
    .map((a) => {
      const inTrip = state.tripPlan.some(
        (t) => t.type === "activity" && t.refId === a.id,
      );
      return `
      <article class="card" data-id="${a.id}">
        <div class="card-img-wrap">
          <img src="${imgUrl(a.image, 400, 300)}" alt="${escapeHtml(a.name)}" loading="lazy" />
          <span class="card-category">${escapeHtml(a.category)}</span>
        </div>
        <div class="card-body">
          <h3>${escapeHtml(a.name)}</h3>
          <p class="card-location">${escapeHtml(a.location)} · ${escapeHtml(a.duration)}</p>
          <p class="card-desc">${escapeHtml(a.description)}</p>
          <div class="card-meta">
            <span class="rating">${starsDisplay(a.rating)} <span>${a.rating}</span></span>
            <span class="price-tag">${a.price} ETB</span>
          </div>
          <div class="card-actions">
            <button type="button" class="btn-primary" data-action="add-trip" data-type="activity" data-id="${a.id}" ${inTrip ? "disabled" : ""} style="flex:1">
              ${inTrip ? "Added ✓" : "Add to Trip"}
            </button>
          </div>
        </div>
      </article>`;
    })
    .join("");
}

function renderMap() {
  // populate <select> once (or if options mismatch), then keep it in sync with state
  if (el.mapSelect.options.length !== state.destinations.length) {
    el.mapSelect.innerHTML = state.destinations
      .map((d) => `<option value="${d.id}">${escapeHtml(d.name)}</option>`)
      .join("");
  }
  el.mapSelect.value = state.selectedMapId;

  const dest = findDestination(state.selectedMapId);
  if (dest) {
    el.mapInfo.innerHTML = `
      <h4>${escapeHtml(dest.name)}</h4>
      <p><strong>Region:</strong> ${escapeHtml(dest.region)}</p>
      <p><strong>Category:</strong> ${escapeHtml(dest.category)}</p>
      <p><strong>Rating:</strong> ${starsDisplay(dest.rating)} (${dest.rating})</p>
      <p>${escapeHtml(dest.description)}</p>`;
  }

  el.mapVisual.innerHTML = state.destinations
    .map((d) => {
      const coords = MAP_COORDS[d.id] || { top: "50%", left: "50%" };
      const selected = d.id === state.selectedMapId;
      return `
      <button type="button" class="map-pin ${selected ? "selected" : ""}"
        style="top:${coords.top}; left:${coords.left};"
        data-action="select-map" data-id="${d.id}"
        aria-label="Show ${escapeHtml(d.name)} on map">
        📍<span>${escapeHtml(d.name)}</span>
      </button>`;
    })
    .join("");
}

function renderReviews() {
  // keep the destination <select> in the review form populated
  if (el.reviewDestination.options.length !== state.destinations.length) {
    el.reviewDestination.innerHTML = state.destinations
      .map(
        (d) =>
          `<option value="${escapeHtml(d.name)}">${escapeHtml(d.name)}</option>`,
      )
      .join("");
  }

  if (state.reviews.length === 0) {
    el.reviewsList.innerHTML = `<div class="empty-state"><strong>No reviews yet.</strong> Be the first to share your experience.</div>`;
    return;
  }

  const sorted = [...state.reviews].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );

  el.reviewsList.innerHTML = sorted
    .map(
      (r) => `
    <div class="review-card">
      <div class="review-card-head">
        <strong>${escapeHtml(r.name)}</strong>
        <span class="review-date">${escapeHtml(r.date)}</span>
      </div>
      <p class="review-dest">${escapeHtml(r.destination)}</p>
      <p class="review-stars">${starsDisplay(r.rating)}</p>
      <p class="review-comment">${escapeHtml(r.comment)}</p>
    </div>`,
    )
    .join("");
}

function tripTotalCost() {
  return state.tripPlan.reduce(
    (sum, item) => sum + (Number(item.price) || 0),
    0,
  );
}

function renderTripPlan() {
  if (state.tripPlan.length === 0) {
    el.tripPlanList.innerHTML = `
      <div class="empty-state">
        <strong>Your trip plan is empty.</strong>
        Browse destinations, hotels, restaurants, or activities and click "Add to Trip".
      </div>`;
  } else {
    el.tripPlanList.innerHTML = state.tripPlan
      .map(
        (item) => `
      <div class="trip-item" data-trip-id="${item.tripId}">
        <div class="trip-item-info">
          <strong>${escapeHtml(item.name)}</strong>
          <span class="trip-item-type">${escapeHtml(item.type)}</span>
        </div>
        <div class="trip-item-price">${item.price ? item.price + " ETB" : "—"}</div>
        <button type="button" class="remove-btn" data-action="remove-trip" data-trip-id="${item.tripId}">Remove</button>
      </div>`,
      )
      .join("");
  }

  el.tripItemCount.textContent = state.tripPlan.length;
  el.tripTotal.textContent = `${tripTotalCost().toLocaleString()} ETB`;
}

function renderFavorites() {
  const favDestinations = state.destinations.filter((d) =>
    state.favorites.includes(d.id),
  );

  if (favDestinations.length === 0) {
    el.favoritesGrid.innerHTML = `
      <div class="empty-state">
        <strong>❤️ You haven't saved any favorites yet.</strong>
        Tap the heart icon on any destination to save it here.
      </div>`;
    return;
  }

  el.favoritesGrid.innerHTML = favDestinations
    .map(
      (d) => `
    <article class="card" data-id="${d.id}">
      <div class="card-img-wrap">
        <img src="${imgUrl(d.image, 400, 300)}" alt="${escapeHtml(d.name)}" loading="lazy" />
        <button type="button" class="fav-btn active" data-action="toggle-favorite" data-id="${d.id}" aria-label="Remove from favorites">❤</button>
        <span class="card-category">${escapeHtml(d.category)}</span>
      </div>
      <div class="card-body">
        <h3>${escapeHtml(d.name)}</h3>
        <p class="card-location">${escapeHtml(d.region)}</p>
        <div class="card-meta">
          <span class="rating">${starsDisplay(d.rating)} <span>${d.rating}</span></span>
        </div>
        <div class="card-actions">
          <button type="button" class="btn-secondary" data-action="view-details" data-id="${d.id}">View Details</button>
        </div>
      </div>
    </article>`,
    )
    .join("");
}

function renderCounts() {
  el.navTripCount.textContent = state.tripPlan.length;
  el.navFavCount.textContent = state.favorites.length;
}

function renderModal() {
  if (!state.modalDestinationId) {
    el.modalOverlay.classList.add("hidden");
    el.modalContent.innerHTML = "";
    return;
  }

  const d = findDestination(state.modalDestinationId);
  if (!d) {
    el.modalOverlay.classList.add("hidden");
    return;
  }

  const inTrip = state.tripPlan.some(
    (t) => t.type === "destination" && t.refId === d.id,
  );
  const isFav = state.favorites.includes(d.id);

  el.modalContent.innerHTML = `
    <img class="modal-img" src="${imgUrl(d.image, 700, 400)}" alt="${escapeHtml(d.name)}" />
    <div class="modal-body">
      <h2 id="modalTitle">${escapeHtml(d.name)}</h2>
      <p class="card-location">${escapeHtml(d.region)} · ${escapeHtml(d.category)}</p>
      <div class="card-meta">
        <span class="rating">${starsDisplay(d.rating)} <span>${d.rating}</span></span>
        <span class="price-tag">${escapeHtml(d.price)}</span>
      </div>
      <p class="card-desc">${escapeHtml(d.description)}</p>
      <div class="card-actions">
        <button type="button" class="btn-secondary" data-action="toggle-favorite" data-id="${d.id}">
          ${isFav ? "❤ Remove Favorite" : "🤍 Add to Favorites"}
        </button>
        <button type="button" class="btn-primary" data-action="add-trip" data-type="destination" data-id="${d.id}" ${inTrip ? "disabled" : ""}>
          ${inTrip ? "Added ✓" : "Add to Trip"}
        </button>
      </div>
    </div>`;

  el.modalOverlay.classList.remove("hidden");
}

function addToTrip(type, refId) {
  const alreadyIn = state.tripPlan.some(
    (t) => t.type === type && t.refId === refId,
  );
  if (alreadyIn) return;

  let source, name, price;

  if (type === "destination") {
    source = findDestination(refId);
    name = source ? source.name : "Destination";
    price = 0;
  } else if (type === "hotel") {
    source = state.hotels.find((h) => h.id === refId);
    name = source ? source.name : "Hotel";
    price = source ? source.pricePerNight : 0;
  } else if (type === "restaurant") {
    source = state.restaurants.find((r) => r.id === refId);
    name = source ? source.name : "Restaurant";
    price = 0;
  } else if (type === "guide") {
    source = state.guides.find((g) => g.id === refId);
    name = source ? source.name : "Guide";
    price = source ? source.pricePerDay : 0;
  } else if (type === "activity") {
    source = state.activities.find((a) => a.id === refId);
    name = source ? source.name : "Activity";
    price = source ? source.price : 0;
  }

  if (!source) return;

  state.tripPlan.push({
    tripId: `${type}-${refId}-${Date.now()}`,
    type,
    refId,
    name,
    price,
  });

  save("ee_tripPlan", state.tripPlan);
  render();
}

function removeFromTrip(tripId) {
  state.tripPlan = state.tripPlan.filter((t) => t.tripId !== tripId);
  save("ee_tripPlan", state.tripPlan);
  render();
}

function toggleFavorite(destId) {
  if (state.favorites.includes(destId)) {
    state.favorites = state.favorites.filter((id) => id !== destId);
  } else {
    state.favorites.push(destId); // Set-like push avoids duplicates because of the check above
  }
  save("ee_favorites", state.favorites);
  render();
  if (state.modalDestinationId === destId) renderModal();
}

function validateReviewForm(name, comment, rating) {
  let valid = true;
  const nameErrorEl = document.getElementById("reviewNameError");
  const commentErrorEl = document.getElementById("reviewCommentError");
  const ratingErrorEl = document.getElementById("reviewRatingError");

  nameErrorEl.textContent = "";
  commentErrorEl.textContent = "";
  ratingErrorEl.textContent = "";

  if (name.trim().length < 2) {
    nameErrorEl.textContent = "Name must be at least 2 characters.";
    valid = false;
  }

  if (comment.trim().length < 10) {
    commentErrorEl.textContent = "Comment must be at least 10 characters.";
    valid = false;
  }

  if (!rating || rating < 1) {
    ratingErrorEl.textContent = "Please select a rating.";
    valid = false;
  }

  return valid;
}

function submitReview(e) {
  e.preventDefault();

  const name = document.getElementById("reviewName").value;
  const destination = el.reviewDestination.value;
  const comment = document.getElementById("reviewComment").value;
  const rating = state.selectedRating;

  const isValid = validateReviewForm(name, comment, rating);
  if (!isValid) return;

  const newReview = {
    id: `rev-${Date.now()}`,
    name: name.trim(),
    rating,
    comment: comment.trim(),
    destination,
    date: new Date().toISOString().slice(0, 10),
  };

  state.reviews.push(newReview);
  save("ee_reviews", state.reviews);

  el.reviewForm.reset();
  state.selectedRating = 0;
  updateStarButtons();

  render();

  const successEl = document.getElementById("reviewSuccess");
  successEl.textContent = "Thank you! Your review has been posted.";
  setTimeout(() => {
    successEl.textContent = "";
  }, 4000);
}

function updateStarButtons() {
  const buttons = el.reviewRating.querySelectorAll("button");
  buttons.forEach((btn) => {
    const value = Number(btn.dataset.value);
    btn.classList.toggle("selected", value <= state.selectedRating);
  });
}

async function loadCountryFacts() {
  state.loading = true;
  state.error = null;
  renderStatus();
  el.countryFacts.textContent = "";

  try {
    const response = await fetch(
      "https://restcountries.com/v3.1/name/ethiopia?fields=capital,population,region,currencies,languages",
    );

    if (!response.ok) {
      throw new Error("Failed to load country data");
    }

    const data = await response.json();
    const info = Array.isArray(data) ? data[0] : data;

    state.countryFacts = info;
    state.loading = false;
    state.error = null;

    const capital = info.capital ? info.capital[0] : "Addis Ababa";
    const population = info.population ? info.population.toLocaleString() : "—";
    const languages = info.languages
      ? Object.values(info.languages).join(", ")
      : "—";

    el.countryFacts.textContent = `Live facts — Capital: ${capital} · Population: ${population} · Languages: ${languages}`;

    renderStatus();
  } catch (error) {
    state.loading = false;
    state.error = console.error(error);
    renderStatus();
  }
}

el.navToggle.addEventListener("click", () => {
  const isOpen = el.mainNav.classList.toggle("open");
  el.navToggle.setAttribute("aria-expanded", String(isOpen));
});

el.mainNav.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    el.mainNav.classList.remove("open");
    el.navToggle.setAttribute("aria-expanded", "false");
  }
});

el.heroSearchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  state.searchTerm = el.heroSearchInput.value;
  el.filterSearch.value = state.searchTerm;
  render();
  document
    .getElementById("destinations")
    .scrollIntoView({ behavior: "smooth" });
});

el.filterSearch.addEventListener("input", (e) => {
  state.searchTerm = e.target.value;
  render();
});

el.categoryButtons.addEventListener("click", (e) => {
  const btn = e.target.closest(".cat-btn");
  if (!btn) return;

  state.category = btn.dataset.category;

  el.categoryButtons
    .querySelectorAll(".cat-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");

  render();
});

function handleGridClick(e) {
  const btn = e.target.closest("[data-action]");
  if (!btn) return;

  const action = btn.dataset.action;
  const id = btn.dataset.id;

  if (action === "add-trip") {
    addToTrip(btn.dataset.type, id);
  } else if (action === "toggle-favorite") {
    toggleFavorite(id);
  } else if (
    action === "view-details" ||
    action === "view-hotel" ||
    action === "view-restaurant" ||
    action === "view-guide"
  ) {
    if (action === "view-details") {
      state.modalDestinationId = id;
      renderModal();
    }
  }
}

el.destinationsGrid.addEventListener("click", handleGridClick);
el.hotelsGrid.addEventListener("click", handleGridClick);
el.restaurantsGrid.addEventListener("click", handleGridClick);
el.guidesGrid.addEventListener("click", handleGridClick);
el.activitiesGrid.addEventListener("click", handleGridClick);
el.favoritesGrid.addEventListener("click", handleGridClick);

el.tripPlanList.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-action='remove-trip']");
  if (!btn) return;
  removeFromTrip(btn.dataset.tripId);
});

el.mapSelect.addEventListener("change", (e) => {
  state.selectedMapId = e.target.value;
  renderMap();
});

el.mapVisual.addEventListener("click", (e) => {
  const pin = e.target.closest("[data-action='select-map']");
  if (!pin) return;
  state.selectedMapId = pin.dataset.id;
  renderMap();
});

el.reviewRating.addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-value]");
  if (!btn) return;
  state.selectedRating = Number(btn.dataset.value);
  updateStarButtons();
});

el.reviewForm.addEventListener("submit", submitReview);

el.modalClose.addEventListener("click", () => {
  state.modalDestinationId = null;
  renderModal();
});

el.modalOverlay.addEventListener("click", (e) => {
  if (e.target === el.modalOverlay) {
    state.modalDestinationId = null;
    renderModal();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && state.modalDestinationId) {
    state.modalDestinationId = null;
    renderModal();
  }
});

el.statusBanner.addEventListener("click", (e) => {
  const btn = e.target.closest("#retryBtn");
  if (!btn) return;
  loadCountryFacts();
});

function init() {
  render();
  updateStarButtons();

  loadCountryFacts();
}

init();
