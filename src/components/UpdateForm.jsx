const UpdateForm = ({ updateData, changeTask, updateTask, cancelUpdate }) => {
    return(
      <>
        <div className="flex">
          <input
         value={ updateData && updateData.title }
         onChange={ (e) => changeTask(e)}
            type="text"
            class="bg-[#F8F8F8] text-sm rounded-md block sm:w-72 w-96 h-8 lg:w-[85vw] md:w-[80vw] pl-10 p-2.5 "
            placeholder="Add new todo"
            required
          />
           <button
           onClick={updateTask}
            type="submit"
            class=" ml-2 text-sm text-center text-white bg-[#24A3B6] rounded-sm w-28 h-8"
          >
            Update
          </button>
          <button
            onClick={cancelUpdate}
            type="submit"
            class=" ml-2 text-sm text-center text-white bg-[#24A3B6] rounded-sm w-28 h-8"
          >
           Cancel
          </button>
          
         
          </div>
     
      </>
    )
  }
  
  export default UpdateForm;