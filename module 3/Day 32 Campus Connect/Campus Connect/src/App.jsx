import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./pages/Home.jsx";
import Clubs from "./pages/Clubs.jsx";
import ClubDetails from "./pages/ClubDetails.jsx";
import Events from "./pages/Event.jsx";
import EventDetails from "./pages/EventDetails.jsx";
import Resources from "./pages/Resources.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";

import { FavoritesProvider } from "./context/FavoritesContext";

function App() {
  return (
    <BrowserRouter>
      <FavoritesProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/clubs/:id" element={<ClubDetails />}></Route>
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
