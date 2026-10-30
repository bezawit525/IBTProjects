"use client";

import dynamic from "next/dynamic";

const DeliveryMap = dynamic(() => import("./DeliveryMap"), {
  ssr: false,
  loading: () => <div className="map-placeholder">Loading delivery map…</div>
});

export default function MapPanel({ courier, destination }) {
  return <DeliveryMap courier={courier} destination={destination} />;
}
