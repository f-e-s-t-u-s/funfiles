const express = require('express')
const bodyparser = require("body-parser");
const app = express();
const cors = require('cors');
const { log } = require('console');


app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));


app.post("/api/create", (req,res)=>{
    console.log(req.body);
})

app.listen(8000, () =>{
    console.log('server listening on port 8000');
})