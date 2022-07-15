const express = require('express')
const { connect } = require('./database')
const cors = require('cors')
//const { createConnection } = require('mysql2');
//const Connection = require('mysql2/typings/mysql/lib/Connection');

const db = require('./database')
const app = express()
const port = 5000

app.use(cors)
app.use(express.json)//Allows json to be processed :currently breaks the program
app.use(express.urlencoded({extended: false}))//Middleware to access urlencoded request

app.get('/', (req, res) => {
    //res.sendFile(__dirname+'/client.html')
    res.send('The server is active').status(200)
})
app.get('/userLogIn', (req, res) => {
    var sql = `SELECT customerID FROM  passwords WHERE customerID = ?  AND password = ?`
    db.query(sql, [req.body.customerID, req.body.password]),
    function(err, results, fields){
        console.log(results)
        console.log(1)
    }
})
app.listen(port, () => {console.log(`Server listening on port ${port}`)});