const express = require('express');
const db = require('./database');
//const { post } = require('./routes/users');
const app = express();
const port = 5000;

app.use(express.json);//Allows json to be processed
app.use(express.urlencoded({extended: false}));//Middleware to access urlencoded request

const users = [
    { userName: 'admin', password: 'admin'}
];
function findUser(req,res, next) {//SQL command that checks if user is in the system
    const { userName, email} = req.body;//Deconstruct
    //Need to do a search in the database
    if(true){
        res.status(200).send({msg : "User found"});
        next();
    }
    else{
        res.status(404).send({msg : "User not found"});
    }

};
app.get('/', (req,res) => {
    res.status(200).send("Localhost reached")
})

app.post('/', (req,res) => {
    const { userName, password} = req.body;
    if(userName && password){
        console.log(userName);
    }
});

app.get("/LogIn", (req,res) => {
    const { userName, password } = req.body;
    const user = users.find((user) => user.userName === userName && user.password === password);
    
    if(user){
        res.status(200).send(user);
    }
    else{
        res.status(404).send("User not recognised");
    }
});
app.post("/SignUp", (req, res) => {
    const user = req.body;
    users.push(user);
    res.status(201);
});


//const userRouter = require('./routes/users')
//const postRouter = require('./routes/posts')
//app.use("/users", userRouter)
//app.user("/post", postRouter)  

app.listen(port, () => {console.log("Server started on port "+port)});