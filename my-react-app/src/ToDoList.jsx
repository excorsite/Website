import React, { useState } from "react";
import "./ToDoList.css";

function ToDoList() {
  const [tasks, setTasks] = useState([
    "Eat a Breakfast",
    "Take a shower",
    "Run 10km daily ",
  ]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    // remove for blank task to used trim method.
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const UpdateTasks = tasks.filter((_, i) => i !== index);
    setTasks(UpdateTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const UpdateTasks = [...tasks];

      [UpdateTasks[index], UpdateTasks[index - 1]] = [
        UpdateTasks[index - 1],
        UpdateTasks[index],
      ];
      setTasks(UpdateTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const UpdateTasks = [...tasks];

      [UpdateTasks[index], UpdateTasks[index + 1]] = [
        UpdateTasks[index + 1],
        UpdateTasks[index],
      ];
      setTasks(UpdateTasks);
    }
  }

  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>

      <div>
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Enter a task"
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text"> {task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              ⬆️
            </button>
            <button className="move-button" onClick={() => moveTaskDown(index)}>
              ⬇️
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
