import { notFound } from "next/navigation";
import { getDish } from "../../../lib/seo";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const dish = await getDish(id);

  if (!dish) {
    return {
      title: "Dish Not Found",
      description: "The requested dish could not be found.",
    };
  }

  const description = `${dish.name} — ${dish.price} ETB. ${dish.summary}`;

  return {
    title: dish.name,
    description,

    alternates: {
      canonical: `/menu/${dish.id}`,
    },

    openGraph: {
      title: `${dish.name} · Addis Eats`,
      description,
      url: `/menu/${dish.id}`,
      siteName: "Addis Eats",
      type: "website",
      images: [
        {
          url: `/menu/${dish.id}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: `${dish.name} from Addis Eats`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${dish.name} · Addis Eats`,
      description,
      images: [`/menu/${dish.id}/opengraph-image`],
    },
  };
}

export default async function DishPage({ params }) {
  const { id } = await params;
  const dish = await getDish(id);

  if (!dish) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MenuItem",
    name: dish.name,
    description: dish.summary,
    offers: {
      "@type": "Offer",
      price: dish.price,
      priceCurrency: "ETB",
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <article>
        <h1>{dish.name}</h1>
        <p>{dish.summary}</p>
        <p>{dish.price} ETB</p>

        {/* Keep your existing Add to Cart and other controls here. */}
      </article>
    </main>
  );
}
