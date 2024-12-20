import React, { useState } from "react";
import ClassComponent from "./components/ClassComponent";
import FilterComponent from "./components/FilterComponent";
import { Student } from "./components/interface";
import Dashboard from "./components/Dashboard";
import { students } from "./data/students";



const App: React.FC = () => {
  // Sample student data


  // State for filtering by graduation year
  const [filteredStudents, setFilteredStudents] = useState<Student[]>(students);

  // State for selected class (optional)
  const [selectedClass, setSelectedClass] = useState<string>("");

  // Filter handler for graduation year
  const handleFilter = (year: number | null) => {
    if (year) {
      setFilteredStudents(students.filter((student) => student.graduationYear === year));
    } else {
      setFilteredStudents(students); // Reset to show all students
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>School Database</h1>

      {/* Dashboard Component */}
      <Dashboard students={students} />
      {/* Filter Component */}
      <FilterComponent students={students} onFilter={handleFilter} />

      {/* Class Selection Dropdown */}
      <div>
        <label htmlFor="classSelect">Filter by Class:</label>
        <select
          id="classSelect"
          onChange={(e) => setSelectedClass(e.target.value)}
          defaultValue=""
          style={{ margin: "0 10px" }}
        >
          <option value="">All Classes</option>
          {[...new Set(students.map((s) => s.className))].map((className) => (
            <option key={className} value={className}>
              {className}
            </option>
          ))}
        </select>
      </div>

      {/* Class Component */}
      <div>
        {selectedClass ? (
          <ClassComponent className={selectedClass} students={filteredStudents} />
        ) : (
          <div>
            {["Diamond", "Silver","Diamond-B"].map((className) => (
              <ClassComponent key={className} className={className} students={filteredStudents} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
