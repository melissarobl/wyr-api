const express = require('express')

const indexRouter = require('./routes/index')  //import router

const app = express()  // new web app server

app.use('/', indexRouter) //everything sent to indexRouter to be handled

const server = app.listen(process.env.PORT || 3000, function() {
    console.log('Server running on port ', server.address().port)
})
//message lets us know the server is running and what port
//server is just responding with JSON