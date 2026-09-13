import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  function toggleFavorite(clubId) {
    setFavorites((currentFavorites) => {
      if (currentFavorites.includes(clubId)) {
        return currentFavorites.filter((id) => id !== clubId);
      }

      return [...currentFavorites, clubId];
    });
  }

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
