
const express = require("express");
const app = express();

app.use(express.json());


app.get("/", (req,res)=>{
    res.send("heloo home");
})

app.listen(8080, ()=>{
    console.log("8080 is running");
})