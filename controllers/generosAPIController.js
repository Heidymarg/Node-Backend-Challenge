const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');



const Peliculas = db.Pelicula;
const Generos = db.Generos;
const personajes = db.Personajes;


const generosAPIController = {
    'list': (req, res) => {
        db.Generos.findAll()
        .then(Generos => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: Generos.length,
                    url: '/generos'
                },
                data: Generos
            }
                res.json(respuesta);
            })
    },
    
    'detail': (req, res) => {
        db.Generos.findByPk(req.params.id)
            .then(Generos => {
                let respuesta = {
                    meta: {
                        status: 200,
                        url: '/generos/:id'
                    },
                    data: Generos
                }
                res.json(respuesta);
            });
    },


    'generosPelicula': (req, res) => {
        db.Generos.findByPk(req.params.id,{
            include: ['peliculas']
        })
            .then(generos => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: generos.length,
                        url: '/generos/:id/pelicula'
                    },
                    data: generos
                }
                res.json(respuesta);
            });
    },

    create: (req,res) => {
        Generos
        .create(
            {
                nombre: req.body.nombre,
                imagen: req.body.imagen,
               
               
            }
        )
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: '/generos/create'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: '/generos/create'
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
        })    
        .catch(error => res.send(error))
    },
    update: (req,res) => {
        let GeneroId = req.params.id;
        Generos.update(
            {
                nombre: req.body.nombre,
                imagen: req.body.imagen,
               
            },
            {
                where: {id: GeneroId}
        })
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: '/generos/update/:id'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 204,
                        total: confirm.length,
                        url: '/generos/update/:id'
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
        })    
        .catch(error => res.send(error))
    },
    destroy: (req,res) => {
        let generoId = req.params.id;
        Movies
        .destroy({where: {id: generoId}, force: true}) 
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: '/generos/destroy/:id'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 204,
                        total: confirm.length,
                        url: '/generos/destroy/:id'
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
        })    
        .catch(error => res.send(error))
    }
}

module.exports = generosAPIController;