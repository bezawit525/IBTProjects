import { ImageResponse } from "next/og";
import { getDish } from "../../../lib/seo";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image({ params }) {
  const { id } = await params;
  const dish = await getDish(id);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "70px",
        background: "#0A1F3D",
        color: "white",
      }}
    >
      <div
        style={{
          fontSize: 34,
          color: "#F4B860",
          marginBottom: 30,
        }}
      >
        ADDIS EATS
      </div>

      <div
        style={{
          fontSize: 76,
          fontWeight: 700,
          marginBottom: 24,
        }}
      >
        {dish?.name || "Addis Eats"}
      </div>

      <div style={{ fontSize: 42 }}>
        {dish ? `${dish.price} ETB` : "Ethiopian food"}
      </div>

      <div
        style={{
          fontSize: 27,
          marginTop: 35,
          color: "#D6DFEA",
        }}
      >
        Ethiopian food, made discoverable.
      </div>
    </div>,
    size,
  );
}
