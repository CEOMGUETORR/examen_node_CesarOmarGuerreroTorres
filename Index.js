//Correr Proyecto con node Index.js
//Para ejercicio Uno http://localhost:3000/Ejercicio
//Para Obtener Usuarios GEt http://localhost:3000/User
//Para Guardar Usuario POST http://localhost:3000/User

const express = require('express')
const app = express()
const BodyParser = require('body-parser')
const port = 3000
const UserRoute = require('./apis/User')
const EjercicioRoute = require('./apis/EjercicioUno')

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:pQo82ujIYNptFBxG@cluster0.dzxo9.mongodb.net/atlantiaDev?retryWrites=true&w=majority')
var DataBase =mongoose.connection;
DataBase.once('open',()=>{
    console.log("Coneccion Exitosa")
})

app.use(BodyParser.urlencoded({extended:false}))
app.use(BodyParser.json())
app.use((req,res,next) => {
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
      );
      next();
});


app.use("/User",UserRoute);
app.use("/Ejercicio",EjercicioRoute);

app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
  });
  
  app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
      error: {
        message: error.message
      }
    });
  });



app.listen(3000,()=>{
    console.log("aplicacion corriendo en localhost:"+port)
})