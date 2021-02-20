import { getToken } from "./auth";

export const MAP_API_KEY =
  "pk.eyJ1IjoianVkbm8iLCJhIjoiY2tsYXBnZmVjMGNyeTJ2cXRscG5pZnJrYiJ9.1amSrfQa17c6WONhr6AMWg";

export function getLocationSuggestions(searchTerm, userLocation) {
  let url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchTerm}.json?types=address&access_token=${MAP_API_KEY}`;

  if (userLocation) {
    url += `&proximity=${userLocation.longitude},${userLocation.latitude}`;
  }

  return fetch(url)
    .then((res) => res.json())
    .then((res) => {
      if (!res.features) {
        return [];
      }

      return res.features.map((place) => ({
        name: place.place_name,
        location: place.center,
      }));
    });
}

const API_HOST =
  process.env.NODE_ENV === "production" ? "" : "http://localhost:3001";

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

export async function addHoop(hoop) {
  const token = getToken();

  if (!token) {
    throw new Error("Not logged in");
  }

  const url = `${API_HOST}/api/hoops`;

  const response = await fetch(url, {
    method: "post",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(hoop),
  });

  if (response.status !== 200) {
    throw new Error("Failed to add hoop");
  }
}

export async function searchHoops([lon, lat]) {
  const url = `${API_HOST}/api/hoops?lat=${lat}&lon=${lon}`;

  const response = await fetch(url);

  if (response.status !== 200) {
    throw new Error("Failed to search hoops");
  }

  return response.json();
}
