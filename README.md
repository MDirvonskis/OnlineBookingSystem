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
## GET commands
Get customer by their customerID and return json list.
```
curl -v -X GET    http://localhost:5000/getCustomer/id
```
Get all customers from database.
```
curl -v -X GET    http://localhost:5000/getALLCustomers
```

## POST commands
Create customer in the database.
```
curl -v -X POST    http://localhost:5000/addCustomer -H "Content-Type: application/json" -d '{"customerID": "test", "forename": "test", "surname": "test", "email": "test@gmail.com"}'
```
Create a new customer with password.
```
curl -v -X POST    http://localhost:5000/addCustomer -H "Content-Type: application/json" -d '{"customerID": "test", "forename": "test", "surname": "test", "email": "test@gmail.com", "password": "test"}'
```
Create a new room
```
curl -v -X POST    http://localhost:5000/addRoom -H "Content-Type: application/json" -d '{"roomID": 123, "capacity": "test", "info": "test"}'
```
Create a new booking
```
curl -v -X POST    http://localhost:5000/addBooking -H "Content-Type: application/json" -d '{"bookingID": 1,"dateOfBooking": "1999-2-5","dateOfStay": "1999-2-5","dateOfDeparture": "1999-2-5","customerID": "test", "roomID": 123}'
```
## DELETE commands
Delete a customer from database by their customerID
```
curl -v -X DELETE  http://localhost:5000/remCustomer/id
```
Delete a room from database by their roomID
```
curl -v -X DELETE  http://localhost:5000/remRoom/id
```
Delete a booking from the database by bookingID
```
curl -v -X DELETE  http://localhost:5000/remBookings/id
```