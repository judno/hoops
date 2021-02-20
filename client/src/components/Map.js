import MapboxGl, { Marker as MapboxMarker } from "react-mapbox-gl";
import { MAP_API_KEY } from "../api";

export const Map = MapboxGl({
  accessToken: MAP_API_KEY,
});

export const Marker = (props) => (
  <MapboxMarker {...props}>
    <img src="/marker.png" width={50} height={50} />
  </MapboxMarker>
);
