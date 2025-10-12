export const YearToggle = ({ selectedYear, onYearChange, years }) => {
  return (
    <div className="flex justify-center items-center gap-4 p-6 bg-card rounded-2xl border-2 border-border shadow-lg">
      <span className="text-sm font-semibold text-muted-foreground">Year:</span>
      <div className="flex gap-3">
        {years.map((year) => {
          const isSelected = selectedYear === year;
          return (
            <button
              key={year}
              onClick={() => onYearChange(year)}
              className={`px-6 py-3 rounded-xl font-bold text-lg transition-all duration-300 ${
                isSelected
                  ? "bg-primary text-primary-foreground shadow-lg scale-110"
                  : "bg-secondary hover:bg-muted hover:scale-105"
              }`}
            >
              {year}
            </button>
          );
        })}
      </div>
    </div>
  );
};
