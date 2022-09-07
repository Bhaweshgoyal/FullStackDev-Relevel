const cabservices = require("../models/index").cabservices

const getservices = async()=>{
    const response = await cabservices.findAll();
    return response;
}   

module.exports = {getservices};