//IMPORTACION LIBRERIAS
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const port = process.env.PORT || 3001;


//WHATSAPP


//IMPORTACION RUTAS
const colaboradorRouter = require('./routes/colaborador');

//CONFIGURACION
app.use(express.json());
app.use(cors());


//CONEXION BASE DE DATOS
mongoose.connect("mongodb+srv://sedan:sedan123@cluster0.xxqoel2.mongodb.net/sedan2022?retryWrites=true&w=majority");

//RUTAS
app.use(colaboradorRouter);


//SERVIDOR
app.listen(port,()=>{
    console.log(`server runs on port ${port}`);
})