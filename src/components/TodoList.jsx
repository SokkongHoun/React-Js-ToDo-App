import React from "react";
import "../index.css";

export function TodoList() {
  const [tasks, setTasks] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");
  function TasksBody(props) {
    return (
      <>
        <div className="mt-2">
          <input
            type="text"
            className="outline-none text-gray-100 rounded-l px-3 p-1 text-xs"
            disabled
            value={props.task}
          />
          <button className="outline-none p-1 text-xs bg-red-950 text-gray-100 hover:bg-red-700 hover:text-gray-50">
            {props.del}
          </button>
          <button className="outline-none rounded-r p-1 text-xs bg-green-800 text-gray-100 hover:bg-green-600 hover:text-gray-50">
            {props.edit}
          </button>
        </div>
      </>
    );
  }

  function addTask() {
    const id = Date.now();
    if (inputValue === "") {
      alert("Please provide input");
      return tasks;
    } else {
      setTasks((prevTask) => {
        const newTasks = [...prevTask, { id: id, task: inputValue }];
        console.log(newTasks);
        return newTasks;
      });
    }
    setInputValue("");
    console.log(id);
  }

  return (
    <main className="flex items-center flex-col mt-11">
      <h1 className="font-semibold text-left">To-Do List</h1>
      <div>
        <input
          className="input-field outline-none text-white rounded-l px-3 p-1 text-xs placeholder:text-gray-100"
          type="text"
          placeholder="Add your task"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button
          className="add-btn outline-none rounded-r p-1 text-xs bg-gray-600 text-gray-100 hover:bg-slate-800 hover:text-gray-50"
          type="submit"
          onClick={addTask}
        >
          Add
        </button>
      </div>
      <div className="flex flex-col mt-2">
        {tasks.map((task) => (
          <TasksBody key={task.id} del="Del" edit="Edit" task={task.task} />
        ))}
      </div>
    </main>
  );
}
