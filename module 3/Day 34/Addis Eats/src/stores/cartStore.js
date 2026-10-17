import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set) => ({
      items: [],

      addItem: (dish) =>
        set((state) => ({
          items: [...state.items, dish],
        })),

      remove: (dishId) =>
        set((state) => ({
          items: state.items.filter((dish) => dish.id !== dishId),
        })),

      clear: () =>
        set({
          items: [],
        }),
    }),
    {
      name: "addis-eats-cart",
    },
  ),
);

export default useCartStore;
