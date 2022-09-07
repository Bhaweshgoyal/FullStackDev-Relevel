const {getservices} = require("../services/cabs.service");
const getThem = async(req,res)=>{
 const response = await getservices()
 return res.json({
    data:response
 })
}
module.exports = {getThem}