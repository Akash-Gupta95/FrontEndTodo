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

      setTaskShow(data);
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
                </>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default ShowTask;
