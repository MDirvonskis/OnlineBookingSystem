# OnlineBookingSystem

# Start server
```
node server.js
```

# Installation Guide:

Install Express.js :https://expressjs.com/
```
npm init
npm install express
```

Install Vue.js :https://vuejs.org/
```
npm install vue 
npm install vue@csp
```

Install mySQL :https://www.npmjs.com/package/mysql2
```
npm i mysql2
```

# Curl commands for server
Get customer by their customerID and return json list.
```
curl -v -X GET    http://localhost:5000/getCustomer/
```
Create customer in the database.
```
curl -v -X POST    http://localhost:5000/addCustomer -H "Content-Type: application/json" -d '{"customerID": "test", "forename": "test", "surname": "test", "email": "test@gmail.com"}'
```
Create a new customer with password.
```
curl -v -X POST    http://localhost:5000/addCustomer -H "Content-Type: application/json" -d '{"customerID": "test", "forename": "test", "surname": "test", "email": "test@gmail.com", "password": "test"}'
```
