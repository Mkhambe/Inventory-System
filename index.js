const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
const port = process.env.PORT  

const app = express()
 

app.get("/home", (req, res) =>{
    res.send("tons")
})


app.listen(port,()=>{
    console.log("Server running.")
})