import { useState } from "react"
import './index.css';

function App() {
  const [task, setTask] = useState([{
    task: "Buy Ghe",
    date: "2014-10-29"
  },
  {
    task: "Take a shower",
    date: "2014-10-29"
  },
  {
    task: "Take a shower",
    date: "2014-10-29"
  },
  {
    task: "Take a shower",
    date: "2014-10-29"
  },
  ])
  // const [task, setTask] = useState(["buy ghe", "take a shower"])

  const [newTask, setNewTask] = useState("");
  const [newDate, setNewDate] = useState("");

  function addTask() {
    if (newTask.trim().length > 0) {
      setTask([...task, {
        task: newTask,
        date: newDate
      }])
      setNewDate("");
      setNewTask("");
    }
  }
  function deleteTask(index) {
    setTask(task.filter((task, i) => i !== index))
  }
  function taskInputHandle(event) {
    setNewTask(event.target.value)
  }
  function dateInputHandle(event) {
    setNewDate(event.target.value)
  }
  function moveUp(index) {
    if (index > 0) {

      const updatedTask = [...task];
      [updatedTask[index], updatedTask[index - 1]] = [updatedTask[index - 1], updatedTask[index]];
      setTask(updatedTask);
    }
  }
  function moveDown(index) {
    if (index < task.length-1) {

      const updatedTask = [...task];
      [updatedTask[index], updatedTask[index + 1]] = [updatedTask[index + 1], updatedTask[index]];
      setTask(updatedTask);
    }
  }

  return (
    <main>
      <div className="inputContainer">
        <input type="text" placeholder="Enter your task"
          onChange={taskInputHandle}
          value={newTask} />
        <input type="date" onChange={dateInputHandle}
          value={newDate} />
        <button onClick={addTask} className="addButton">Add</button>
      </div>

      <div className="output">
        <ol>
          {task.map((task, index) => (
            <li key={index}>
              <div>
                <span>{index+1}</span>
                <span>{task.task}</span>
                <span>{task.date}</span>
              </div>

              <div className="btnContainer">
                <button onClick={() => deleteTask(index)} className="deleteButton">Delete</button>
                <button className="moveUp" onClick={() => moveUp(index)}>⬆</button>
                <button className="moveDown" onClick={() => moveDown(index)}>⬇</button>
              </div>
            </li>
          ))}

        </ol>
      </div>
    </main>
  )
}

export default App
