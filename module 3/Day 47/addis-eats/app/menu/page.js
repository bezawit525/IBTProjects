import { getDishes } from "../../lib/data";
import MenuSearch from "../../components/MenuSearch";

export const metadata = {
  title: "Menu",
  description: "Browse Ethiopian dishes available from Addis Eats."
};

export default async function MenuPage() {
  const dishes = await getDishes();
  return (
    <main>
      <p className="eyebrow">Fresh from our menu</p>
      <h1>Our Menu</h1>
      <p className="muted">Search dishes, browse pages, and open a dish for details.</p>
      <MenuSearch initialDishes={dishes} />
    </main>
  );
}
