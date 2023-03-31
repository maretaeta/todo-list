import { useEffect, useState } from "react";
import AddTaskForm from "../components/AddTaskForm";
import UpdateForm from "../components/UpdateForm";
import ToDo from "../components/ToDo"
import DeleteTodo from "../components/DeleteTodo"
import Calendar from "./Calendar";
import SearchTodo from "./SearchTodo";

function List(){
const initialState = JSON.parse(localStorage.getItem("toDo")) || []
const [newTask, setNewTask] = useState("");
const [toDo, setToDo] = useState(initialState);
const [updateData, setUpdateData] = useState("");

//  Save data
useEffect(() => {
    localStorage.setItem("toDo", JSON.stringify(toDo))
},[toDo])

// Add task
const addTask = () => {
  if (newTask) {
    let num = toDo.length + 1;
    let newEntry = { id: num, title: newTask, status: false };
    setToDo([...toDo, newEntry]);
    setNewTask("");
  }
};

// Delete all
const clearList = () => {
  setToDo([]);
}

// Delete task
const deleteTask = (id) => {
  let newTasks = toDo.filter((task) => task.id !== id);
  setToDo(newTasks);
};

// Strikethough
const markDone = (id) => {
  let newTask = toDo.map( task => {
    if( task.id === id ) {
      return ({ ...task, status: !task.status })
    }
    return task;
  })
  setToDo(newTask);
}

// Cancel update
const cancelUpdate = () => {
  setUpdateData("");
};

// Change task for update
const changeTask = (e) => {
  let newEntry = {
    id: updateData.id,
    title: e.target.value,
    status: updateData.status ? true : false,
  };
  setUpdateData(newEntry);
};

// Update task
const updateTask = () => {
  let filterRecords = [...toDo].filter((task) => task.id !== updateData.id);
  let updatedObject = [...filterRecords, updateData];
  setToDo(updatedObject);
  setUpdateData("");
};

return (
  
    <div className="p-3">
        <h3 className="text-2xl lg:text-4xl font-semibold pl-3 pb-6 pt-5">
          Binar ToDo List
        </h3>

    {updateData && updateData ? (
      <UpdateForm
        updateData={updateData}
        changeTask={changeTask}
        updateTask={updateTask}
        cancelUpdate={cancelUpdate}
      />
    ) : (
      <AddTaskForm
        newTask={newTask}
        setNewTask={setNewTask}
        addTask={addTask}
      />
    )}

    <Calendar />

    {/* Display ToDos */}
    {toDo && toDo.length ? "" : "Create your task..."}
    <ToDo
      toDo={toDo}
      markDone={markDone}
      setUpdateData={setUpdateData}
      deleteTask={deleteTask}
      clearList={clearList}
    />

    <DeleteTodo 
    clearList={clearList}
    />
  </div>
);
}

export default List;
