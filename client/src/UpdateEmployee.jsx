import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
function UpdateEmployee({getEmployee}){
    const editNavigateHome = useNavigate();
    const {id} = useParams(); //Get the employee id from the URl
    const [employee,setEmployee] = useState({
        name:"",
        age:0,
        country:"",
        position:"",
        wage:0
    })

    useEffect(()=>{
        Axios.get(`http://localhost:3001/employees/${id}`).then((response)=>{
            setEmployee(response.data);
        });
    },[id]);

    const updateEmployee = (e) =>{
        e.preventDefault();
        Axios.put("http://localhost:3001/update",{
            id,
            name:employee.name,
            age:employee.age,
            country:employee.country,
            position:employee.position,
            wage:employee.wage
        }).then(()=>{
            getEmployee();
            editNavigateHome("/");
        })
    }
    return(
        <>
        <h2>Update employee</h2>
        <form>
            <div>
                <label>Name: </label>
                <input
                    type="text"
                    value={employee.name}
                    onChange={(e)=>setEmployee({...employee,name:e.target.value})}
                />
            </div>
            <div>
                <label>Age: </label>
                <input
                    type="number"
                    value={employee.age}
                    onChange={(e)=>setEmployee({...employee,age:e.target.value})}
                />
            </div>
            <div>
                <label>Country: </label>
                <input
                    type="text"
                    value={employee.country}
                    onChange={(e)=>setEmployee({...employee,country:e.target.value})}
                />
            </div>
            <div>
                <label>Position: </label>
                <input
                    type="text"
                    value={employee.position}
                    onChange={(e)=>setEmployee({...employee,position:e.target.value})}
                />
            </div>
            <div>
                <label>Wage: </label>
                <input
                    type="number"
                    value={employee.wage}
                    onChange={(e)=>setEmployee({...employee,wage:e.target.value})}
                />
            </div>
            <button type="submit" onClick={updateEmployee}>Add</button>
        </form>
        </>
    )

}
export default UpdateEmployee;