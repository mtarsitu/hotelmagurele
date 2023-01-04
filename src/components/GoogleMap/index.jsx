import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY,
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    map.setZoom(15);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const center = React.useMemo(() => ({ lat: 44.282413, lng: 26.060109 }), []);

  const onLoadMarker = (marker) => {
    console.log("marker: ", marker);
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={5}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <>
        <Marker onLoad={onLoadMarker} position={center} />
      </>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default Map;
