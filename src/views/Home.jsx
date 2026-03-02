import { plants } from "../data/Plants.jsx";

export default function Home() {
  return (
    <section>
      <div className="hero">

        <div className="hero-text">
          <h2>Welcome to FlowerPlant</h2>
          <p>
            A community for plant enthusiasts, gardeners, and beginners who want
            simple, reliable plant care guidance and a place to manage their own plant collection.
          </p>

          <ul className="bullets">
            <li>Pick the right light for your plant</li>
            <li>Watering frequency</li>
            <li>Use well-draining soil to avoid root rot</li>
          </ul>
        </div>

        <div className="hero-media" >
          <div className="hero-card">
            
          </div>
        </div>
      </div>

      <h3 className="plant-care-examples">Most popular plant care guides</h3>

      <div className="grid">
        {plants.map((p) => (
          <article key={p.id} className="card">
            <img className="plant-img" src={p.image} alt={p.commonName} />


            <h4 className="plant-title">{p.commonName}</h4>


            <p className="latin">
              <em>{p.scientificName}</em>
            </p>
            
            <p className="plant-details">
            <strong>Light:</strong> {p.light}</p>
            <p><strong>Watering:</strong> {p.watering}</p>
            <p><strong>Soil:</strong> {p.soil}</p>
            <p><strong>Level:</strong> {p.level}</p>
          </article>
        ))}
      </div>
    </section>
  );
}