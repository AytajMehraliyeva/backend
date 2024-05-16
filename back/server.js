const cors = require('cors')
const express =require('express')
require('dotenv').config()
const mongoose =require('mongoose')

const routerUser=require('./router/User.router')

const app = express()
const PORT = process.env.PORT || 2000

app.use(cors())
app.use(express.json())
app.use("/user", routerUser)

mongoose.connect(`${process.env.BASE_URL}`).then(res => {
    console.log("Connected to db")
})

app.listen(PORT, () => {
    console.log(`App running on ${process.env.PORT}`)
})