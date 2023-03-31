const AddTaskForm = ({ newTask, setNewTask, addTask }) => {
    return(
      <>
        <div className="flex">
          <input
          value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            type="text"
            class="bg-[#F8F8F8] text-sm rounded-md block sm:w-72 w-80 h-8 lg:w-[75vw] md:w-[70vw] pl-10 p-2.5 "
            placeholder="Add new todo"
            required
          />
          <button
          onClick={addTask}
            type="submit"
            class=" ml-2 text-sm text-center text-white bg-[#24A3B6] rounded-sm w-28 h-8"
          >
            Submit
          </button>
           
         
        </div>
       
      </>
    )
  }
  
  export default AddTaskForm;