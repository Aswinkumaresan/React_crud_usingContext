import React, { useReducer } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "../Form/Login";
import FormTask from "../Form/FormTask";
import Home from "../Form/Home";
import { StateContext } from "../Context/StateContext";
import { initialState, stateReducer } from "../Context/Reducer";

const Router = () => {

  //context
   const[state,dispatch] = useReducer(stateReducer,initialState); 

  return (
    // <div>Router</div>
    <StateContext.Provider value={{ state,dispatch}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/FormTask" element={<FormTask />}></Route>
        </Routes>
      </BrowserRouter>
    </StateContext.Provider>
  );
};

export default Router;
