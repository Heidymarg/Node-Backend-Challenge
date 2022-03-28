const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');



const Pelicula = db.Pelicula;
const Generos = db.Generos;
const Personajes = db.Personajes;


const peliculasAPIController = {
    'list': (req, res) => {
        db.Pelicula.findAll({
            include: ['generos','Personajes']
        })
        .then(peliculas => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: peliculas.length,
                    url: '/peliculas'
                },
                data: peliculas
            }
                res.json(respuesta);
            }).catch(error=>console.log(error))
    },
    
    'detail': (req, res) => {
        db.Pelicula.findByPk(req.params.id,
            {
                include : ['generos','Personajes']
            })
            .then(pelicula => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: pelicula.length,
                        url: '/peliculas/:id'
                    },
                    data: pelicula
                }
                res.json(respuesta);
            });
    },
  
    create: (req,res) => {
        Pelicula
        .create(
            {
                imagen: req.body.imagen,
                titulo: req.body.titulo,
                fecha_creacion: req.body.fecha_creacion,
                calificacion: req.body.calificacion,
                id_generos: req.body.id_generos
            }
        )
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: '/peliculas/create'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: '/peliculas/create'
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
        })    
        .catch(error => res.send(error))
    },
    update: (req,res) => {
        let movieId = req.params.id;
        Movies.update(
            {
                imagen: req.body.imagen,
                titulo: req.body.titulo,
                fecha_creacion: req.body.fecha_creacion,
                calificacion: req.body.calificacion,
                id_generos: req.body.id_generos
            },
            {
                where: {id: movieId}
        })
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: '/peliculas/update/:id'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 204,
                        total: confirm.length,
                        url: '/peliculas/update/:id'
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
        })    
        .catch(error => res.send(error))
    },
    destroy: (req,res) => {
        let peliculaId = req.params.id;
        Movies
        .destroy({where: {id: peliculaId}, force: true}) 
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: '/peliculas/destroy/:id'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 204,
                        total: confirm.length,
                        url: '/peliculas/destroy/:id'
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
        })    
        .catch(error => res.send(error))
    }
    
}

module.exports = peliculasAPIController;
