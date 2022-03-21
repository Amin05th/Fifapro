require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const Loginroute = require('./Routes/Loginroute')
const Saveroute = require('./Routes/Saveroute')
const Dashboardroute = require('./Routes/Dashboard')
const Teammanagmentroute = require('./Routes/Teammanagment')
const Packsroute = require('./Routes/Packsroute')
const app = express()
const PORT = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('public'))
mongoose.connect("mongodb://localhost/fifa", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})


app.use(Loginroute)

app.use(Saveroute)

app.use(Dashboardroute)

app.use(Teammanagmentroute)

app.use(Packsroute)

app.listen(PORT)