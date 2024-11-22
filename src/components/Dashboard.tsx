import { Student } from "./interface";

const Dashboard: React.FC<{ students: Student[] }> = ({ students }) => {
    const currentStudents = students.filter((student) => !student.isGraduated);
    const graduatedStudents = students.filter((student) => student.isGraduated);
  
    return (
      <div>
        <h3>Dashboard</h3>
        <p>Total Students: {students.length}</p>
        <p>Current Students: {currentStudents.length}</p>
        <p>Graduated Students: {graduatedStudents.length}</p>
      </div>
    );
  };
  
  export default Dashboard;
  