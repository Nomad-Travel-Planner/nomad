import React from "react";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

const mapToken = process.env.GOOGLE_MAPS_API_KEY

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: `${mapToken}`,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: 47.6062, lng: 122.3321 }), []);

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <MarkerF position={center} />
    </GoogleMap>
  );
}
