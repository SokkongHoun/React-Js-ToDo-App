import React from "react";
import "../index.css";

export function TodoList() {
  const [tasks, setTasks] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");
  function TasksBody(props) {
    return (
      <>
        <div className="added-task-grp flex mt-4">
          <input
            type="text"
            id="price"
            className="block rounded-l-md border-0 pl-7 pr-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 shadow-sm "
            value={props.task}
            disabled={props.enable}
          />
          <button
            className="del-btn bg-white hover:bg-gray-100 text-red-600 font-semibold py-2 px-4 border border-inherit shadow "
            onClick={props.onRemove}
          >
            {props.del}
          </button>
          <button className="bg-white hover:bg-gray-100 text-blue-400 font-semibold py-2 px-4 border border-inherit rounded-r-md shadow">
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

  return (
    <main className="flex items-center flex-col mt-11">
      <div className="bg-white py-6 px-6 rounded-md ">
        <h1 className="font-medium text-center text-gray-800 mb-2 ">
          To-Do List
        </h1>
        <div>
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
            <TasksBody
              key={task.id}
              del="Del"
              edit="Edit"
              task={task.task}
              onRemove={() => removeItem(task.id)}
              enable={true}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
