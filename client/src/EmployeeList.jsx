function EmployeeList({employeeList}){
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

                    </div>
                </div>
            ))}
        </div>
    )
}
export default EmployeeList;