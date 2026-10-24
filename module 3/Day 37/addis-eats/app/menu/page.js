import { Suspense } from "react";
import DishList from "./DishList";
import CacheControls from "./CacheControls.jsx";

function DishSkeleton() {
  return <p>Loading dishes... Please wait.</p>;
}

export default function MenuPage() {
  return (
    <main>
      <h2>Our Menu</h2>
      <p>Choose your favorite dish.</p>

      <CacheControls />

      <Suspense fallback={<DishSkeleton />}>
        <DishList />
      </Suspense>
    </main>
  );
}
