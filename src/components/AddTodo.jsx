import { IoIosAddCircle } from "react-icons/io";

import { useRef, useState } from "react";

function AddTodo({ onNewItem }) {
  // const [todoName, setTodoName] = useState();
  // const [dueDate, setDueDate] = useState();
// anpthee way declare the hooks
const todoNameElement=useRef();
const todoDuedateElement=useRef();
  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  // };

  // const handleDateChange = (event) => {
  //   setDueDate(event.target.value);
  // };

  const handleAddButtonClicked = (event) => {
    const todoName=todoNameElement.current.value;
    const dueDate=todoDuedateElement.current.value;
    todoNameElement.current.value="";
    todoDuedateElement.current.value="";
    onNewItem(todoName, dueDate);
    // setDueDate("");
    // setTodoName("");
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
            // value={todoName}
            // onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" 
          ref={todoDuedateElement}
          // value={dueDate} 
          // onChange={handleDateChange}
           />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButtonClicked}
          >
            <IoIosAddCircle />

          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
