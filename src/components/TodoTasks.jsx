import React from "react";

function TasksAppendBody(props) {
  const [isEditing, setIsEditing] = React.useState(true);
  const [newUserInput, setUserInput] = React.useState("");

  //   function handleEdit() {
  //     if (!isEditing) {
  //       props.onEdit(props.id, newUserInput);
  //     }
  //     setIsEditing(!isEditing);
  //   }
  //  or use the above
  function handleEdit() {
    // Check if the component is not in the editing state
    if (isEditing === false) {
      props.onEdit(props.id, newUserInput);
      setUserInput("");
    } else {
      setUserInput(props.task);
    }
    setIsEditing(!isEditing);
  }

  function passUserInputState(event) {
    setUserInput(event.target.value);
  }

  return (
    <>
      <div className="added-task-grp flex mt-4">
        <input
          type="text"
          id="price"
          className="block rounded-l-md border-0 py-1.5 pl-7 pr-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 shadow-sm w-full"
          value={isEditing ? props.task : newUserInput}
          disabled={isEditing}
          onChange={passUserInputState}
        />
        <button
          className="del-btn bg-white hover:bg-gray-100 text-red-600 font-semibold py-2 px-4 border border-inherit shadow"
          onClick={props.onRemove}
        >
          {props.del}
        </button>
        <button
          className="bg-white hover:bg-gray-100 text-blue-400 font-semibold py-2 px-4 border border-inherit rounded-r-md shadow"
          onClick={handleEdit}
        >
          {isEditing ? props.edit : "Save"}
        </button>
      </div>
    </>
  );
}
export default TasksAppendBody;
