import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdatePlant() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [plants, setPlants] = useState(() => {
    const saved = localStorage.getItem("plants");
    return saved ? JSON.parse(saved) : [];
  });

  const plant = plants.find((p) => p.id === Number(id));

  const [commonName, setCommonName] = useState("");
  const [scientificName, setScientificName] = useState("");
  const [light, setLight] = useState("");
  const [watering, setWatering] = useState("");
  const [soil, setSoil] = useState("");
  const [level, setLevel] = useState("Beginner");

  useEffect(() => {
    localStorage.setItem("plants", JSON.stringify(plants));
  }, [plants]);

  useEffect(() => {
    if (plant) {
      setCommonName(plant.commonName);
      setScientificName(plant.scientificName);
      setLight(plant.light);
      setWatering(plant.watering);
      setSoil(plant.soil);
      setLevel(plant.level);
    }
  }, [plant]);

  function updateHandler(e) {
    e.preventDefault();

    const updatedPlant = {
      id: Number(id),
      commonName,
      scientificName,
      light,
      watering,
      soil,
      level,
    };

    setPlants(plants.map((p) => (p.id === Number(id) ? updatedPlant : p)));
    navigate("/my-plants");
  }

  if (!plant) return <p className="muted">Plant not found.</p>;

  return (
    <form onSubmit={updateHandler} className="form">
      <h2>Update plant guide</h2>

      <label>
        ID
        <input value={id} readOnly />
      </label>

      <label>
        Common name
        <input value={commonName} onChange={(e) => setCommonName(e.target.value)} required  className=""/>
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

      <button type="submit" className="button">Update</button>
    </form>
  );
}