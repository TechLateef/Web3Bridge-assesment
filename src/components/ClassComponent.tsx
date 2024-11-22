import React from "react";
import { Student } from "./interface";

interface ClassProps {
  className: string;
  students: Student[];
}

const ClassComponent: React.FC<ClassProps> = ({ className, students }) => {
  const filteredStudents = students.filter((student) => student.className === className);

  return (
    <div>
      <h2>Class: {className}</h2>
      <ul>
        {filteredStudents.map((student) => (
          <li key={student.id}>{student.name} - Graduation Year: {student.graduationYear}</li>
        ))}
      </ul>
    </div>
  );
};

export default ClassComponent;
