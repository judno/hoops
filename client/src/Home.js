import { useState } from "react";
import MapboxGl from "react-mapbox-gl";
import { MAP_API_KEY, getLocationSuggestions } from "./api";

const Mapbox = MapboxGl({
  accessToken: MAP_API_KEY,
});

export function Home() {
  const [suggestions, setSuggestions] = useState([]);

  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          getLocationSuggestions(event.target.value).then((sugs) => {
            setSuggestions(sugs);
          });
        }}
      />
      {suggestions.length > 0
        ? suggestions.map(({ name }) => <div>{name}</div>)
        : null}
      <Mapbox
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: "50vh",
          width: "50vw",
        }}
      />
    </div>
  );
}
