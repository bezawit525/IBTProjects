import { getAllDishes, getDishById } from "./store";

// If API_URL is configured, use that API. Otherwise use the built-in demo data.
// Expected external API shape: an array of dishes, or { dishes: [...] }.
export async function getDishes() {
  const baseUrl = process.env.API_URL?.trim();
  if (baseUrl) {
    const response = await fetch(`${baseUrl.replace(/\/$/, "")}/dishes`, {
      next: { revalidate: 300 }
    });
    if (!response.ok) throw new Error("Could not load dishes from API_URL.");
    const data = await response.json();
    return Array.isArray(data) ? data : data.dishes || [];
  }
  return getAllDishes();
}

export async function getDish(id) {
  const baseUrl = process.env.API_URL?.trim();
  if (baseUrl) {
    const response = await fetch(`${baseUrl.replace(/\/$/, "")}/dishes/${encodeURIComponent(id)}`, {
      next: { revalidate: 300 }
    });
    if (response.status === 404) return null;
    if (!response.ok) throw new Error("Could not load dish from API_URL.");
    return response.json();
  }
  return getDishById(id);
}
