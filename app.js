const express = require('express');
const path = require('path');
const app = express();

//Ejecuto el llamado a mis rutas
const indexRouter = require('./routes/index');
const peliculasRoutes = require('./routes/peliculasRoutes');
const generosRoutes = require('./routes/generosRoutes');


// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../public')));


app.use(peliculasRoutes);
app.use(generosRoutes);

//Activando el servidor desde express
app.listen('3000', () => console.log('Servidor corriendo en el puerto 3000'));
