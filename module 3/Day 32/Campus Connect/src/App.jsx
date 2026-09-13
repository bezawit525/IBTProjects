import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";

import Home from "./pages/Home/Home.jsx";
import Clubs from "./pages/Clubs/Clubs.jsx";
import ClubDetails from "./pages/ClubDetails/ClubDetails.jsx";
import Events from "./pages/Events/Events.jsx";
import EventDetails from "./pages/EventDetails/EventDetails.jsx";
import Resources from "./pages/Resources/Resources.jsx";
import About from "./pages/About/About.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";

import { FavoritesProvider } from "./Context/FavoritesContext.jsx";

function App() {
  return (
    <BrowserRouter>
      <FavoritesProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/clubs" element={<Clubs />} />

          <Route path="/clubs/:id" element={<ClubDetails />} />

          <Route path="/events" element={<Events />} />

          <Route path="/events/:id" element={<EventDetails />} />

          <Route path="/resources" element={<Resources />} />

          <Route path="/about" element={<About />} />

          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </FavoritesProvider>
    </BrowserRouter>
  );
}

export default App;
