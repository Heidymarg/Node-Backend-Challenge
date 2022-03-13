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
        
    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Generos = sequelize.define(alias, cols, config);

   // Generos.associate = function(models) {
       // Generos.hasMany(models.peliculas { // models.Movies -> Movie es el valor de alias en movie.js
            //as: "peliculas", // El nombre del modelo pero en plural
           // foreignKey: "generos_id"
       // })
    //}

    return Generos
};


