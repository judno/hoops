import { getToken } from "./auth";

export const MAP_API_KEY =
  "pk.eyJ1IjoianVkbm8iLCJhIjoiY2tsYXBnZmVjMGNyeTJ2cXRscG5pZnJrYiJ9.1amSrfQa17c6WONhr6AMWg";

export function getLocationSuggestions(searchTerm) {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchTerm}.json?access_token=${MAP_API_KEY}`;

  return fetch(url)
    .then((res) => res.json())
    .then((res) => {
      return res.features.map((place) => ({
        name: place.place_name,
        location: place.center,
      }));
    });
}

const API_HOST = "http://localhost:3001";

export async function getUserInfo() {
  const token = getToken();

  if (token) {
    const url = `${API_HOST}/api/user`;

    const response = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (response.status === 200) {
      return response.json();
    }
  }

  return null;
}
