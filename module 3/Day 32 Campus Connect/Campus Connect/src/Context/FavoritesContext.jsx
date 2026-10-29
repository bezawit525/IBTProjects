import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  function toggleFavorites(clubId) {
    setFavorites((currentFavorites) => {
      if (currentFavorites.includes(clubId)) {
        return currentFavorites.filter((id) => id !== clubId);
      }
      return [...currentFavorites, clubId];
    });
  }
  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
