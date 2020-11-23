const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}))
app.use('/public',express.static('public'));
app.use(bodyParser.json())
app.set("view engine","ejs");

app.listen(8002, ()=>{console.log("Server is listening at port 8002")})