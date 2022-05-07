const express = require('express')
const app = express()

app.set("view engine", "ejs")//sets engine as ejs


app.get("/", (req,res) => {
    console.log("here")
    res.render('index' ,{text: 'Word'})
})

const userRouter = require('./routes/users')
//const postRouter = require('./routes/posts')
app.use("/users", userRouter)
//app.user("/post", postRouter)  

app.listen(3000)