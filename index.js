//IMPORTACION LIBRERIAS
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const port = process.env.PORT || 5001;


//WHATSAPP


//IMPORTACION RUTAS
const loginRoutes = require('./routes/login');
const ventasRouter = require('./routes/ventas');
const wspRouter = require('./routes/whatsapp')

//CONFIGURACION
app.use(express.json());
app.use(cors());


//CONEXION BASE DE DATOS
mongoose.connect("mongodb+srv://andres11298:Andres11298@cluster0.tzcxeta.mongodb.net/misiontic2022?retryWrites=true&w=majority");

//RUTAS
app.use(ventasRouter);
app.use(wspRouter)


//SERVIDOR
app.listen(port,()=>{
    console.log(`server runs on port ${port}`);
})