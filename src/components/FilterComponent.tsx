import { Student } from "./interface";

interface FilterComponentProps {
  students: Student[];
  onFilter: (year: number | null) => void;
}

const FilterComponent: React.FC<FilterComponentProps> = ({ students, onFilter }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value ? parseInt(e.target.value) : null;
    onFilter(value);
  };

  return (
    <div>
      <label htmlFor="graduationYear">Filter by Graduation Year:</label>
      <select id="graduationYear" onChange={handleChange} defaultValue="">
        <option value="">All</option>
        {[...new Set(students.map((s) => s.graduationYear))].map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterComponent;
