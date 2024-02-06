import React, { useEffect, useState, useReducer } from "react";
import axios from "axios";
import "./ShowTask.css";

const ShowTask = () => {
  const [taskShow, setTaskShow] = useState("");
  const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    const FatchTask = async () => {
      const response = await fetch("https://todoapp-95zv.onrender.com/get");
      const data = await response.json();

       await setTaskShow(data);
      forceUpdate();
    };

    FatchTask();
  }, [reducerValue]);

  // delete function

  const handleDelete = async (e) => {
    let id = e.target.id;
    try {
      await axios.delete(`https://todoapp-95zv.onrender.com/delete/${id}`);
    } catch (error) {
      console.log("delete Error: " + error);
    }
  };


  // Update Task
  const handleUpdate = async (e)=>{
    let id = e.target.id;

    const task = prompt("Enter task")
    const des = prompt("Enter description")
    const addTask = {task , des};

    console.log(task)
    // const li = document.createElement(li);

    try {
      await axios.put(`https://todoapp-95zv.onrender.com/update/${id}`,addTask);
    } catch (error) {
      console.log("Update Error: " + error);
    }
  }

  let count=1;

  return (
    <>
      <div className="container list-task">
        <ul className="list-group my-5 ">
          {taskShow && taskShow.map((w) => {
              return (
                <>
                
                  <li
                    key={w._id}
                    className="list-group-item"
                  >
                   <span className="taskText">{count+++ '.'}</span> {w.task}
                    <p className="text-white taskDes"> {w.des}</p>
                  </li>
                  <div className="buttons">
                  <div className="button deleteButton">
                    <button
                      typeof="submit"
                      id={w._id}
                      className="btn btn-denger d-flex deleteDiv"
                      onClick={handleDelete}
                    >
                      Delete
                    </button>
                  </div>

                  <div className="button deleteButton">
                    <button
                      typeof="submit"
                      id={w._id}
                      className="btn btn-denger d-flex deleteDiv"
                      onClick={handleUpdate}
                    >
                      Update
                    </button>
                  </div>
                  </div>
                </>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default ShowTask;
