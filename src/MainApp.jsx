import React, {useState} from 'react';
import './mainapp.css';

export const MainApp = () => {

 const [query, setQuery] = useState("");
 const [tasks, setTasks] = useState([]); 

  return (
    <div className="MainApp">
        <div className='MainInput'>
        <input value={query} type="text" placeholder='Type your Task Here' onChange={(e) => {
        setQuery(e.target.value);
        }}/>
        <button onClick={() => {

            if (query !== ""){
                setTasks([{
                    name: query,
                    checked: false
                }, ...tasks])
            
            }
            setQuery("");
            
        } }>Add</button></div>

        <h1 className='task-heading'>Tasks:</h1>

        <div className="Task-List">
         {
          tasks.map((task, index) => {
            return <div className="Task__Item" key={index}>
                <input type='checkbox' className='Task__Input' checked={task.checked} onChange={() => {
                    const UpdatedTasks = [...tasks];
                    UpdatedTasks[index].checked = !UpdatedTasks[index].checked;
                    setTasks(UpdatedTasks);
                }}/>
                <span>{task.name}</span>
                {task.checked && <button onClick={() => {
                   const updatedTasks = tasks.filter((_, i) => i !== index);
                   setTasks(updatedTasks);
                    
                }}>Delete</button>}
            </div>
          })

         }
        </div>
</div>
  )
}
