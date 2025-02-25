import { Link } from "react-router-dom";
import UpdateEmployee from "./UpdateEmployee";

function EmployeeList({employeeList,deleteEmployee}){
    return(
        <div className="information">
            <hr/>
            <br/>
            {employeeList.map((val)=>(
                <div className="card" key={val.id}>
                    <div className="card-body">
                        <p>Name: {val.name}</p>
                        <p>Age: {val.age}</p>
                        <p>Country: {val.country}</p>
                        <p>Position: {val.position}</p>
                        <p>Wage: {val.wage}</p>
                        <Link to={`/update/${val.id}`}>
                            <button>Update</button>
                        </Link>
                        <button onClick={()=>deleteEmployee(val.id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default EmployeeList;