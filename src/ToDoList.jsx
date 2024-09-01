import React, {useState} from 'react';

function ToDoList(){

    const [tasks, setTasks]= useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim()!==""){
            setTasks(t=>[...t, newTask]);
        setNewTask("");
        }
    }

    function deleteTask(index){
        const updatedTasks=tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveUpTask(index){
        if(index>0){
            const updatedTasks=[...tasks];
            [updatedTasks[index], updatedTasks[index-1]]=
            [updatedTasks[index-1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveDownTask(index){
        if(index<tasks.length-1){
            const updatedTasks=[...tasks];
            [updatedTasks[index], updatedTasks[index+1]]=
            [updatedTasks[index+1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }


    return(
    <div className="todolist">
        <h1>To-Do List</h1>

        <div>
            <input 
                  type="text" 
                  placeholder="Enter new Task"
                  value={newTask}
                  onChange={handleInputChange}/>
            <button className="AddBtn" onClick={addTask}>
                Add to list
            </button>
        </div>

        <ol>
            {tasks.map((task, index)=>
            <li key={index}>

                <span className="text">{task}</span>

                <button className="deleteBtn" 
                onClick={() => deleteTask(index)}>
                Delete</button>

                <button className="movebtn"
                onClick={()=>moveUpTask(index)}>
                ☝️</button>

                <button className="movebtn"
                onClick={()=>moveDownTask(index)}>
                👇</button>

            </li>)}
        </ol>
    </div>
    );
}

export default ToDoList