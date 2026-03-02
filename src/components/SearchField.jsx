export default function SearchField({ filter, handleInput }) {
  return (
    <div className="search">

      <label htmlFor="filter" className="muted">
        Filter your plants
      </label>

      <input
        id="filter"
        type="text"
        placeholder="Type a plant name..."
        value={filter}
        onChange={handleInput}
      />
    </div>
  )
}