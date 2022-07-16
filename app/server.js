const express = require('express')
const cors = require('cors')
const mysql = require('mysql2')
const db = require('./database')
const app = express()
const port = 5000

app.use(express.json())//allows json to be parsed
app.use(cors())//allows curl commands


//app.set("view engine", "ejs")//sets engine as ejs

app.get("/", (req,res) => {
    console.log("here")
    //res.send("ho")
    res.sendFile(__dirname+'/client.html')
    //res.render('index' ,{text: 'Word'})
})
app.get('/getCustomer/:id', (req,res) => {
    console.log(1)
    const id = req.params.id
    db.query(
      'SELECT * FROM customers WHERE CustomerID =  ?',
      [id],
      function(err,results,fields){
        if(err){res.statusCode(400)}
        else{res.send(results)}
      }
    )
})

app.post('/addCustomer', (req,res) =>{
    console.log("here2")
    console.log(req.body.customerID, req.body.forename, req.body.surname, req.body.email)
    var sql = `INSERT INTO customers(customerID,forename,surname,email)
            VALUES (?, ?, ?, ?)`;
    var sql2 = `INSERT INTO passwords(password,customerID)
    VALUES (?,?)`;
    db.query(sql,[req.body.customerID, req.body.forename, req.body.surname, req.body.email]),
    function(err, results, fields)
    {
        if(err){res.statusCode(400)}
        else{res.statusCode(201)}
    },
    db.query(sql2,[req.body.password, req.body.customerID]),
    function(err, results, fields)
    {
        if(err){res.statusCode(400)}
        else{res.statusCode(201)}
    }
})


//const userRouter = require('./routes/users')
//const postRouter = require('./routes/posts')
//app.use("/users", userRouter)
//app.user("/post", postRouter)  

app.listen(port, () => {`Example app listening on port ${port}`})