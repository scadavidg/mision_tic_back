//importando paquetes
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const dbConfig = require('./config/dbConfig');

//inicializando nuestra aplicación de express
const app = express();

//importando la configuración de conexion con la base de datos

//creando la conexion con la base de datos mongoDB
mongoose.connect(dbConfig.urlDatabase)
    .then(db => console.log("db connected"))
    .catch(err => console.error(err))


//usando el Middleware morgan para registrar y detallar las solicitudes HTTP que llegan al servidor 
app.use(morgan("combined"));

//utilizando variables de entorno definidas en el archivo .env
require('dotenv').config();
/*para utilizar las variables de entorno en nuestro codigo 
utilizamos la estructuta process.env.nombre_variable*/
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`server listen http://localhost:${port}`)
})