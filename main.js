const express = require("express");
const app  = express();
port = 3000;
const bodyParser = require(`body-parser`);
const routes = require("./routes/cabs.routes");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
routes(app)
app.listen(port,()=>{
    console.log("server is listning on port");
})