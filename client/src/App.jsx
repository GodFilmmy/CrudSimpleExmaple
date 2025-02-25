import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Axios from "axios";
import "./App.css";

import EmployeeList from "./EmployeeList";
import AddEmployee from "./AddEmployee";
import UpdateEmployee from "./UpdateEmployee";
function App(){

  const [employeeList , setEmployeeList ]= useState([]);
  const getEmployee = () =>{
    Axios.get("http://localhost:3001/employees").then((response)=>{
      setEmployeeList(response.data);
    })
  }
  const deleteEmployee = (id) =>{
    Axios.delete(`http://localhost:3001/delete/${id}`).then(()=>{
      setEmployeeList(employeeList.filter((val)=> val.id !== id));
      //it employee list will list only the filter that is not equal to the give id
      /*
      id parameter passed represent unique id --> ${val.id}
      employeeList is the arr
      .filter() arr methid that create new array contains only element that
      met the condition

      val -> each indivial item inside .filter()
      id -> id that you wanna delete
      val.id !== id -> check if the id of current employee (val.id)
      is not equal to id of the employee you want to delete
      //if the id is not equal to id you wanna delete return ture 
      this employee will not be included
      //if this id is equal to id you wanna delete it return false
      this emplotee will not included this filter array

      */
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
          <Route path="/" element={<EmployeeList deleteEmployee={deleteEmployee} employeeList={employeeList}/>}/>
          <Route path="/add" element={<AddEmployee getEmployee={getEmployee}/>}/>
          <Route path="/update/:id" element={<UpdateEmployee getEmployee={getEmployee}/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App;