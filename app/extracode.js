function CheckUserDetails(name,password){
    /*const user = {
        userName: name,
        userEmail: email,
        userPassword: password
    }*/
    //db.connect();//start the connection to db.
    db.query(
        'SELECT customerID FROM `passwords` WHERE `customerID` = ? AND `password` = ?',
        [name, password],
        function(err, results, fields){
            console.log(err);
            console.log(results);
            console.log(fields);
            return results;
            //console.log(err);
        }
    )
    //onnect.end();//sends the connection to db.
}
function AddUser(userName, forename, surname, email, password){
    const user = {
        userID: userName,
        userForename: forename,
        userSurname: surname,
        userEmail: email,
        userPassword: password
    };
    db.query(
        'INSERT INTO customers(customerID, forename, surname, email) VALUES ('?');':
        [user.userID,user.userForename,user.userSurname,user.userEmail],
        function(err,results){
            console.log(results);
        }
    );
    db.query(
        'INSERT INTO passwords(password,customerID) VALUES ('?');':
        [user.userPassword, user.userID],
        function(err,results){
            console.log(results);
        }
    );
};
app.post('/LogIn', (req,res) =>{
    //const {userName , email, password} = req.body;
    //console.log(req.body);
    const {name, password}=req.body
    //console.log(name,email,password)
    //CheckUserDetails(name, password);
    //console.log(CheckUserDetails(name, password).contains(name));
    console.log(CheckUserDetails(name,password));
    if(CheckUserDetails(name,password)){
        res.send("User found").status(200);
    };
});



app.listen(port, () => {console.log(`Server listening on port ${port}`)});
