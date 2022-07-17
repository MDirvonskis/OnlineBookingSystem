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
    //console.log(1)
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
app.get('/getALLCustomers', (req,res) => {
    console.log(1)
    db.query(`SELECT * FROM customers`,
    function(err, results, fields)
    {
        //console.log(results)
        if(err){res.statusCode(400)}
        else{res.send(results)}
    })
    
})

app.post('/addCustomer', (req,res) =>{
    //console.log(req.body.customerID, req.body.forename, req.body.surname, req.body.email)
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
app.post('/addRoom', (req,res) =>{
    //RoomID int
    //capacity varchar? need to change database later
    //console.log(req.body.roomID, req.body.capacity, req.body.info)
    var sql = `INSERT INTO rooms(roomID,capacity,info)
            VALUES (?, ?, ?)`;
    db.query(sql,[req.body.roomID, req.body.capacity, req.body.info]),
    function(err, results, fields)
    {
        if(err){res.statusCode(400)}
        else{res.statusCode(201)}
    }
})
app.post('/addBooking', (req,res) =>{
    //console.log(req.body.bookingID,req.body.dateOfBooking,req.body.dateOfStay,req.body.dateOfDeparture,req.body.customerID, req.body.roomID)
    var sql = `INSERT INTO Bookings(BookingID, dateOfBooking, dateOfStay, dateOfDeparture, customerID, RoomID)
            VALUES (?, ?, ?, ?, ?,?)`;
    db.query(sql,[req.body.bookingID,req.body.dateOfBooking,req.body.dateOfStay,req.body.dateOfDeparture,req.body.customerID, req.body.roomID])
})
app.delete('/remCustomer/:id', (req,res) => {
    //console.log(1)
    const id = req.params.id
    var sql = `DELETE FROM passwords WHERE CustomerID = ?`;
    var sql2 = `DELETE FROM bookings WHERE CustomerID = ?` 
    var sql3 = `DELETE FROM customers WHERE CustomerID =  ?`;
    db.query(sql, [id])
    db.query(sql2, [id])
    db.query(sql3, [id]) 
})
app.delete('/remRoom/:id', (req,res) => {
    //console.log(1)
    const id = req.params.id
    var sql = `DELETE FROM bookings WHERE RoomID =  ?`;
    var sql2 = `DELETE FROM rooms WHERE RoomID =  ?`;
    db.query(sql, [id])
    db.query(sql2, [id])
})
app.delete('/remBookings/:id', (req,res) => {
    //console.log(1)
    const id = req.params.id
    var sql = `DELETE FROM bookings WHERE BookingID =  ?`;
    db.query(sql, [id])
})

//const userRouter = require('./routes/users')
//const postRouter = require('./routes/posts')
//app.use("/users", userRouter)
//app.user("/post", postRouter)  

app.listen(port, () => {`App listening on port ${port}`})