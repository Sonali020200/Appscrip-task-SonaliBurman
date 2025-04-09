import styles from '../styles/SortDropdown.module.css';

export default function SortDropdown({ options, selected, onChange }) {
  return (
    <div className={styles.sort}>
      <label htmlFor="sort">Sort by:</label>
      <select
        id="sort"
        value={selected}
        onChange={(e) => onChange(e.target.value)}
        className={styles.select}
      >
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}
