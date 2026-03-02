import { Link } from "react-router-dom";

export default function PlantItem({ plant, deleteHandler }) {
  return (

    <div className="card">
      <h4 className="plant-title">{plant.commonName}</h4>
      <p className="latin">
        <em>{plant.scientificName}</em>
      </p>

      <p><strong>Light:</strong> {plant.light}</p>
      <p><strong>Watering:</strong> {plant.watering}</p>
      <p><strong>Soil:</strong> {plant.soil}</p>
      <p><strong>Level:</strong> {plant.level}</p>

      <div className="actions">
        <Link to={`/update/${plant.id}`}>Update</Link>
        <button onClick={() => deleteHandler(plant.id)}>Delete</button>
      </div>
    </div>
  )
}