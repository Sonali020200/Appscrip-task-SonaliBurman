import styles from '../styles/Filters.module.css';

export default function Filters({ filters, selectedFilters, onFilterChange }) {
  return (
    <div className={styles.filters}>
      {filters.map((filter) => (
        <div key={filter.name} className={styles.filterGroup}>
          <h4>{filter.name}</h4>
          {filter.options.map((option) => (
            <label key={option} className={styles.option}>
              <input
                type="checkbox"
                checked={selectedFilters[filter.name]?.includes(option)}
                onChange={() => onFilterChange(filter.name, option)}
              />
              {option}
            </label>
          ))}
        </div>
      ))}
    </div>
  );
}
