import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Axios from "axios";
import "./App.css";

import EmployeeList from "./EmployeeList";
import AddEmployee from "./AddEmployee";
function App(){

  const [employeeList , setEmployeeList ]= useState([]);
  const getEmployee = () =>{
    Axios.get("http://localhost:3001/employees").then((response)=>{
      setEmployeeList(response.data);
    })
  }
  
  useEffect(()=>{
    getEmployee();
  },[])
  return(
    <Router>
      <div className="App Container">
        <h1>Employee information</h1>
        <nav>
          <Link to = "/add">Add Employee</Link>
        </nav>
        <Routes>
          <Route path="/" element={<EmployeeList employeeList={employeeList}/>}/>
          <Route path="/add" element={<AddEmployee getEmployee={getEmployee}/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App;