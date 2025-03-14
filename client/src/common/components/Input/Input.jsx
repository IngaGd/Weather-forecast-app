export function Input({ citySearch, setCitySearch }) {
  return (
    <div>
      <label htmlFor="citySearch">Enter the city</label>
      <input
        type="text"
        id="citySearch"
        value={citySearch}
        onChange={(e) => setCitySearch(e.target.value)}
      />
    </div>
  );
}
