import { useState } from "react";
import { getLocationSuggestions } from "../api";

export function LocationAutosuggest({ label, onChange, userLocation }) {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  return (
    <div>
      <label className="text-lg font-semibold tracking-wide" htmlFor={label}>
        {label}
      </label>
      <input
        className="focus:border-gray-300 focus:ring-1 focus:ring-gray-300 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 px-2"
        type="text"
        id={label}
        autoComplete="off"
        onChange={(event) => {
          onChange(null);
          setInputValue(event.target.value);
          getLocationSuggestions(event.target.value, userLocation).then(
            (sugs) => {
              setSuggestions(sugs);
            }
          );
        }}
        value={inputValue}
      />
      <div className="relative">
        <div className="absolute mt-1 w-full bg-white rounded">
          {suggestions.length > 0
            ? suggestions.map((location, index) => (
                <div
                  key={index}
                  className="p-3 hover:bg-blue-200 rounded"
                  onClick={() => {
                    setSuggestions([]);
                    onChange(location);
                    setInputValue(location.name);
                  }}
                >
                  {location.name}
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}
