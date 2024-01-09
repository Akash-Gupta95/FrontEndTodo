import React, { useState } from "react";
import axios from 'axios';

import './Task.css';




const Task = () => {
    const [task , setTask] = useState("");
    const [des , setDes] = useState("");
     


const handleSubmit= async(e)=>{
        e.preventDefault();
        const addTask = {task , des};
    const res =  await axios.post("/post" , addTask)

      console.log(res);

}

  return (
    <>
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3 inputDiv">
          <label htmlFor="AddTask" className="form-label">
            Add Task
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Add here..."
            id="AddTask"
            onChange={(e)=>{setTask(e.target.value)}}
          />
        </div>
        <div className="mb-3 inputDiv">
          <label htmlFor="Description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Description"
            onChange={(e)=>{setDes(e.target.value)}}
            id="Description"
          />
        </div>
        <button type="submit" className="btn btn-primary addButton">
          Add
        </button>
      </form>
    </div>
    

</>
  );
};

export default Task;
