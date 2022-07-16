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

//const userRouter = require('./routes/users')
//const postRouter = require('./routes/posts')
//app.use("/users", userRouter)
//app.user("/post", postRouter)  

app.listen(port, () => {`Example app listening on port ${port}`})