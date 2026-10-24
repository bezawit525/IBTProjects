import { cacheLife, cacheTag } from "next/cache";

const dishes = [
  {
    id: "doro-wot",
    name: "Doro Wot",
    price: 250,
    description: "Traditional Ethiopian chicken stew.",
    category: "Main Course",
  },
  {
    id: "tibs",
    name: "Tibs",
    price: 300,
    description: "Ethiopian-style sautéed meat.",
    category: "Main Course",
  },
  {
    id: "shiro-wot",
    name: "Shiro Wot",
    price: 180,
    description: "A delicious Ethiopian chickpea stew.",
    category: "Vegetarian",
  },
  {
    id: "chechebsa",
    name: "Chechebsa",
    price: 150,
    description: "Traditional Ethiopian breakfast.",
    category: "Breakfast",
  },
  {
    id: "coffee",
    name: "Ethiopian Coffee",
    price: 80,
    description: "Freshly brewed Ethiopian coffee.",
    category: "Drinks",
  },
];

export async function getDishes() {
  "use cache";

  cacheLife("hours");
  cacheTag("dishes");

  return dishes;
}

export async function getDish(id) {
  "use cache";

  cacheLife("hours");
  cacheTag("dishes");

  return dishes.find((dish) => dish.id === id) || null;
}

export async function getReviews(id) {
  "use cache";

  cacheLife("hours");
  cacheTag("dishes");

  const dish = dishes.find((item) => item.id === id);

  if (!dish) {
    return [];
  }

  return [
    {
      id: 1,
      text: `Customers enjoy our ${dish.name}.`,
    },
  ];
}
