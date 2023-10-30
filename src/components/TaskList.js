import React from "react";
import { TASKS } from "../data";
function TaskList() {
  return (
    <div className="tasks">
      <ul>
        {TASKS.map((task, index) => (
          <li key={index}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
