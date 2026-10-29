import { dishes } from "./dishes";

const defaultSummaries = {
  kitfo: "Minced beef prepared with Ethiopian spices.",
  "doro-wot": "Traditional Ethiopian chicken stew served with injera.",
  shiro: "Traditional Ethiopian chickpea stew.",
  chechebsa: "Traditional Ethiopian flatbread prepared with spiced butter.",
};

function createSlug(name) {
  return String(name)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getSeoDishes() {
  return dishes.map((dish) => {
    const slug = createSlug(dish.name);

    return {
      ...dish,
      slug,
      summary:
        dish.summary ||
        defaultSummaries[slug] ||
        `${dish.name} is available on the Addis Eats menu.`,
      image: dish.image || "/opengraph-image.png",
    };
  });
}

export async function getDish(id) {
  return getSeoDishes().find(
    (dish) =>
      String(dish.id) === String(id) || dish.slug === String(id).toLowerCase(),
  );
}
