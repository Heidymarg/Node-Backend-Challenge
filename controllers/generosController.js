const db = require('../database/models');
const sequelize = db.sequelize;


const generosController = {
    'list': (req, res) => {
        db.generos.findAll()
            .then(generos => {
                res.status200('generosList.ejs', {generos})
            })
    },
    'detail': (req, res) => {
        db.generos.findByPk(req.params.id)
            .then(generos=> {
                res.render('generosDetail.ejs', {generos});
            });
    }

}
 



module.exports = generosController;