require("./config/port")
const cors = require('cors')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

/**APIS**/
const notification = require("./view/notification")
/********/

app.use(notification)

app.listen(process.env.PORT,()=>{
    console.log("SERVER LISTEN "+process.env.PORT)
})