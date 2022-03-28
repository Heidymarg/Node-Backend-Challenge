module.exports = (sequelize, dataTypes) => {
    let alias = 'Generos';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        
        nombre: {
            type: dataTypes.STRING(80),
            allowNull: false
        },
        imagen:{
            type: dataTypes.STRING(350),
        }
        
    };
    let config = {
        tableName: 'generos',
        timestamps: false
       
    }
    const Generos = sequelize.define(alias, cols, config);

   Generos.associate = function(models) {
   Generos.hasMany(models.Pelicula, {
        as: "pelicula",
        foreignKey: "id_generos"
        })
    }

    return Generos
};


