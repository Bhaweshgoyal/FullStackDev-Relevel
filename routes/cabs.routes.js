const LocateCabs = require("../controller/cabs.controller")
const routes = (app)=>{
    app.get("/getcab",LocateCabs.getThem);
}
module.exports = routes;