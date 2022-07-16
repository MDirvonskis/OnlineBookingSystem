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
    const id = req.params.id
    db.query(
      'SELECT * FROM customers WHERE CustomerID =  ?',
      [id],
      function(err,results,fields){
        //console.log(results)
        //console.log(fields)
        //console.log(JSON.parse(results))
        res.send(results)
        //console.log(1)
      }
    )
})

app.post('/addCustomer', (req,res) =>{
    console.log("here2")
    var sql = `INSERT INTO customers(customerID,forename,surname,email)
            VALUES (?, ?, ?, ?)`;
    db.query[req.body.cutomerID, req.body.forename, req.body.surname, req.body.email],
    function(err,results,fields){
        //console.log(results)
        //console.log(fields)
        //console.log(JSON.parse(results))
        res.send(results)
        //console.log(1)
    }
})


//const userRouter = require('./routes/users')
//const postRouter = require('./routes/posts')
//app.use("/users", userRouter)
//app.user("/post", postRouter)  

app.listen(port, () => {`Example app listening on port ${port}`})