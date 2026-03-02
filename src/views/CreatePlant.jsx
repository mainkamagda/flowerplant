import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreatePlant() {
  const [plants, setPlants] = useState(() => {
    const saved = localStorage.getItem("plants");
    return saved ? JSON.parse(saved) : [];
  });

  const [commonName, setCommonName] = useState("");
  const [scientificName, setScientificName] = useState("");
  const [light, setLight] = useState("");
  const [watering, setWatering] = useState("");
  const [soil, setSoil] = useState("");
  const [level, setLevel] = useState("Beginner");

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("plants", JSON.stringify(plants));
  }, [plants]);

  function createHandler(e) {
    e.preventDefault();

    const highestId = plants.length > 0 ? Math.max(...plants.map((p) => p.id)) : 0;

    const newPlant = {
      id: highestId + 1,
      commonName,
      scientificName,
      light,
      watering,
      soil,
      level,
    };

    setPlants([...plants, newPlant]);
    navigate("/my-plants");
  }

  return (
    <form onSubmit={createHandler} className="form">
      <h2>Create plant guide</h2>

      <label>
        Common name
        <input value={commonName} onChange={(e) => setCommonName(e.target.value)} required />
      </label>

      <label>
        Scientific name
        <input value={scientificName} onChange={(e) => setScientificName(e.target.value)} required />
      </label>

      <label>
        Light
        <input value={light} onChange={(e) => setLight(e.target.value)} required />
      </label>

      <label>
        Watering
        <input value={watering} onChange={(e) => setWatering(e.target.value)} required />
      </label>

      <label>
        Soil
        <input value={soil} onChange={(e) => setSoil(e.target.value)} required />
      </label>

      <label>
        Difficulty level
        <select value={level} onChange={(e) => setLevel(e.target.value)}>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Expert</option>
        </select>
      </label>

      <button type="submit" className="button">Create</button>
    </form>
  );
}