const express = require('express');
//const { createConnection } = require('mysql2');
//const Connection = require('mysql2/typings/mysql/lib/Connection');
const db = require('./database');
const app = express();
const port = 5000;

//app.use(express.json);//Allows json to be processed :currently breaks the program
app.use(express.urlencoded({extended: false}));//Middleware to access urlencoded request

function CheckUserDetails(name,email,password){
    const user = {
        userName: name,
        userEmail: email,
        userPassword: password
    }
    db.query(
        'SELECT * FROM `customers`, `passwords` WHERE `customerID` = ? AND `email` = ? AND `password` = ?',
        [user.userName, user.userEmail, user.userPassword],
        function(err, results){
            console.log(results);
            console.log(err);
        }
    )
}
function AddUser(userName, forename, surname, email, password){
    const user = {
        userID: userName,
        userForename: forename,
        userSurname: surname,
        userEmail: email,
        userPassword: password
    }
    db.query(
        'INSERT INTO customers(customerID, forename, surname, email) VALUES ('?');':
        [user.userID,user.userForename,user.userSurname,user.userEmail],
        function(err,results){
            console.log(results)
        }
    );
    db.query(
        'INSERT INTO passwords(password,customerID) VALUES ('?');':
        [user.userPassword, user.userID],
        function(err,results){
            console.log(results)
        }
    );
}




app.get('/', (req, res) => {
  res.send('The server is active').status(200)
});
app.post('/LogIn', (req,res) =>{
    const {userName , email, password} = req.body;
    if(true){
        res.send("User found").status(200);
    }
});



app.listen(port, () => {console.log(`Server listening on port ${port}`)});