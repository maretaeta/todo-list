import React from 'react'

const DeleteTodo = ({clearList}) => {
  return (
    <div className='text-center justify-center pt-7 flex gap-8 md:gap-10 lg:gap-16'> 
         <button
         onClick={clearList}
            type="submit"
            class=" ml-2 text-sm text-center text-white bg-red-600 rounded-sm w-44 md:w-60 lg:w-64 h-8"
          >
            Delete All Task
          </button>

          <button
          
            type="submit"
            class=" ml-2 text-sm text-center text-white bg-red-600 rounded-sm w-44 md:w-60 lg:w-64 h-8"
          >
            Delete Done Task
          </button>
    </div>
  )
}

export default DeleteTodo