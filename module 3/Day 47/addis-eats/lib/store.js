// Course demo data. This is intentionally in-memory; data resets when the server restarts.
// For a real deployment, replace this store with the course backend/database.
const initialDishes = [
  { id: "1", name: "Kitfo", description: "Seasoned minced beef served Ethiopian style.", price: 350, image: "/dishes/kitfo.jpg", category: "Traditional" },
  { id: "2", name: "Doro Wot", description: "Traditional spicy chicken stew served with injera.", price: 400, image: "/dishes/doro-wot.jpg", category: "Traditional" },
  { id: "3", name: "Shiro", description: "Comforting chickpea stew with Ethiopian spices.", price: 250, image: "/dishes/shiro.jpg", category: "Vegetarian" },
  { id: "4", name: "Chechebsa", description: "Pieces of flatbread tossed with spiced butter.", price: 220, image: "/dishes/chechebsa.jpg", category: "Breakfast" },
  { id: "5", name: "Tibs", description: "Sautéed beef with onions, peppers, and herbs.", price: 450, image: "/dishes/tibs.jpg", category: "Traditional" },
  { id: "6", name: "Misir Wot", description: "Red lentils simmered with berbere spices.", price: 240, image: "/dishes/misir-wot.jpg", category: "Vegetarian" },
  { id: "7", name: "Firfir", description: "Shredded injera mixed with a seasoned sauce.", price: 200, image: "/dishes/firfir.jpg", category: "Breakfast" },
  { id: "8", name: "Gomen", description: "Seasoned collard greens cooked with aromatics.", price: 180, image: "/dishes/gomen.jpg", category: "Vegetarian" }
];

const demoUsers = [
  { id: "user-1", name: "Demo Customer", phone: "0911111111", password: "customer123", role: "customer" },
  { id: "staff-1", name: "Demo Staff", phone: "0922222222", password: "staff123", role: "staff" }
];

const state = globalThis.__addisEatsStore || {
  dishes: initialDishes,
  users: demoUsers,
  orders: [],
  nextOrderNumber: 1001
};
globalThis.__addisEatsStore = state;

export function getAllDishes() {
  return state.dishes.map((dish) => ({ ...dish }));
}

export function getDishById(id) {
  const dish = state.dishes.find((item) => String(item.id) === String(id));
  return dish ? { ...dish } : null;
}

export function findDemoUser(phone, password) {
  const user = state.users.find((item) => item.phone === phone && item.password === password);
  if (!user) return null;
  return { id: user.id, name: user.name, phone: user.phone, role: user.role };
}

export function getOrdersForUser(userId) {
  return state.orders
    .filter((order) => order.userId === userId)
    .map((order) => ({ ...order, items: order.items.map((item) => ({ ...item })) }))
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export function getAllOrders() {
  return state.orders
    .map((order) => ({ ...order, items: order.items.map((item) => ({ ...item })) }))
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export function getOrderById(id) {
  const order = state.orders.find((item) => String(item.id) === String(id));
  return order ? { ...order, items: order.items.map((item) => ({ ...item })) } : null;
}

export function createOrder(user, requestedItems) {
  if (!Array.isArray(requestedItems) || requestedItems.length === 0) {
    throw new Error("Your cart is empty.");
  }

  const items = requestedItems.map((requested) => {
    const dish = state.dishes.find((item) => String(item.id) === String(requested.id));
    const quantity = Number(requested.quantity);
    if (!dish || !Number.isInteger(quantity) || quantity < 1 || quantity > 20) {
      throw new Error("Your cart contains an invalid item.");
    }
    return { id: dish.id, name: dish.name, price: dish.price, quantity };
  });

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const order = {
    id: String(state.nextOrderNumber++),
    userId: user.id,
    customerName: user.name,
    items,
    total,
    status: "Received",
    createdAt: new Date().toISOString()
  };
  state.orders.push(order);
  return { ...order, items: order.items.map((item) => ({ ...item })) };
}

export function updateOrderStatus(id, status) {
  const allowed = ["Received", "Preparing", "Ready", "Completed", "Cancelled"];
  if (!allowed.includes(status)) throw new Error("Invalid order status.");
  const order = state.orders.find((item) => String(item.id) === String(id));
  if (!order) return null;
  order.status = status;
  return { ...order, items: order.items.map((item) => ({ ...item })) };
}
