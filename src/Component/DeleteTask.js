import React from 'react'

const DeleteTask = () => {

    // const deleteTask = async()=>{
    //     const response = await fetch("/delete");
    //     const data = await response.json()


        
    // }

    const handleSubmit= async(e)=>{
        e.preventDefault();
        const addTask = {task , des};
    const res =  await axios.post("/post" , addTask)

      console.log(res);

}



  return (
    <div>
        <div typeof='submit' className="btn btn-denger" onSubmit={handleSubmit}>Delete</div>
    </div>
  )
}

export default DeleteTask