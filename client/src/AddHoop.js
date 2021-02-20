import { useState } from "react";
import { addHoop } from "./api";
import { LocationAutosuggest } from "./components/LocationAutosuggest";
import { Map, Marker } from "./components/Map";
import { TextArea } from "./components/TextArea";
import { TextInput } from "./components/TextInput";

export function AddHoop() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState(null);
  const [description, setDescription] = useState("");

  return (
    <div className="content">
      <h1 className="text-4xl font-bold py-5">Add hoop</h1>
      <div className="flex justify-between gap-5">
        <form
          className="w-2/5 flex flex-col gap-3"
          onSubmit={async (event) => {
            event.preventDefault();

            await addHoop({
              name,
              description,
              location,
            });
          }}
        >
          <TextInput
            label="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <LocationAutosuggest label="Address" onChange={setLocation} />
          <TextArea
            label="Description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <button type="submit">Add</button>
        </form>
        <Map
          style="mapbox://styles/judno/ckldm0nzm30on17mdzt6zl7qx"
          containerStyle={{
            height: "80vh",
            width: "100%",
          }}
          center={location ? location.location : undefined}
        >
          {location ? <Marker coordinates={location.location} /> : null}
        </Map>
      </div>
    </div>
  );
}
