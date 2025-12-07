import { useState } from "react";

export default function Taskform({ addTask }) {

  let [task, setTask] = useState("");
  let [priority, setPriority] = useState("Medium");
  let [catagory, setCatagory] = useState("general");

  const handleSubmit = (e) => {
    e.preventDefault();  // stop page refresh

    addTask({
      text: task,priority,catagory,completed: false
    })
    setTask(" ");
    setPriority("Medium");
    setCatagory("General");

    // clear the input after adding
    setTask("");
  };

  return (
    <div>
      <form className="task-form" onSubmit={handleSubmit}>
        <div id="inp">
          <input
            type="text"
            placeholder="enter the task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />

          <span>
            <button type="submit">Add task</button>
          </span>

        {/* <h1>{task} {priority} {catagory}</h1> */}
        </div>

        <div id="btns">
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>

            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
         
         <select value={catagory} onChange={(e) => setCatagory(e.target.value)}>
            <option value="general">General</option>
            <option value="work">Work</option>
            <option value="personal">Personal</option>
          </select>
        </div>
      </form>
    </div>
  );
}
