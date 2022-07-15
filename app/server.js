const express = require('express')
const { connect } = require('./database')
const cors = require('cors')
//const { createConnection } = require('mysql2');
//const Connection = require('mysql2/typings/mysql/lib/Connection');

const db = require('./database')
const app = express()
const port = 8000
Attendees=[
    {
    "id":"1",//Int Object identifier
    "name":"a",//String
    "notes":"b"//String
    },
    {
      "id":"2",//Int Object identifier
      "name":"a",//String
      "notes":"b"//String
    }
];

app.use(cors)
app.use(express.json)//Allows json to be processed :currently breaks the program
app.use(express.urlencoded({extended: false}))//Middleware to access urlencoded request

app.get('/', (req, res) => {
    //res.sendFile(__dirname+'/client.html')
    res.send('The server is active').status(200)
})
app.get('/attendees', (req, res) => {//Sending json list.
    res.json(Attendees).status(200);
  });










app.get('/userLogIn', (req, res) => {
    console.log(1)
    var sql = `SELECT customerID FROM  passwords WHERE customerID = ?  AND password = ?`;
    db.query(sql, [req.body.customerID, req.body.password]),
    function(err, results, fields){
        res.send(results)   
    }
})
app.listen(port, () => {console.log(`Server listening on port ${port}`)});

app.use((err, req, res, next) => {
    //Default error handler template
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });