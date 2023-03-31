import React, { useState } from "react";
import data from '../components/data.json'

function TodoForm() {
    return (
      <div className="p-3" id="TodoForm">
        <h3 className="text-2xl lg:text-4xl font-semibold pl-3 pb-6">
          Binar ToDo List
        </h3>
  
        <div className=" flex">
          <input
          // value={newTask}
            // onChange={(e) => setNewTask(e.target.value)}
            type="text"
            class="bg-[#F8F8F8] text-sm rounded-md block sm:w-72 w-96 h-8 lg:w-[85vw] md:w-[80vw] pl-10 p-2.5 "
            placeholder="Add new todo"
            required
          />
          <button
            type="submit"
            class="p-2 ml-2 text-sm text-center text-white bg-[#24A3B6] rounded-sm w-28"
          >
            Submit
          </button>
        </div>
          <div className=''>
            <div className='border rounded m-[15px] overflow-hidden mx-auto'> 
              <div className='flex items-center justify-between p-4 cursor-pointer'>
                   <p className='font-xs mx-2 font-semibold '>{data.task}</p>
                   <div className="flex gap-4">
                   <input type="checkbox" />
                   <ion-icon className="" name="pencil-outline" ></ion-icon>
                   <ion-icon name="trash-outline"></ion-icon> 
                   </div>
              </div>
            </div>
          </div>
          </div>
        )
  //     })
  //   }
  }

export default TodoForm;
