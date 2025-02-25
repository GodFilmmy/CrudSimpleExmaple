import { useState } from "react";
import Axios from "axios";

function AddEmployee({getEmployee}){
    const [name,setName] = useState("");
    const [age, setAge] = useState(0);
    const [country, setCountry] = useState("");
    const [position, setPosition] = useState("");
    const [wage, setWage] = useState(0);
    const addEmployee = ()=>{
        Axios.post("http://localhost:3001/create",{
            name, //Sending the 'name' value from the state
            age,
            country,
            position,
            wage
        }).then(()=>{
            getEmployee(); 
            //Once the employee has been added we wnat to refest the employlist
            //getEmployee is from parameter 
        })
    }
    
    return(
        <>
        <h2>Add employee</h2>
        <form>
            <div>
                <label>Name: </label>
                <input
                    type="text"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
            </div>
            <div>
                <label>Age: </label>
                <input
                    type="number"
                    value={age}
                    onChange={(e)=>setAge(e.target.value)}
                />
            </div>
            <div>
                <label>Country: </label>
                <input
                    type="text"
                    value={country}
                    onChange={(e)=>setCountry(e.target.value)}
                />
            </div>
            <div>
                <label>Position: </label>
                <input
                    type="text"
                    value={position}
                    onChange={(e)=>setPosition(e.target.value)}
                />
            </div>
            <div>
                <label>Wage: </label>
                <input
                    type="number"
                    value={wage}
                    onChange={(e)=>setWage(e.target.value)}
                />
            </div>
            <button onClick={addEmployee}>Add</button>
        </form>
        </>
    )
}
export default AddEmployee;