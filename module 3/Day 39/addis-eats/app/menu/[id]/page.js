import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getDish, getDishes, getReviews } from "../data.js";

export async function generateStaticParams() {
  const dishes = await getDishes();

  return dishes.map((dish) => ({
    id: dish.id,
  }));
}

async function Reviews({ id }) {
  const reviews = await getReviews(id);

  return (
    <section>
      <h2>Reviews</h2>

      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        reviews.map((review) => <p key={review.id}>{review.text}</p>)
      )}
    </section>
  );
}

export default async function DishPage({ params }) {
  const { id } = await params;
  const dish = await getDish(id);

  if (!dish) {
    notFound();
  }

  return (
    <main>
      <h1>{dish.name}</h1>
      <p>{dish.description}</p>
      <p>Price: {dish.price} ETB</p>
      <p>Category: {dish.category}</p>

      <Suspense fallback={<p>Loading reviews...</p>}>
        <Reviews id={id} />
      </Suspense>

      <p>
        <Link href="/menu">Back to Menu</Link>
      </p>
    </main>
  );
}
