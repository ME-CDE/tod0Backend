require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 3500
const router = require("./router/todoRouter")


app.use(express.json())
app.use(cors())
app.use(router)

mongoose.connect(process.env.MY_url.toString())
.then(()=>{
    app.listen(port, ()=>{
        console.log(`DB listening to ${port}`);
    })
})
.catch(error => console.log(error))