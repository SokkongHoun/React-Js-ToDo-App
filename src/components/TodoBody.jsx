import React from "react";
import "../index.css";
import TasksAppendBody from "./TodoTasks";

export function TodoBody() {
  const [tasks, setTasks] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");

  function addTask() {
    const id = Date.now();
    if (inputValue === "") {
      alert("Please provide input");
      return tasks;
    } else {
      setTasks((prevTask) => {
        const newTasks = [
          ...prevTask,
          { id: id, task: inputValue, value: false },
        ];
        console.log(newTasks);
        return newTasks;
      });
    }
    setInputValue("");
  }

  function removeItem(id) {
    setTasks((prevTask) => prevTask.filter((item) => item.id !== id));
  }

  function handleEdit(id, newUserInput) {
    setTasks((prevTask) => {
      return prevTask.map((task) => {
        if (task.id === id) {
          return { ...task, task: newUserInput };
        } else {
          return task;
        }
      });
    });
  }

  function date() {
    let today = new Date();
    let options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    let formattedDate = today.toLocaleDateString("en-US", options);
    return formattedDate;
  }
  return (
    <main className="flex items-center flex-col mt-11">
      <div className="bg-white py-6 px-6 rounded-md ">
        <div>
          <h1 className="text-gray-400 font-medium mb-10">{date()}</h1>
          <label
            htmlFor="price"
            className="block font-medium text-gray-800 mb-2"
          >
            Provide input
          </label>
          <div className="handle-add-task">
            <input
              type="text"
              id="price"
              value={inputValue}
              className="block w-full rounded-l-md border-0 py-1.5 pl-7 pr-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 shadow-inner"
              placeholder="Add your task"
              onChange={(event) => setInputValue(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  addTask();
                }
              }}
            />
            <button
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-inherit rounded-r-md shadow"
              onClick={addTask}
              type="submit"
            >
              Add
            </button>
          </div>
        </div>

        {/* This is the tasks container */}
        <div className="flex flex-col mt-2">
          <h1 className="mt-2 text-gray-400 font-medium">Added Tasks</h1>
          {tasks.map((task) => (
            <TasksAppendBody
              key={task.id}
              del="Del"
              id={task.id}
              edit="Edit"
              task={task.task}
              onRemove={() => removeItem(task.id)}
              onEdit={handleEdit}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
