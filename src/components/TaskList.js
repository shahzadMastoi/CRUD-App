// import '../App.css'
import axios from "axios";
import React, { useEffect, useState } from "react";
import { deleteData,editData,getUserList, postData } from "../redux/actionCreator";
import { useDispatch,useSelector } from "react-redux";


const TaskList = () => {
  const [name, setName] = useState('')
  const [Id,setId]=useState(0)

  let data = {
    name:name
  }


  const selecter = useSelector(state => state.todoReducer)
  // console.log(selecter,"selectr");
  const dispatch = useDispatch()
  
  useEffect(() => {
  
    axios.get("http://localhost:8000/user").then((value) => {  
      dispatch(getUserList(value.data))
      
    });
  }, []);

  const handleSubmit =()=>{
    axios.post("http://localhost:8000/user", data)
    .then((response) => {
      dispatch(postData(response.data));
      setName('')
    })
    .catch((error) => {
      console.error('Error saving todo:', error);
    });

  }

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/user/${id}`)
    
      dispatch(deleteData(id));
    
  };

  const handleEdit = (id,Name) => {
    setName(Name)
    setId(id)

    
    
  };
  const updateData=()=>{
    console.log("edit id",Id,name);
    axios.patch(`http://localhost:8000/user/${Id}`,data)
    .then((response) => {
      dispatch(editData(response.data));
      setName('')
      setId(0)
    })
  }
  return (
    <div className="text-center">

<div className = "card bg-secondary text-white">
<div className="card-header text-center">
  <ul className=" card-header-pills text-center pt-4">
    <h1 className="text-white">TODO APP IN REDUX</h1>
  </ul>
</div>
<div className="card-body">


  <h2>ADD NEW TASK</h2><div className="justify-content-center text-align-center">
  <input type="text" className="rounded w-50 " id="newtask" value={name} onChange={(e)=> setName(e.target.value)}/>
  </div>
    <br></br>
    {Id?
    <button className='btn btn-primary' id='submit' onClick={()=>updateData()}>Update</button>
    :
    <button className='btn btn-primary' id='submit' onClick={handleSubmit}>Submit</button>
    
    }
  
</div>
</div>

      <div className="card ">
        <div className="card-header text-center  ">
          <h2 className="bg-secondary text-white rounded">TASK LIST</h2>
      
        </div>
        <div className="card-body bg-secondary">
          <table className="table table-bordered bg-primary">
            <thead className="bg-dark text-white">
              <tr>
                <th>#</th>
                <th>TITLE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {selecter.map((item, index) => {
                // console.log(item,"item");
                return (
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.name}</td>
                    
                    <td>
                      <button className='btn btn-success' onClick={() => handleEdit(item.id,item.name)}>Edit</button>
                      <button className='btn btn-danger mx-2' onClick={() => handleDelete(item.id)}>
                        Dell
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
