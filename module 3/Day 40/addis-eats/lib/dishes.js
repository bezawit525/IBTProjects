
const dishes = [
  {
    id: 1,
    name: "Kitfo",
    price: 350,
    category: "traditional",
    description: "Traditional Ethiopian minced beef seasoned with spices.",
  },
  {
    id: 2,
    name: "Doro Wot",
    price: 400,
    category: "traditional",
    description: "Spicy Ethiopian chicken stew served with injera.",
  },
  {
    id: 3,
    name: "Shiro",
    price: 250,
    category: "vegetarian",
    description: "A delicious Ethiopian chickpea stew.",
  },
  {
    id: 4,
    name: "Chechebsa",
    price: 220,
    category: "traditional",
    description: "Pieces of flatbread mixed with flavorful spices.",
  },
  {
    id: 5,
    name: "Sambusa",
    price: 80,
    category: "fast-food",
    description: "Crispy pastry filled with seasoned lentils.",
  },
  {
    id: 6,
    name: "Beyaynet",
    price: 280,
    category: "vegetarian",
    description: "A colorful combination of Ethiopian vegetarian dishes.",
  },
];

export async function getDishes() {
  return dishes;
}

export async function getDishById(id) {
  return dishes.find((dish) => dish.id === Number(id));
}

export default dishes;
