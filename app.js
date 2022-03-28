const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const app = express();

const indexRouter = require('./routes/index');

const PeliculasRouter = require('./routes/api/peliculasAPIRoutes')
const GenerosRouter = require('./routes/api/generosAPIRoute')
const PersonajesRouter = require('./routes/api/personajesAPIRoutes')

// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../public')));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));



app.use('/peliculas', PeliculasRouter);
app.use('/personajes', PersonajesRouter );
app.use('/generos', GenerosRouter);




app.listen('3000', () => console.log('Servidor corriendo en el puerto 3000'));
