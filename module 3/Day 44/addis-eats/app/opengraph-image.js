import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
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
      <div style={{ fontSize: 38, color: "#F4B860" }}>ADDIS EATS</div>

      <div style={{ fontSize: 76, fontWeight: 700, marginTop: 30 }}>
        Ethiopian Food
      </div>

      <div style={{ fontSize: 36, marginTop: 24 }}>
        Discover the Addis Eats menu.
      </div>
    </div>,
    size,
  );
}
