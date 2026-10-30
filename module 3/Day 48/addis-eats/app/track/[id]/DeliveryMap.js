"use client";

import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from "react-leaflet";
import { useEffect } from "react";

function FitMap({ courier, destination }) {
  const map = useMap();
  useEffect(() => {
    map.fitBounds([courier, destination], { padding: [35, 35] });
  }, [map, courier, destination]);
  return null;
}

export default function DeliveryMap({ courier, destination }) {
  return (
    <div className="delivery-map">
      <MapContainer center={courier} zoom={14} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FitMap courier={courier} destination={destination} />
        <CircleMarker center={courier} radius={10} pathOptions={{ color: "#8d2f22" }}>
          <Popup>Demo courier location</Popup>
        </CircleMarker>
        <CircleMarker center={destination} radius={10} pathOptions={{ color: "#26734d" }}>
          <Popup>Demo delivery destination</Popup>
        </CircleMarker>
      </MapContainer>
    </div>
  );
}
