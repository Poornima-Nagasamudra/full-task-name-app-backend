const express = require('express')
const cors = require('cors')
const app = express()
const port = 4001 
const nameDB = require('./config/databse')
const routes = require('./config/routes')

app.use(express.json())
app.use(cors())
nameDB()
app.use('/', routes)



app.listen(port, function(){
    console.log('server runs on port', port)
})