const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');
const personajes = require('../database/models/personajes');


//Aqui tienen otra forma de llamar a cada uno de los modelos
const Peliculas = db.pelicula;
const Generos = db.Generos;
const Personajes = db.Personajes;
//---------------------------
//Dentro del actorsAPIController uso las dos forma de poder llamar a nuestros modelo
//----------------------------------
const personajesAPIController = {
    'list': (req, res) => {
        db.personajes.findAll()
        .then(personajes => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: personajes.length,
                    url: '/personajes'
                },
                data: personajes
            }
                res.json(respuesta);
            })
    },
    
    'detail': (req, res) => {
        db.personajes.findByPk(req.params.id)
            .then(personaje => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: personajes.length,
                        url: '/personajes/:id'
                    },
                    data: personaje
                }
                res.json(respuesta);
            });
    },
    
    create: (req,res) => {
        Personajes
        .create(
            {
                imagen: req.body.imagen,
                titulo: req.body.titulo,
                edad: req.body.edad,
                peso: req.body.peso,
                historia: req.body.historia
            }
        )
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: '/personajes/create'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: '/personajes/create'
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
        })    
        .catch(error => res.send(error))
    },
    update: (req,res) => {
        let personajeId = req.params.id;
        Personajes.update(
            {
                imagen: req.body.imagen,
                titulo: req.body.titulo,
                edad: req.body.edad,
                peso: req.body.peso,
                historia: req.body.historia 
            },
            {
                where: {id: personajeId}
        })
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: '/personajes/update/:id'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 204,
                        total: confirm.length,
                        url: '/personajes/update/:id'
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
        })    
        .catch(error => res.send(error))
    },
    destroy: (req,res) => {
        let personajeId = req.params.id;
        Actors
        .destroy({where: {id: personajeId}, force: true}) 
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: '/personajes/delete/:id'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 204,
                        total: confirm.length,
                        url: '/personajes/delete/:id'
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
        })    
        .catch(error => res.send(error))
    }
    
}

module.exports = personajesAPIController;