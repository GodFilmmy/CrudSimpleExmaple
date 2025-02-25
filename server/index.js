const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "KmuttCrudTest1",
    host: "localhost",
    password: "kmuttcrudtest888",
    database: "employeeSystem"
});

//get All employees
app.get('/employees', (req,res)=>{
    db.query("SELECT * FROM employees", (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
})

//get single emplyee by id
app.get('/employees/:id',(req,res)=>{
    const id = req.params.id;
    db.query("SELECT * FROM employees WHERE id = ?",[id],(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result[0]);
        }
    })
})

//create a new 
app.post('/create' , (req,res)=>{
    const {name,age,country,position,wage} = req.body;
    db.query("INSERT INTO employees (name,age,country,position,wage) VALUES(?,?,?,?,?)",
        [name,age,country,position,wage],(err,result)=>{
            if(err){
                console.log(err);
            }else{
                res.send("Employee add sucessfully")
            }
        }
    )
})

app.listen(3001, ()=>{
    console.log("Server running on port 3001");
})