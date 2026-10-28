import Image from "next/image";

export default function DishCard({ dish }) {
  if (!dish) {
    return null;
  }

  const imageSrc = dish.image || dish.imageUrl;

  return (
    <article className="dish-card">
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={dish.name || "Ethiopian dish"}
          width={400}
          height={300}
          sizes="(max-width: 768px) 100vw, 400px"
          style={{
            width: "100%",
            height: "auto",
            aspectRatio: "4 / 3",
            objectFit: "cover",
          }}
        />
      ) : (
        <div
          role="img"
          aria-label="Dish photo unavailable"
          style={{
            width: "100%",
            aspectRatio: "4 / 3",
            background: "#f1f1f1",
            display: "grid",
            placeItems: "center",
          }}
        >
          No dish photo available
        </div>
      )}

      <div style={{ padding: "12px" }}>
        <h2>{dish.name}</h2>
        <p>{dish.description}</p>
        <p>
          ETB {new Intl.NumberFormat("en-ET").format(Number(dish.price) || 0)}
        </p>
      </div>
    </article>
  );
}
