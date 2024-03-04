import React from "react";
import "../index.css";

export function TodoList() {
  const [tasks, setTasks] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");
  function TasksBody(props) {
    return (
      <>
        <div className="added-task-grp flex mt-2">
          <input
            type="text"
            id="price"
            className="block w-full rounded-l-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
            disabled
            value={props.task}
          />
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 shadow">
            {props.del}
          </button>
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-r-md shadow">
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
      <h1 className="font-semibold text-gray-800">To-Do List</h1>
      <div>
        <label
          htmlFor="price"
          className="block text-sm font-medium leading-6 text-gray-900 mb-2"
        >
          Provide input
        </label>
        <div className="handle-add-task">
          <input
            type="text"
            id="price"
            value={inputValue}
            className="block w-full rounded-l-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
            placeholder="Add your task"
            onChange={(event) => setInputValue(event.target.value)}
          />
          <button
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-r-md shadow"
            onClick={addTask}
            type="submit"
          >
            Add
          </button>
        </div>
      </div>

      {/* This is the tasks container */}
      <div className="flex flex-col mt-2">
        {tasks.map((task) => (
          <TasksBody key={task.id} del="Del" edit="Edit" task={task.task} />
        ))}
      </div>
    </main>
  );
}
