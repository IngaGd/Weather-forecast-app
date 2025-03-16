import styles from "./input.module.scss";

export function Input({ citySearch, setCitySearch }) {
  return (
    <div className={styles.input}>
      <label htmlFor="citySearch">Enter the city</label>
      <input
        type="text"
        id="citySearch"
        value={citySearch}
        onChange={(e) => setCitySearch(e.target.value)}
        autoComplete="off"
      />
    </div>
  );
}
