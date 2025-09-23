import React from "react";
import { students } from "../data";

const StudentList = () => {
  console.log(students);
  const getColor = (gender) => {
    switch (gender) {
      case "female":
        return "green";
      case "male":
        return "yellow";
      default:
        return "blueviolet";
    }
  };
  return (
    <div>
      <h1>Danh sach hoc vien</h1>
      {students.map((item) => (
        <div
          key={item.id}
          style={{
            color: getColor(item.gender),
          }}
        >
          <h2>{item.name}</h2>
          <p>{item.age}</p>
          <p>{item.gender}</p>
        </div>
      ))}
    </div>
  );
};

export default StudentList;
