import "./App.css";
import React from "react";
import { MakeGroups1 } from "./MakeGroups1";
import { MakeGroups2 } from "./MakeGroups2";

export default function App() {
  const studentList = [
    {
      name: "Bob",
      id: 1,
    },
    {
      name: "Albert",
      id: 2,
    },
    {
      name: "Shania",
      id: 3,
    },
    {
      name: "Erika",
      id: 4,
    },
    {
      name: "Desmond",
      id: 5,
    },
    {
      name: "Shai",
      id: 6,
    },
  ];
  return (
    <div className="App">
      <MakeGroups1 />
      <MakeGroups2 />
      <p>
        This is what the output could look like (but with option to add more
        group columns), but actually work:
      </p>
      <table>
        <tr>
          <th>Students</th>
          <th>Group 1</th>
          <th>Group 2</th>
        </tr>
        {studentList.map((s) => (
          <tr>
            <td>{s.name}</td>
            <td>
              <input type="checkbox"></input>
            </td>
            <td>
              <input type="checkbox"></input>
            </td>
          </tr>
        ))}
        <button type="submit">Submit</button>
      </table>
      ;
    </div>
  );
}
