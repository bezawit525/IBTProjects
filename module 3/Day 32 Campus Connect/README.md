# CampusConnect

CampusConnect is a React-based student community portal that helps students discover campus clubs, upcoming events, and useful student resources in one place.

## Features

- Home page with featured events and popular clubs
- Campus clubs listing
- Club search
- Club category filtering
- Club details page
- Favorite clubs
- Upcoming events
- Dynamic event details pages
- Student resources
- About page
- 404 Not Found page
- Responsive design

## React Concepts Demonstrated

- JSX
- Functional components
- Component composition
- Reusable components
- Props
- Children props
- `useState`
- `useEffect`
- Event handling
- Conditional rendering
- Rendering lists with `map()`
- Key props
- Controlled inputs
- Search and filtering
- Loading and error states
- React Router
- `BrowserRouter`
- `Routes`
- `Route`
- `Link`
- `NavLink`
- `useParams`
- `useNavigate`
- Dynamic routes
- 404 route
- Context API
- `createContext`
- `useContext`

## Technologies

- React
- JavaScript
- React Router
- CSS
- Vite

## Project Structure

```text
src/
├── components/
│   ├── Navbar/
│   │   └── Navbar.jsx
│   ├── Footer/
│   │   └── Footer.jsx
│   ├── ClubCard/
│   │   └── ClubCard.jsx
│   ├── EventCard/
│   │   └── EventCard.jsx
│   └── ResourceCard/
│       └── ResourceCard.jsx
│
├── context/
│   └── FavoritesContext.jsx
│
├── data/
│   └── data.js
│
├── pages/
│   ├── Home/
│   │   └── Home.jsx
│   ├── Clubs/
│   │   └── Clubs.jsx
│   ├── ClubDetails/
│   │   └── ClubDetails.jsx
│   ├── Events/
│   │   └── Events.jsx
│   ├── EventDetails/
│   │   └── EventDetails.jsx
│   ├── Resources/
│   │   └── Resources.jsx
│   ├── About/
│   │   └── About.jsx
│   └── NotFound/
│       └── NotFound.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

## Installation

Clone the repository and install the dependencies:

```bash
npm install
```

## Run the Project

Start the development server:

```bash
npm run dev
```

Then open the local URL shown in the terminal.

## Build

To create a production build:

```bash
npm run build
```

## Project Pages

- `/` — Home
- `/clubs` — Clubs
- `/clubs/:id` — Club Details
- `/events` — Events
- `/events/:id` — Event Details
- `/resources` — Resources
- `/about` — About
- `*` — 404 Not Found

## Live Demo

Add your deployed website URL here.

## Author

Bezawit Hayalu
Built as a React project for modern React development.
