import React from 'react'

const DeleteTodo = ({clearList}) => {
  return (
    <div className='text-center justify-center pt-7 flex'> 
         <button
         onClick={clearList}
            type="submit"
            class=" ml-2 text-sm text-center text-white bg-red-600 rounded-sm w-44 h-8"
          >
            Delete All Task
          </button>

          <button
          
            type="submit"
            class=" ml-2 text-sm text-center text-white bg-red-600 rounded-sm w-44 h-8"
          >
            Delete Done Task
          </button>
    </div>
  )
}

export default DeleteTodo