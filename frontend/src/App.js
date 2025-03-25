import React, { useState } from "react";
import StudentList from "./components/StudentList";

const App = () => {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  const handleAddStudent = () => {
    if (name.trim() !== "" && course.trim() !== "") {
      setStudents([...students, { name, course }]); // Add new student
      setName(""); // Clear input fields
      setCourse("");
    }
  };

  return (
    <div>
      <h1>Student Recording System</h1>
      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />
      <button onClick={handleAddStudent}>Add Student</button>

      <StudentList students={students} />
    </div>
  );
};

export default App;