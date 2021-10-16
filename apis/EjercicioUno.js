const express = require('express')
const Router = express.Router()
const Consumir = require('../functions/ConsumirApi');


Router.get('/',(req,res)=>{
   
    ConsumirApi().then(function (respuesta){
        //console.log("respuesta:::",respuesta)
        res.status(200).send(respuesta)   
    }
       
    );
   
})


module.exports=Router;