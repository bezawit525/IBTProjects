"use client";

import dynamic from "next/dynamic";

const DeliveryMap = dynamic(() => import("./DeliveryMap"), {
  ssr: false,
  loading: () => (
    <div className="map-placeholder" aria-label="Loading map">
      Loading map...
    </div>
  ),
});

export default function MapPanel(props) {
  return <DeliveryMap {...props} />;
}
