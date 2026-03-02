import PlantItem from "./PlantItem";

export default function PlantList({ plants, setPlants }) {
  function deletePlantHandler(id) {
    const ok = window.confirm("Delete this plant guide?");
    if (ok) {
      setPlants(plants.filter((p) => p.id !== id));
    }
  }

  return (
    <div className="grid">

      {plants.map((plant) => (
        <PlantItem key={plant.id} plant={plant} deleteHandler={deletePlantHandler} />

      ))}
    </div>
  )
}