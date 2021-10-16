const express = require('express')
const Router = express.Router()
const mongoose = require("mongoose");
const User = require('../models/User.js');

Router.get('/',(req,res,next) => {
    User.find().exec().then(users =>{
        res.status(200).json(users)
    }).catch(error => {
        res.status(500).json({error:error})
    })
})

Router.post("/", (req, res, next) => {
    const user = new User({
      name: req.body.name,
      age: req.body.age,
      city: req.body.city
    });
    user.save().then(respuesta => {
        res.status(201).json({
          mensaje: "Usuario insertado con exito",
          UsuarioNuevo: respuesta
        });
    }).catch(error => {
        res.status(500).json({
          error: error
        });
      });
  });

module.exports=Router;
