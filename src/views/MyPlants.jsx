import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PlantList from "../components/PlantList";
import SearchField from "../components/SearchField";

export default function MyPlants() {
  const [plants, setPlants] = useState(() => {
    const saved = localStorage.getItem("plants");
    return saved ? JSON.parse(saved) : [];
  });

  const [filterText, setFilterText] = useState(() => {
    const saved = localStorage.getItem("plantFilterText");
    return saved ? saved : "";
  });

  useEffect(() => {
    localStorage.setItem("plants", JSON.stringify(plants));
  }, [plants]);

  useEffect(() => {
    localStorage.setItem("plantFilterText", filterText);
  }, [filterText]);

  const sortedPlants = plants.toSorted((a, b) =>
    a.commonName.localeCompare(b.commonName, "en", { sensitivity: "base" })
  );

  const filteredPlants = sortedPlants.filter((p) =>
    p.commonName.toLowerCase().includes(filterText.toLowerCase())
  );

  function handleInputChange(e) {
    setFilterText(e.target.value);
  }

  return (
    <section>
      <div className="row">
        <h2>My Plants</h2>
        <Link className="button" to="/create">+ Create</Link>
      </div>

      <SearchField filter={filterText} handleInput={handleInputChange} />

      {filteredPlants.length > 0 ? (
        <PlantList plants={filteredPlants} setPlants={setPlants} />
      ) : (
        <p className="muted">No plants found. Create new one.</p>
      )}
    </section>
  );
}