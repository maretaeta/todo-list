import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleCheck, faPen, faTrashCan
} from '@fortawesome/free-solid-svg-icons'

const ToDo = ({ toDo, markDone, setUpdateData, deleteTask }) => {
  return(
    <>
      {toDo && toDo
      .sort((a, b) => a.id > b.id ? 1 : -1)
      .map( (task, index) => {
        return(
          <React.Fragment key={task.id} >
          
           <div className='border rounded m-[15px] overflow-hidden mx-auto'> 
              <div className= { task.status ? 'done, line-through' : '' }>
                <div className='flex justify-between p-4 cursor-pointer '>
                <span className="font-xs mx-2 font-semibold">{task.title}</span>
              
                <div className="flex gap-4">
                <span title="Completed / Not Completed"
                  onClick={ (e) => markDone(task.id) }
                >
                  <FontAwesomeIcon icon={faCircleCheck} className="text-yellow-500" />
                </span>
                
                {task.status ? null : (
                  <span title="Edit"
                    onClick={ () => setUpdateData({ 
                      id: task.id, 
                      title: task.title, 
                      status: task.status ? true : false
                    }) }
                  >
                    <FontAwesomeIcon icon={faPen} className="text-green-500"/>
                  </span>
                )}

                <span title="Delete"
                  onClick={() => deleteTask(task.id)}
                >
                  <FontAwesomeIcon icon={faTrashCan} className="text-red-500" />
                </span>
                </div> 
                </div>
              </div>           
            </div>
          </React.Fragment>
        )
      })
      }  
    </>
  )
}

export default ToDo;