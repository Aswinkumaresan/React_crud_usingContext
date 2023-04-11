import React, { useContext, useEffect, useState } from "react";
// import FormTask from './FormTask';
import { Link, json, useNavigate } from "react-router-dom";
import { StateContext } from "../Context/StateContext";

const Home = () => {
  //context
  //   const statetext=useContext(StateContext);
  const { state, dispatch } = useContext(StateContext);
  console.log("state", state,"dispatch", dispatch);

  // const arrayvalue = JSON.parse(localStorage.getItem("arrayvalue"));
  // // localStorage.removeItem('taskArray')
  // console.log(arrayvalue);

  const [items, setItems] = useState(state.arrayvalue);
  // const[editData,setEdit]=useState(null)

  const removeItem = (id) => {
    setItems(() => items.filter((item, index) => index !== id));
    console.log(items);
  };
  localStorage.setItem("arrayvalue", JSON.stringify(items));
  // const editItem = (editobj)=>{
  //     console.log(editobj)
  //     setEdit(editobj)
  //    if(editData !== null){
  //     localStorage.setItem("edit",JSON.stringify(editData))
  //    gotoForm(editData);
  //    }else{
  //     return
  //    }
  // // }
  // const editItem =(obj)=>{

  //     localStorage.setItem("edit",JSON.stringify(obj))
  //     gotoForm();
  //  }
  const editItem = (obj) => {
    navigate(`/FormTask?name=${obj.name}`);
  };

  //go to form function
  let navigate = useNavigate();
  const gotoForm = () => {
    navigate("/FormTask");
  };
  // let navie=useNavigate();
  // const gotoEdit=()=>{
  //    navie("/edit")
  // }

  return (
    <div style={{ padding: "0 120px" }}>
      <h1> Task List:</h1>
      <table
        border="1px solid"
        style={{ textAlign: "center", width: "100%", margin: "120px auto" }}
      >
        <thead>
          <tr>
            <th>Id</th>
            <th>TaskName</th>
            <th>Description</th>
            <th>Status</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {items?.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.des}</td>
              <td>{item.iscomplete}</td>
              <td>
                <button onClick={() => editItem(item)}>Edit</button>
              </td>
              {/* <td> <Link to={`/Form/${editData.name}`}>Edit</Link></td> */}
              <td>
                <button onClick={() => removeItem(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={() => gotoForm()}>Go To Form</button>
        <button onClick={() => dispatch({ type: "LOGIN", payload: true })}>
          CLick
        </button>
      </div>

      {/* context   */}
      {/* {state?.name} */}
    </div>
  );
};

export default Home;
