import { useEffect, useState } from "react";
import { getBoundingBox } from "geolocation-utils";

import { searchHoops } from "./api";
import { LocationAutosuggest } from "./components/LocationAutosuggest";
import { Map, Marker } from "./components/Map";
import { Popup } from "react-mapbox-gl";

const MELBOURNE = [144.9631, 37.8136];
const MAP_MARGIN = 2 * 1000; // 5 KMs

const getHoopLatLon = ({ longitude, latitude }) => [longitude, latitude];

export function Home() {
  const [results, setResults] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [activeHoopIndex, setActiveHoopIndex] = useState(0);

  const hasResults = results.length > 0;
  const { topLeft, bottomRight } = getBoundingBox(
    results.map(getHoopLatLon),
    MAP_MARGIN
  );
  const mapBounds = hasResults ? [topLeft, bottomRight] : undefined;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async ({ coords }) => {
      const hoops = await searchHoops([coords.longitude, coords.latitude]);

      setUserLocation(coords);
      setActiveHoopIndex(0);
      setResults(hoops);
    });
  }, []);

  return (
    <div className="content">
      <div className="flex gap-2">
        <div id="results" className="w-2/5 flex flex-col gap-2">
          <LocationAutosuggest
            userLocation={userLocation}
            onChange={async (searchLocation) => {
              if (searchLocation) {
                const hoops = await searchHoops(searchLocation.location);

                setActiveHoopIndex(0);
                setResults(hoops);
              }
            }}
          />
          {hasResults
            ? results.map((hoop, index) => (
                <Result
                  key={index}
                  {...hoop}
                  onClick={() => setActiveHoopIndex(index)}
                />
              ))
            : null}
        </div>
        <Map
          style="mapbox://styles/judno/ckldm0nzm30on17mdzt6zl7qx"
          containerStyle={{
            height: "80vh",
            width: "100%",
          }}
          movingMethod="jumpTo"
          fitBounds={mapBounds}
          center={
            hasResults ? getHoopLatLon(results[activeHoopIndex]) : MELBOURNE
          }
        >
          {results.map((hoop, index) => (
            <Marker key={index} coordinates={getHoopLatLon(hoop)} />
          ))}
          {hasResults ? (
            <Popup coordinates={getHoopLatLon(results[activeHoopIndex])}>
              <div className="" style={{ bottom: -50 }}>
                <div className="font-semibold">
                  {results[activeHoopIndex].name}
                </div>
                <div>{results[activeHoopIndex].description}</div>
              </div>
            </Popup>
          ) : null}
        </Map>
      </div>
    </div>
  );
}

function Result({ name, locationName, onClick }) {
  return (
    <div className="bg-gray-700 p-3 cursor-pointer rounded" onClick={onClick}>
      <div className="text-lg text-white font-semibold">{name}</div>
      <div className="text-gray-300 text-sm">{locationName}</div>
    </div>
  );
}
