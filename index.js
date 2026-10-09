const express = require("express")
const app = express()
const apiRouter = require("./routes/api")
app.use("/api01",apiRouter)
app.listen(5000,()=>{
    console.log("Server is running")
})