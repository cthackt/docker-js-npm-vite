function FilterBar({ activeFilter, onChange }) {
  const filters = ["all", "today", "upcoming", "completed"];

  return (
    <div className="filter-bar">
      {filters.map((key) => (
        <button
          key={key}
          onClick={() => onChange(key)}
          className={key === activeFilter ? "active" : ""}
        >
          {capitalize(key)}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}
